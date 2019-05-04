import { TestBed } from '@angular/core/testing';

import { PizzaServiceService } from './pizza-service.service';

describe('PizzaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PizzaServiceService = TestBed.get(PizzaServiceService);
    expect(service).toBeTruthy();
  });
});
