import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingComponent } from './billing/billing.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ReviewComponent } from './review/review.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BillingComponent,
    ShippingComponent,
    ReviewComponent,
    ConfirmationComponent,
    CheckoutComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CheckoutModule { }
