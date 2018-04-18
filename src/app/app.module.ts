import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutesModule } from './routes.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { FormService } from './form.service';
import { UsersService } from './users.service';
import { InMemoryCountriesFormService } from './in-memory-countries-form.service';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormComponent } from './form/form.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { SopaComponent } from './sopa/sopa.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    FormComponent,
    ListUsersComponent,
    SopaComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryCountriesFormService, { dataEncapsulation: false }
    )
  ],
  providers: [InMemoryCountriesFormService, FormService, UsersService],
  bootstrap: [AppComponent]
})

export class AppModule { }
