import { TestBed, async, inject } from '@angular/core/testing';

import { CheckoutGuard } from './checkout.guard';

describe('CheckoutGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckoutGuard]
    });
  });

  it('should ...', inject([CheckoutGuard], (guard: CheckoutGuard) => {
    expect(guard).toBeTruthy();
  }));
});
