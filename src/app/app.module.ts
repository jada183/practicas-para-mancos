import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutesModule } from './routes.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
