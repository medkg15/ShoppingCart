import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { ShippingComponent } from './shipping/shipping.component';
import { SummaryComponent } from './summary/summary.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [

  { path: '', redirectTo: 'billing', pathMatch: 'full' },
  { path: 'billing', component: BillingComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'confirmation', component: ConfirmationComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
