import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError , map , tap} from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json' })
};
@Injectable()
export class FormService {
  private countriesListUrl = 'api/menuoption';
  constructor(private http: HttpClient) { }
  getCountries(): Observable<String[]> {
    return this.http.get<String[]>(this.countriesListUrl)
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

}
