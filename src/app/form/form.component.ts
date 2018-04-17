import { Component, OnInit } from '@angular/core';
import {FormService } from '../form.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  countries: any[];
  constructor(private formService: FormService) { }
  ngOnInit() {
    this.getCoutries();
  }
  getCoutries(): void {
    this.formService.getCountries().subscribe(countries => this.countries = countries);
  }

}
