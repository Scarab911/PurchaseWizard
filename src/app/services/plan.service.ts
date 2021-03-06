import { Injectable } from '@angular/core';
import { Plan } from '../models/plan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  
  public personalPlansList: Plan[];
  public enterprisePlansList: Plan[];

  constructor() {
    this.personalPlansList = [];
    this.enterprisePlansList = [];
    
    //personal plans
    this.personalPlansList.push(new Plan(1, 'PLAN A','Monthly', ['Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet',"Lorem ipsum dolor sit amet"], 50, 'EUR'));
    this.personalPlansList.push(new Plan(2, 'PLAN B','Yearly', ['Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet',"Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet"], 100, 'EUR'));
    this.personalPlansList.push(new Plan(3, 'PLAN C','Lifetime', ['Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet',"Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet"], 150, 'EUR', true));
    //enterprise plans
    this.enterprisePlansList.push(new Plan(4, 'PLAN A','Monthly', ['Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet',"Lorem ipsum dolor sit amet"], 500, 'EUR'));
    this.enterprisePlansList.push(new Plan(5, 'PLAN B','Yearly', ['Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet',"Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet"], 1000, 'EUR'));
    this.enterprisePlansList.push(new Plan(6, 'PLAN C','Lifetime', ['Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet',"Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet"], 1500, 'EUR', true));

  }
  public getPlanById(id:number): Plan {
    const personalPlan = this.personalPlansList.find((obj) => obj.planId == id);

    if (personalPlan !== undefined) {
      return personalPlan;
    };

    const enterprisePlan = this.enterprisePlansList.find((obj) => obj.planId == id);

    if (enterprisePlan !== undefined) {
      return enterprisePlan;
    };

    return this.enterprisePlansList[0];
  }
}
