import { Component, Input, OnInit } from '@angular/core';
import { faBeer } from '@fortawesome/free-solid-svg-icons';
import { Plan } from 'src/app/models/plan';

@Component({
  selector: 'plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss']
})
export class PlanCardComponent implements OnInit {
  faBeer = faBeer;
  @Input()
  public plan?: Plan;
  constructor() { 
  }

  ngOnInit(): void {
  }

}
