import { Component, OnInit } from '@angular/core';
import { Plan } from 'src/app/models/plan';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-personal-plans',
  templateUrl: './personal-plans.component.html',
  styleUrls: ['./personal-plans.component.scss']
})
export class PersonalPlansComponent implements OnInit {
public personalPlans!: Plan [];
  constructor(private planService: PlanService) { }

  ngOnInit(): void {
    this.personalPlans = this.planService.personalPlansList
  }
}
