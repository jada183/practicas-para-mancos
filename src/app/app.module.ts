import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutesModule } from './routes.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormComponent } from './form/form.component';
import { InMemoryCountriesFormService } from './in-memory-countries-form.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormService } from './form.service';
import { ListUsersComponent } from './list-users/list-users.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    FormComponent,
    ListUsersComponent
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
  providers: [InMemoryCountriesFormService, FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
