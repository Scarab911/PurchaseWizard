import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'all-plans',
  templateUrl: './all-plans.component.html',
  styleUrls: ['./all-plans.component.scss']
})
export class AllPlansComponent implements OnInit {
  private enterpriseTab: boolean= false;
  private personalTab: boolean = true;

  constructor() {
    
   }

  ngOnInit(): void {
  }

  public showEnterpriseTab(): void {
    this.enterpriseTab = true;
    this.personalTab = false;
  };

  public showPersonalTab(): void {
    this.personalTab= true;
    this.enterpriseTab = false;
  };

  public get getPersonalTab(): boolean {
    return this.personalTab
  };
  public get getEnterpriseTab(): boolean {
    return this.enterpriseTab
  };
}
