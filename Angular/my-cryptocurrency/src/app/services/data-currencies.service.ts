import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataCurrenciesService implements OnInit {

  currencies = [];
  modelCurrencies = [];
  myFollows = [];
  myFollowObject$: BehaviorSubject<any[]> = new BehaviorSubject<[]>([]);


  private baseUrl = "https://api.coingecko.com/api/v3/coins/";

  getCurrencies(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  getCurrencyInfo(currency: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + currency);
  }

  setupCurrencies() {
    this.currencies.length = 0;
    this.modelCurrencies.length = 0;
    for (let i = 0; i < 10; i++) {
      this.getCurrencies().subscribe((currenciesData: any) => {
        this.currencies.push(currenciesData[i]);
        this.modelCurrencies.push(currenciesData[i]);
        console.log(this.currencies[i]);
      });
    }
  }

  pushFollow(id: string) {
    const cur = this.modelCurrencies.find(a => {
      return a.id === id
    });
    this.myFollows.push(cur);
    this.myFollowObject$.next(this.myFollows);
    console.log(this.myFollows);
  }

  spliceFollow(id: string) {
    for (let i = 0; i < this.myFollows.length; i++) {
      if (id == this.myFollows[i].id) {
        this.myFollows.splice(i, 1);
        this.myFollowObject$.next(this.myFollows);
        console.log(this.myFollows);
        break;
      }
    }
  }

  getFollowObject(): Observable<any[]> {
    return this.myFollowObject$;
  }

  constructor(private httpClient: HttpClient) {
    this.setupCurrencies();
  }
  ngOnInit(): void {
  }
}
