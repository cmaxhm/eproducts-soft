import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { PurchasesComponent } from "./dashboard/purchases/purchases.component";
import { DispatchesComponent } from "./dashboard/dispatches/dispatches.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'pedidos', component: PurchasesComponent },
      { path: 'despachos', component: DispatchesComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'pedidos' }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
