import { Component } from '@angular/core';
import { Product } from "../../shared/interfaces/product";
import { Purchase } from "../../shared/interfaces/purchase";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "../../shared/interfaces/user";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  private user: User;
  public cart: Product[];
  public form: FormGroup;
  public cartTotal: number;
  public purchased: boolean;
  private purchase?: Purchase;
  private purchases?: Purchase[];

  constructor(private formBuilder: FormBuilder) {
    this.user = {};
    this.cart = [];
    this.cartTotal = 0;
    this.purchased = false;
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
    });

    if (localStorage.getItem('cart')) {
      this.cart = JSON.parse(localStorage.getItem('cart')!);

      this.cart.forEach(({ price }) => this.cartTotal += price);
    }
  }

  removeProduct(product: Product): void {
    this.cartTotal = 0;

    this.cart.splice(this.cart.indexOf(product), 1);
    this.cart.forEach(({ price }) => this.cartTotal += price);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  submitPurchase(): void {
    this.purchased = true;
    this.purchase = {
      user: this.form.value,
      cart: this.cart
    }

    if (localStorage.getItem('purchases')) {
      this.purchases = JSON.parse(localStorage.getItem('purchases')!);

      this.purchases!.push(this.purchase);
      localStorage.setItem('purchases', JSON.stringify(this.purchases));
    } else {
      localStorage.setItem('purchases', JSON.stringify([this.purchase]));
    }

    this.cart = [];
    this.user = this.form.value;
    this.cartTotal = 0;
    this.form.reset({});
    localStorage.removeItem('cart');
  }

}
