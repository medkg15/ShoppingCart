import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';

/** 
 * Service for providing Product data to the application.
*/
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of([
      { id: 1, name: 'Shoes', imageUrl: 'https://loremflickr.com/320/240/dog', price: 49.99, description: 'Good for your feet.' },
      { id: 2, name: 'Milk', imageUrl: 'https://loremflickr.com/640/360', price: 3.99, description: 'Delicious.' },
    ]);
  }
}
