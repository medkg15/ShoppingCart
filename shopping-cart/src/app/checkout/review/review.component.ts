import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout.service';
import { Router } from '@angular/router';
import { Cart } from '../../cart';
import { CartCalculator } from '../../cart-calculator';

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

  ngOnInit() {
  }

  submitOrder() {
    this.checkoutService.submitOrder().subscribe(() => {
      // we're going to retain payment + shipping info in case another order is made.
      // this would _not_ be done in production for security reasons
      //this.checkoutService.clear();
      this.cart.empty();
      this.router.navigate(['checkout', 'confirmation']);
    });
  }

  subTotal(): number {
    return this.cartCalculator.calculateSubTotal(this.cart);
  }
}
