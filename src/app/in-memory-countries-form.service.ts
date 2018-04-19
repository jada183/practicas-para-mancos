import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryCountriesFormService implements InMemoryDbService {
  createDb() {
    const countries = [
      {name: 'Alemania', ubicacion: 'centro'},
      {name: 'Hungría', ubicacion: 'centro'},
      {name: 'Austria', ubicacion: 'centro' },
      {name: 'Irlanda', ubicacion: 'norte'},
      {name: 'Bélgica', ubicacion: 'centro'},
      {name: 'Italia', ubicacion: 'sur'},
      {name: 'Bulgaria', ubicacion: 'este'},
      {name: 'Letonia', ubicacion: 'este'},
      {name: 'Chipre', ubicacion: 'sur'},
      {name: 'Lituania' , ubicacion: 'este'},
      {name: 'Croacia' , ubicacion: 'este'},
      {name: 'Luxemburgo', ubicacion: 'centro'},
      {name: 'Dinamarca' , ubicacion: 'norte'},
      {name: 'Malta', ubicacion: 'sur'},
      {name: 'Eslovaquia', ubicacion: 'este'},
      {name: 'Países Bajos' , ubicacion: 'centro'},
      {name: 'Eslovenia', ubicacion: 'este'},
      {name: 'Polonia', ubicacion: 'este'},
      {name: 'España' , ubicacion: 'sur'},
      {name: 'Portugal', ubicacion: 'sur'},
      {name: 'Estonia', ubicacion: 'este'},
      {name: 'Reino Unido', ubicacion: 'norte'},
      {name: 'Finlandia', ubicacion: 'norte'},
      {name: 'República Checa' , ubicacion: 'centro'},
      {name: 'Francia' , ubicacion: 'centro'},
      {name: 'Rumanía', ubicacion: 'este'},
      {name: 'Grecia', ubicacion: 'sur'},
      {name: 'Suecia', ubicacion: 'norte'},
    ];
    return  { countries };
  }
  constructor() {}
}
