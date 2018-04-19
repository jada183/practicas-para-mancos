import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError , map , tap} from 'rxjs/operators';

import { Country } from './country';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json' })
};

@Injectable()
export class FormService {
  private countriesListUrl = 'api/countries';
  constructor(private http: HttpClient) { }
  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesListUrl)
    .pipe(
      catchError(this.handleError('getCountries', []))
    );
  }
  private handleError<T> (operation= 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  getCountry(name: String): Observable<Country> {
    const url = `${this.countriesListUrl}/${name}`;
    return this.http.get<Country>(url).pipe(
      catchError(this.handleError<Country>(`getHero name=${name}`))
    );
  }

  searchCountry(term: String): Observable<Country[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Country[]>(`api/countries/?name=${term}`)
      .pipe(
        catchError(this.handleError<Country[]>('searchCountry', []))
      );

  }

}
