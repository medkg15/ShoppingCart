import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingComponent } from './billing/billing.component';
import { ShippingComponent } from './shipping/shipping.component';
import { SummaryComponent } from './summary/summary.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [
    BillingComponent,
    ShippingComponent,
    SummaryComponent,
    ConfirmationComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
