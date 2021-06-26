import { Component } from '@angular/core';
import { Product } from "../../shared/interfaces/product";
import { ProductsService } from "../../shared/services/products.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  public products: Product[] = [];
  private cart: Product[] = [];

  constructor(private productService: ProductsService) {
    this.products = this.productService.getProducts;
  }

  addToCart(product: Product): void {
    if (localStorage.getItem('cart')) {
      this.cart = JSON.parse(localStorage.getItem('cart')!);
    }

    this.cart.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

}
