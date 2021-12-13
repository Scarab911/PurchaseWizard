import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AllPlansComponent } from './components/all-plans/all-plans.component';
import { PlanCardComponent } from './components/plan-card/plan-card.component';
import { PersonalPlansComponent } from './components/personal-plans/personal-plans.component';
import { EnterprisePlansComponent } from './components/enterprise-plans/enterprise-plans.component';
import { PaymentComponent } from './components/payment/payment.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { OrderReviewComponent } from './components/order-review/order-review.component';

@NgModule({
  declarations: [
    AppComponent,
    AllPlansComponent,
    PlanCardComponent,
    PersonalPlansComponent,
    EnterprisePlansComponent,
    PaymentComponent,
    OrderReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
