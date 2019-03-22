import { CartCalculator } from './cart-calculator';
import { Cart } from './cart';
import { Product } from './product';

describe('CartCalculator', () => {
  const product1 = new Product();
  product1.id = 1;
  product1.price = 4.50;
  const product2 = new Product();
  product2.id = 2;
  product2.price = 2.75;

  it('should create an instance', () => {
    expect(new CartCalculator()).toBeTruthy();
  });

  it('should calculate zero subTotal for empty cart', () => {
    expect(new CartCalculator().calculateSubTotal(new Cart())).toBeCloseTo(0, 2);
  });

  it('should calculate subTotal for cart with one product', () => {
    const cart = new Cart();
    cart.add(product1, 2);
    expect(new CartCalculator().calculateSubTotal(cart)).toBeCloseTo(9, 2);
  });

  it('should calculate subTotal for cart with multiple products', () => {
    const cart = new Cart();
    cart.add(product1, 2);
    cart.add(product2, 3);
    expect(new CartCalculator().calculateSubTotal(cart)).toBeCloseTo(17.25, 2);
  });
});
