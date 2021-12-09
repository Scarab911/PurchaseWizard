import { Component, OnInit } from '@angular/core';
import { Plan } from 'src/app/models/plan';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'enterprise-plans',
  templateUrl: './enterprise-plans.component.html',
  styleUrls: ['./enterprise-plans.component.scss']
})
export class EnterprisePlansComponent implements OnInit {
  public enterprisePlans!: Plan [];

  constructor(private planService: PlanService) { }

  ngOnInit(): void {
    this.enterprisePlans = this.planService.enterprisePlansList
  }
}
