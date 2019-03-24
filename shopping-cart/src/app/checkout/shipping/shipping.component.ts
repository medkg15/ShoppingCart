import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { CheckoutService } from '../checkout.service';
import { Router } from '@angular/router';
import { ShippingInformation } from '../orders/shipping-information';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.sass']
})
export class ShippingComponent implements OnInit {

  shippingForm = new FormGroup({
    name: new FormControl(
      this.checkoutService.shippingInformation.name,
      [Validators.required]
    ),

    street: new FormControl(
      this.checkoutService.shippingInformation.street,
      [Validators.required]
    ),

    city: new FormControl(
      this.checkoutService.shippingInformation.city,
      [Validators.required]
    ),

    state: new FormControl(
      this.checkoutService.shippingInformation.state,
      [Validators.required, Validators.pattern(/^(?:A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$/)]
    ),

    zip: new FormControl(
      this.checkoutService.shippingInformation.zip,
      [Validators.required, Validators.pattern(/^\d{5}$/)]
    ),
  });

  submitAttempted = false; // flag to decide whether or not to show errors.  wait until first submit attempt.

  constructor(private checkoutService: CheckoutService, private router: Router) { }

  ngOnInit() {
  }
  
  onSubmit() {
    this.submitAttempted = true;

    if (!this.shippingForm.valid) {
      return;
    }

    const info = new ShippingInformation();
    info.name = this.shippingForm.value.name;
    info.street = this.shippingForm.value.street;
    info.city = this.shippingForm.value.city;
    info.state = this.shippingForm.value.state;
    info.zip = this.shippingForm.value.zip;
    
    this.checkoutService.shippingInformation = info;

    this.router.navigate(['checkout', 'review']);
  }
}
