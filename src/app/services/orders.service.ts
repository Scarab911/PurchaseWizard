import { Injectable } from '@angular/core';
import { OrderData } from '../models/orderData';
import { Plan } from '../models/plan';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public lastOrderData?: OrderData;

  constructor() { 
    
  }

  public getOrderData(user: User, plan: Plan):void{
    this.lastOrderData = {
      user: user,
      plan: plan
    }
    console.log(this.lastOrderData);
    
  }
}

