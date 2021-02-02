import { TestBed } from '@angular/core/testing';

import { DataCurrenciesService } from './data-currencies.service';

describe('DataCurrenciesService', () => {
  let service: DataCurrenciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCurrenciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
