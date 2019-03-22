import { Product } from './product';

/**
 * Represents a user's placement of a product in their cart, including that quantity of that product in the cart.
 */
export class ProductSelection {
  constructor() {

  }

  product: Product;
  quantity: number;
}
