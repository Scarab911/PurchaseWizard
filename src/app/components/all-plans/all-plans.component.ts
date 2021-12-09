import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'all-plans',
  templateUrl: './all-plans.component.html',
  styleUrls: ['./all-plans.component.scss']
})
export class AllPlansComponent implements OnInit {
  private enterpriseTab: boolean= false;
  private personalTab: boolean = true;

  constructor(private router: Router) {
    
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
  // public isHomeRoute(): boolean {
  //   return this.router.url === '/'
  // }
  // public isPersonalRoute(): boolean {
  //   return this.router.url === '/personal'
  // }
  // public isEnterpriseRoute(): boolean {
  //   return this.router.url === '/enterprise'
  // }
}
