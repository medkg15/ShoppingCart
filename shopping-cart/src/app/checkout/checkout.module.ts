import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingComponent } from './billing/billing.component';
import { ShippingComponent } from './shipping/shipping.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [BillingComponent, ShippingComponent, SummaryComponent],
  imports: [
    CommonModule
  ]
})
export class CheckoutModule { }
