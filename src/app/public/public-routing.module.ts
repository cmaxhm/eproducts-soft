import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from "./products-list/products-list.component";

const routes: Routes = [
  { path: '', component: ProductsListComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PublicRoutingModule { }
