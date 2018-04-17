import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  user = new User;
  countries: any[];

  constructor(private formService: FormService, public usersService: UsersService) { }

  ngOnInit() {
    this.getCoutries();
  }

  getCoutries(): void {
    this.formService.getCountries().subscribe(countries => this.countries = countries);
  }

  addUser(): void {
    this.usersService.add(this.user);
  }
}
