import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ErrorHandler } from '../error-handler';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Order } from './orders/order';
import { Cart } from '../cart';
import { PaymentInformation } from './orders/payment-information';
import { ShippingInformation } from './orders/shipping-information';
import { OrderResult, OrderFailure, OrderConfirmation } from './orders/order-result';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) {
  }

  private orderUrl = `${environment.apiEndpoint}/order`;

  paymentInformation: PaymentInformation = new PaymentInformation();
  shippingInformation: ShippingInformation = new ShippingInformation();

  submitOrder(cart: Cart): Observable<OrderResult> {

    const order = new Order(this.paymentInformation, this.shippingInformation, cart.selections);

    return this.http.post<OrderResult>(this.orderUrl, order, httpOptions)
      .pipe(
        catchError(ErrorHandler.handleError<OrderResult>(new OrderFailure()))
      );
  }

  clear() {
    this.paymentInformation = new PaymentInformation();
    this.shippingInformation = new ShippingInformation();
  }
}