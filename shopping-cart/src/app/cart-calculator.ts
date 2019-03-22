import { Injectable } from '@angular/core';
import { Cart } from './cart';

/** 
 * Responsible for calculating costs based on the products in the user's cart.
*/
@Injectable({
    providedIn: 'root'
  })
export class CartCalculator {
    calculateSubTotal(cart: Cart) {
        let sum = 0;
        for (let selection of cart.selections) {
            sum += selection.product.price * selection.quantity;
        }
        return sum;
    }
}