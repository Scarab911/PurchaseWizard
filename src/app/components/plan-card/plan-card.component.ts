import { Component, Input, OnInit } from '@angular/core';
import { Plan } from 'src/app/models/plan';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss']
})
export class PlanCardComponent implements OnInit {
  @Input()
  public plan?: Plan;
  constructor(private planService: PlanService) { }

  ngOnInit(): void {
  }

}
