import { ProductSelection } from './product-selection';
import { Product } from './product';
import { Injectable } from '@angular/core';

/**
 * Represents the product selections made by the user while shopping on the site.
 */
@Injectable({
  providedIn: 'root'
})
export class Cart {
  constructor() {

  }

  selections: ProductSelection[] = [];

  add(product: Product, quantity: number): void {
    const existing = this.selections.find(existingSelection => existingSelection.product.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    }
    else {
      this.selections.push({ product: product, quantity: quantity });
    }
  }

  changeQuantity(product: Product, quantity: number): void {
    // we'll handle changing a quantity for a product not yet in the cart gracefully.  
    // just add it to the cart and set the quantity rather than throwing an error.
    const existing = this.selections.find(existingSelection => existingSelection.product.id === product.id);
    if (existing) {
      existing.quantity = quantity;
    }
    else {
      this.selections.push({ product: product, quantity: quantity });
    }
  }

  remove(product: Product): void {
    this.selections = this.selections.filter(currentSelection => currentSelection.product.id !== product.id);
  }

  empty(): void {
    this.selections = [];
  }

  count(): number {
    return this.selections.map((selection) => selection.quantity).reduce((sum, quantity) => sum += quantity, 0);
  }
}
