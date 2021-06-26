import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'iniciar-sesion', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
      { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
      { path: '**', pathMatch: 'full', redirectTo: '' }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
