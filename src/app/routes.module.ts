import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent}
];

@NgModule({
  imports: [
    [ RouterModule.forRoot(routes) ],
    CommonModule
  ],
  exports: [ RouterModule ]
})

export class RoutesModule { }
