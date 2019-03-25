import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CheckoutService } from './checkout.service';

describe('CheckoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: CheckoutService = TestBed.get(CheckoutService);
    expect(service).toBeTruthy();
  });
});
