import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of([
      { id: 1, name: 'Shoes', imageUrl: 'https://loremflickr.com/320/240/dog', price: 49.99 },
      { id: 2, name: 'Milk', imageUrl: 'https://loremflickr.com/640/360', price: 3.99 },
    ]);
  }
}
