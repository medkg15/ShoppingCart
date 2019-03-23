import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ReviewComponent } from './review/review.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { CheckoutGuard } from './checkout.guard';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
    canActivate: [CheckoutGuard],
    children: [
      { path: '', redirectTo: 'billing' },
      { path: 'billing', component: BillingComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'review', component: ReviewComponent },
      { path: 'confirmation', component: ConfirmationComponent },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
