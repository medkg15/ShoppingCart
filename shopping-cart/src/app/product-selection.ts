import { Product } from './product';

/**
 * Represents a selection of one or more of a product in the user's cart.
 */
export class ProductSelection {
  constructor() {

  }

  product: Product;
  quantity: number;
}
