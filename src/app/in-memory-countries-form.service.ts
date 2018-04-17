import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryCountriesFormService implements InMemoryDbService {
  createDb() {
    const countries = [
      'Alemania',
      'Hungría',
      'Austria',
      'Irlanda',
      'Bélgica',
      'Italia',
      'Bulgaria',
      'Letonia',
      'Chipre',
      'Lituania',
      'Croacia',
      'Luxemburgo',
      'Dinamarca',
      'Malta',
      'Eslovaquia',
      'Países Bajos',
      'Eslovenia',
      'Polonia',
      'España',
      'Portugal',
      'Estonia',
      'Reino Unido',
      'Finlandia',
      'República Checa',
      'Francia',
      'Rumanía',
      'Grecia',
      'Suecia',
    ];
    return  { countries };
  }
  constructor() {}
}
