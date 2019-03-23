import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor() { }

  paymentInformation: PaymentInformation = new PaymentInformation();
  shippingInformation: ShippingInformation = new ShippingInformation();

  submitOrder() : Observable<any> {
    if (!this.paymentInformation.isComplete() || !this.shippingInformation.isComplete()) {
      throw new Error('Incomplete order.  Cannot be placed.');
    }

    //todo: call server.
    return of(true);
  }

  addPaymentInformation(info: PaymentInformation) {
    // cannot accept the object given - may not have the declared methods due to duck typing.
    // create an instance of the class and fill the properties.
    this.paymentInformation = new PaymentInformation();
    this.paymentInformation.cardNumber = info.cardNumber;
    this.paymentInformation.expirationMonth = info.expirationMonth;
    this.paymentInformation.expirationYear = info.expirationYear;
    this.paymentInformation.cvv = info.cvv;
  }

  addShippingInformation(info: ShippingInformation) {
    this.shippingInformation = new ShippingInformation();
    this.shippingInformation.name = info.name;
    this.shippingInformation.street = info.street;
    this.shippingInformation.city = info.city;
    this.shippingInformation.state = info.state;
    this.shippingInformation.zip = info.zip;
  }

  clear() {
    this.paymentInformation = new PaymentInformation();
    this.shippingInformation = new ShippingInformation();
  }
}

class PaymentInformation {
  cardNumber: string;
  expirationMonth: number;
  expirationYear: number;
  cvv: number;
  isComplete(): boolean {
    return !!(this.cardNumber && this.expirationMonth && this.expirationYear && this.cvv);
  };
  maskedCardNumber(): string {
    return "****-****-****-" + this.cardNumber.substring(this.cardNumber.length - 4);
  };
}

class ShippingInformation {
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  isComplete(): boolean {
    return !!(this.name && this.street && this.city && this.state && this.zip);
  };
}