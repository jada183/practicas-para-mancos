import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Subject } from 'rxjs/Subject';
import { FormService } from '../form.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Country } from '../country';
@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  constructor(private formService: FormService) { }
  private searchTerms = new Subject<String>();
  countries$: Observable<Country[]>;
  search(term: String): void {
    this.searchTerms.next(term);
  }
  ngOnInit() {
    this.countries$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.formService.searchCountry(term)),
    );
  }

}
