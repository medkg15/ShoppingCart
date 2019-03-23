import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { CartCalculator } from '../cart-calculator';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  constructor(public cart: Cart, private cartCalculator: CartCalculator) { }

  ngOnInit() {
  }

  subTotal(): number {
    return this.cartCalculator.calculateSubTotal(this.cart);
  }

  remove(product: Product): void {
    this.cart.remove(product);
  }
}
