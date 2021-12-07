import { Injectable } from '@angular/core';
import { Plan } from '../models/plan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  
  public plansList: Plan[];
  constructor() {
    this.plansList = []
    this.plansList.push(new Plan(1, 'PLAN A', ['Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet',"Lorem ipsum dolor sit amet"], 500));
    this.plansList.push(new Plan(2, 'PLAN B', ['Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet',"Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet"], 1000));
    this.plansList.push(new Plan(3, 'PLAN C', ['Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet',"Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet"], 1500));
  }
}
