import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryCountriesFormService implements InMemoryDbService {
  createDb() {
    const countries = [
      {name: 'Alemania'},
      {name: 'Hungría'},
      {name: 'Austria'},
      {name: 'Irlanda'},
      {name: 'Bélgica'},
      {name: 'Italia'},
      {name: 'Bulgaria'},
      {name: 'Letonia'},
      {name: 'Chipre'},
      {name: 'Lituania'},
      {name: 'Croacia'},
      {name: 'Luxemburgo'},
      {name: 'Dinamarca'},
      {name: 'Malta'},
      {name: 'Eslovaquia'},
      {name: 'Países Bajos'},
      {name: 'Eslovenia'},
      {name: 'Polonia'},
      {name: 'España'},
      {name: 'Portugal'},
      {name: 'Estonia'},
      {name: 'Reino Unido'},
      {name: 'Finlandia'},
      {name: 'República Checa'},
      {name: 'Francia'},
      {name: 'Rumanía'},
      {name: 'Grecia'},
      {name: 'Suecia'},
    ];
    return  { countries };
  }
  constructor() {}
}
