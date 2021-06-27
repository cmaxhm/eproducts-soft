import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { AdminRoutingModule } from './admin-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PurchasesComponent } from './dashboard/purchases/purchases.component';
import { DispatchesComponent } from './dashboard/dispatches/dispatches.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PurchasesComponent,
    DispatchesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
