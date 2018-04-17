import { TestBed, inject } from '@angular/core/testing';

import { InMemoryCountriesFormService } from './in-memory-countries-form.service';

describe('InMemoryCountriesFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryCountriesFormService]
    });
  });

  it('should be created', inject([InMemoryCountriesFormService], (service: InMemoryCountriesFormService) => {
    expect(service).toBeTruthy();
  }));
});
