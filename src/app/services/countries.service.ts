import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor( private http: HttpClient) { 
  }

  public getCountries(): Observable<any> {
    const host= 'https://countries-cities.p.rapidapi.com/location/country/list';
    const KEY = 'b15f0656c3mshacf46ac2f93b677p1f45ecjsn14de2f207777';
    let headers: HttpHeaders = new HttpHeaders;
    headers = headers.set('X-Rapidapi-Key', KEY);

    return this.http.get<any>(host,{
      headers: headers
    })
  }
}
 