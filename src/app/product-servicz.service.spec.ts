import { TestBed } from '@angular/core/testing';

import { ProductServiczService } from './product-servicz.service';

describe('ProductServiczService', () => {
  let service: ProductServiczService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductServiczService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
