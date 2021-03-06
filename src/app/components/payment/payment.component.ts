import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Plan } from 'src/app/models/plan';
import { User } from 'src/app/models/user';
import { CountriesService } from 'src/app/services/countries.service';
import { OrdersService } from 'src/app/services/orders.service';
import { PlanService } from 'src/app/services/plan.service';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})

export class PaymentComponent implements OnInit {
  faCreditCard = faCreditCard;

  public planId!: number;
  public planInfo!: Plan;
  public countriesList: any [] = [];
  public countries: any;
  public selected: string;
  public user!: User;
  public cardType: string;
  public count: number = 0;
  public cardValid: boolean;
  public ccvValid: boolean;
  public monthValid: boolean;
  public yearValid: boolean;
  public zipValid: boolean;
  public year!: number;

  constructor(private route: ActivatedRoute,
    private router: Router,
     private planService: PlanService,
     private countriesService: CountriesService,
     private orderService: OrdersService) { 
       this.selected = '';
       this.cardValid = true;
       this.ccvValid = true;
       this.monthValid = true;
       this.yearValid = true;
       this.zipValid = true;
       this.cardType = '';
      }
      
  ngOnInit(): void {
    this.year = new Date().getFullYear();
    this.planId = this.route.snapshot.params['planId'];
    this.planInfo = this.planService.getPlanById(this.planId);
    
    //get all country names from API to add to select:
    this.countriesService.getCountries().subscribe((response:any) => {
      this.countries = response.countries;

      let allCountries = [];
      for(let country in this.countries){
        allCountries.push(this.countries[country]);
      };

      allCountries.push('Lithuania');
      this.countriesList = allCountries.sort();
    });
  }

  //finding a card type by entered number
  public detectCardType(number:string): void {
    
    const re: any = {
        Visa: '4',
        Mastercard: '5',
        AmericanExpress: '3', 
        Discover: '6', 
    };

    for(var key in re) {
        if(re[key] == number[0]) {
            this.cardType = key;
        };
    };
  };

  public createUser(form: NgForm): void {
    if(!this.cardValid){ 
      alert('Card number is invalid!');
      return
    };

    if(!this.ccvValid){ 
      alert('CCV number is invalid!');
      return
    };

    if(!this.isValidEmail(form.value.email)){ 
      alert('Wrong email entered!');
      return
    };


    this.user = {
    firstName: form.value.firstName,
    lastName: form.value.lastName,
    phone: form.value.phone,
    email: form.value.email,
    country: form.value.country,
    state: form.value.state,
    city: form.value.city,
    street1: form.value.street1,
    street2: form.value.street2,
    zipCode: form.value.zip,
    card:{
        cardNumber: form.value.card,
        ccv: form.value.ccv,
        month: form.value.exp_month,
        year: form.value.exp_year,
        cardType: this.cardType,
    },
    }
    this.orderService.getOrderData(this.user, this.planInfo);
    this.router.navigate(['/order']);
  }

  public isValidCard(cardNumber:string): void {
    const toNumber = + cardNumber;

    if (typeof toNumber !== 'number' ||
            !isFinite(toNumber) ||
            toNumber < 0 ||
            toNumber % 1 !== 0) {
          this.cardValid = false;
          return
    };
    this.cardValid = true;
  }

  public isValidCCV(ccv:string): void {
    const toNumber = + ccv;

    if (typeof toNumber !== 'number' ||
            !isFinite(toNumber) ||
            toNumber < 0 ||
            toNumber % 1 !== 0) {
          this.ccvValid = false;
          return
    };
    this.ccvValid = true;
  }

  public isValidMonth(month:string): void {
    const toNumber = + month;

    if (typeof toNumber !== 'number' ||
            !isFinite(toNumber) ||
            toNumber < 0 ||
            toNumber % 1 !== 0 ||
            toNumber > 12) {
          this.monthValid = false;
          return
    };
    this.monthValid = true;
  }

  public isValidYear(year:string): void {
    const toNumber = + year;

    if (typeof toNumber !== 'number' ||
            !isFinite(toNumber) ||
            toNumber < this.year ||
            toNumber % 1 !== 0) {
          this.yearValid = false;
          return
    };
    this.yearValid = true;
  }

  public isValidZip(zip:string): void {
    const toNumber = + zip;

    if (typeof toNumber !== 'number' ||
            !isFinite(toNumber) ||
            toNumber < 0 ||
            toNumber % 1 !== 0 ||
            toNumber >9999999999) {
          this.zipValid = false;
          return
    };
    this.zipValid = true;
  }

  private isValidEmail(email:string) {
        if (typeof email !== 'string' ||
            email.length < 6 ||
            email.indexOf('@') === -1 || //reiskia @ stringe nerasta(-1)
            email[0] === '@' ||         // pirma string reiksme yra@
            email.slice(-4).indexOf('@') > -1 || //paima 4 pskutinius email simbolius ir iesko @
            this.countSimbols(email, '@') > 1) { //tikrina kiek stringe yra atitinkamu simboliu!
            return false;
        }
        return true;
  }

  private countSimbols(text: string, letter:string) {
        let count = 0;

        for (const t of text) {
            if (t === letter) {
                count++;
            }
        }

        return count;
  }
}
