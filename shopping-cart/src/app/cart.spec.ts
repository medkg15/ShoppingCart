import { Cart } from './cart';
import { ProductSelection } from './product-selection';
import { Product } from './product';

describe('Cart', () => {
  // define some products to be used in various cart tests.
  const product1 = new Product();
  product1.id = 1;

  const product2 = new Product();
  product2.id = 2;

  it('should create an instance', () => {
    expect(new Cart()).toBeTruthy();
  });

  it('should initially be empty', () => {
    expect(new Cart().selections.length).toBe(0);
  });

  it('should add selections', () => {
    const cart = new Cart();
    cart.add(product1, 3);
    cart.add(product2, 1);
    // check property equality, not reference equality.
    expect(cart.selections).toContain(jasmine.objectContaining({product: product1, quantity: 3}));
    expect(cart.selections).toContain(jasmine.objectContaining({product: product2, quantity: 1}));
  });

  it('should add quantity to existing product selections', () => {
    const cart = new Cart();
    cart.add(product1, 3);
    cart.add(product1, 1);
    expect(cart.selections[0].quantity).toBe(4);
  });

  it('should change quantity for existing product selection', () => {
    const cart = new Cart();
    cart.add(product1, 3);
    cart.changeQuantity(product1, 2);
    expect(cart.selections[0].quantity).toBe(2);
  });

  it('should add product when changing quantity for new product', () => {
    const cart = new Cart();
    cart.changeQuantity(product1, 3);
    expect(cart.selections[0].quantity).toBe(3);
  });

  it('should remove selections', () => {
    const cart = new Cart();
    const selection: ProductSelection = { product: product1, quantity: 3 };
    cart.remove(product1);
    expect(cart.selections).not.toContain(selection);
  });

  it('should count all product selections and quantities', () => {
    const cart = new Cart();
    cart.add(product1, 2);
    cart.add(product2, 1);
    expect(cart.count()).toBe(3);
  });

  it('should be emptied', () => {
    const cart = new Cart();
    cart.add(product1, 2);
    cart.add(product2, 1);
    cart.empty();
    expect(cart.selections.length).toBe(0);
  });
});
