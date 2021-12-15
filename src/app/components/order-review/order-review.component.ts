import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderData } from 'src/app/models/orderData';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order-review',
  templateUrl: './order-review.component.html',
  styleUrls: ['./order-review.component.scss']
})

export class OrderReviewComponent implements OnInit {
  public orderData?: OrderData;
  public showCardNumber: string;
  public subName?: string;
  public subPrice?: number;
  public currency?: string;
  public cardType?: string;
  public loading: boolean;

  constructor(private ordersService: OrdersService,
    private router: Router) {
    this.showCardNumber = '************';
    this.loading = false;
   }

  ngOnInit(): void {
    //getting order info
    this.orderData = this.ordersService.lastOrderData
    
    //getting needed order data:
    this.subName = this.ordersService.lastOrderData?.plan.name;
    this.subPrice = this.ordersService.lastOrderData?.plan.price;
    this.currency = this.ordersService.lastOrderData?.plan.currency;
    this.cardType = this.ordersService.lastOrderData?.user.card.cardType
    const cardNumber = this.orderData?.user.card.cardNumber;
    
    this.showCardNumber = this.showCardNumber+(cardNumber &&cardNumber.toString().slice(12,16))
  }

  public showLoading(): void {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/complete']);
    },10000);
  }
}
