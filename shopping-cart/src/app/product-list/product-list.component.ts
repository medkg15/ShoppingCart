import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Cart } from '../cart';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  productAdded: Product;

  quantityOptions = [
    1, 2, 3, 4, 5, 6, 7, 8
  ];

  products: Product[] = [];

  constructor(private productService: ProductService, private cart: Cart) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

  addToCart(product: Product, quantity: number): void {
    // todo: quantity needs to be converted to a number, even though its specified as one?
    this.cart.add(product, +quantity);
    this.productAdded = product;
  }

  clearAdd(): void {
    this.productAdded = null;
  }

}
