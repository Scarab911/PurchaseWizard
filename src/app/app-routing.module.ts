import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPlansComponent } from './components/all-plans/all-plans.component';
import { OrderReviewComponent } from './components/order-review/order-review.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PurchaseCompleteComponent } from './components/purchase-complete/purchase-complete.component';

const routes: Routes = [
  {
    path: 'home',
    component: AllPlansComponent
  },
  {
    path: 'payment/:planId',
    component: PaymentComponent
  },
  {
    path: 'order',
    component: OrderReviewComponent
  },
  {
    path: 'complete',
    component: PurchaseCompleteComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
