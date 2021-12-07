import { Component, OnInit } from '@angular/core';
import { Plan } from 'src/app/models/plan';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'all-plans',
  templateUrl: './all-plans.component.html',
  styleUrls: ['./all-plans.component.scss']
})
export class AllPlansComponent implements OnInit {
  public personalPlans!: Plan [];
  constructor(private planService: PlanService) { }

  ngOnInit(): void {
    this.personalPlans = this.planService.plansList
  }

}
