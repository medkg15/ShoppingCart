import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout.service';
import { Router } from '@angular/router';
import { Cart } from '../../cart';
import { CartCalculator } from '../../cart-calculator';
import { OrderResult } from '../orders/order-result';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
})
export class ReviewComponent implements OnInit {

  constructor(
    public checkoutService: CheckoutService,
    private router: Router,
    public cart: Cart,
    private cartCalculator: CartCalculator) { }

  result: OrderResult;

  ngOnInit() {
  }

  submitOrder() {
    this.checkoutService.submitOrder(this.cart).subscribe(result => {

      this.result = result;

      if (result.success) {

        // we're going to retain payment + shipping info in case another order is made.
        // this would be different if we had auth functionality, etc.
        // this.checkoutService.clear();

        this.cart.empty();
      }
    });
  }

  subTotal(): number {
    return this.cartCalculator.calculateSubTotal(this.cart);
  }
}
