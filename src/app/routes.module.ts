import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { InicioComponent } from './inicio/inicio.component';
import { FormComponent } from './form/form.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { SopaComponent } from './sopa/sopa.component';
import { ServiciosMancosComponent } from './servicios-mancos/servicios-mancos.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent},
  { path: 'users', component: ListUsersComponent },
  { path: 'formulario', component: FormComponent},
  { path: 'sopa', component: SopaComponent},
  { path: 'servicios', component: ServiciosMancosComponent}
];

@NgModule({
  imports: [
    [ RouterModule.forRoot(routes) ],
    CommonModule
  ],
  exports: [ RouterModule ]
})

export class RoutesModule { }
