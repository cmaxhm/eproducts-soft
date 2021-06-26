import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from "./products-list/products-list.component";
import { CartComponent } from "./cart/cart.component";

const routes: Routes = [
  { path: '', component: ProductsListComponent },
  { path: 'carrito', component: CartComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PublicRoutingModule { }
