import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterprisePlansComponent } from './components/enterprise-plans/enterprise-plans.component';
import { PersonalPlansComponent } from './components/personal-plans/personal-plans.component';

const routes: Routes = [
  {
    path: 'home',
    component: PersonalPlansComponent
  },
  {
    path: 'personal',
    component: PersonalPlansComponent
  },
  {
    path: 'enterprise',
    component: EnterprisePlansComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
