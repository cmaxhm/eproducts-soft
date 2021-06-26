import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { PublicRoutingModule } from "./public-routing.module";
import { ProductsListComponent } from './products-list/products-list.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    ProductsListComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule
  ]
})
export class PublicModule { }
