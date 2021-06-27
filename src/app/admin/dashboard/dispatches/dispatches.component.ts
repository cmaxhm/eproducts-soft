import { Component } from '@angular/core';
import { Purchase } from "../../../shared/interfaces/purchase";
import { Product } from "../../../shared/interfaces/product";

@Component({
  selector: 'app-dispatches',
  templateUrl: './dispatches.component.html',
  styleUrls: ['./dispatches.component.scss']
})
export class DispatchesComponent {

  public purchases: Purchase[];
  public dispatches: Purchase[];

  constructor() {
    this.purchases = [];
    this.dispatches = [];

    if (localStorage.getItem('purchases')) {
      this.purchases = JSON.parse(localStorage.getItem('purchases')!);
    } else {
      localStorage.setItem('purchases', JSON.stringify([]));
    }

    if (localStorage.getItem('dispatches')) {
      this.dispatches = JSON.parse(localStorage.getItem('dispatches')!);
    } else {
      localStorage.setItem('dispatches', JSON.stringify([]));
    }
  }

  calculateTotal(purchase: Purchase): number {
    let total = 0;

    purchase.cart.forEach((product: Product) => {
      total += product.price;
    });

    return total;
  }

}
