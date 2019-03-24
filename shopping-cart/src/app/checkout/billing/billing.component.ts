import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { CheckoutService } from '../checkout.service';
import { Router } from '@angular/router';
import { PaymentInformation } from '../orders/payment-information';


@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.sass']
})
export class BillingComponent implements OnInit {

  paymentForm = new FormGroup({
    cardNumber: new FormControl(
      // card number would need similar logic to cvv - don't render the whole thing back to the user.
      this.checkoutService.paymentInformation.cardNumber,
      [Validators.required, Validators.pattern(/^\d{4}\-?\d{4}\-?\d{4}\-?\d{4}$/)]
    ),

    expirationMonth: new FormControl(
      this.checkoutService.paymentInformation.expirationMonth,
      [Validators.required, expirationMonthValidator()]
    ),

    expirationYear: new FormControl(
      this.checkoutService.paymentInformation.expirationYear,
      [Validators.required, expirationYearValidator()]
    ),

    cvv: new FormControl(
      '', // always ask for cvv, don't present it back to the user.
      [Validators.required, Validators.pattern(/^\d{3}$/)]
    ),
  });

  submitAttempted = false; // flag to decide whether or not to show errors.  wait until first submit attempt.

  constructor(private router: Router, private checkoutService: CheckoutService) {

  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitAttempted = true;

    if (!this.paymentForm.valid) {
      return;
    }

    const info = new PaymentInformation();
    info.cardNumber = this.paymentForm.value.cardNumber;
    info.expirationMonth = this.paymentForm.value.expirationMonth;
    info.expirationYear = this.paymentForm.value.expirationYear;
    info.cvv = this.paymentForm.value.cvv;

    this.checkoutService.paymentInformation = info;
    this.router.navigate(['checkout', 'shipping']);
  }
}

function expirationMonthValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value >= 1 && control.value <= 12) {
      return null;
    }
    return { 'expirationMonth': { value: control.value } };
  };
}

function expirationYearValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value >= new Date().getFullYear() && control.value <= (new Date().getFullYear() + 10)) {
      return null;
    }
    return { 'expirationYear': { value: control.value } };
  };
}