import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataCurrenciesService implements OnInit {

  private _currencies = [];
  private currency$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private _modelCurrencies = [];
  private modelCurrencies$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  _myFollows = [];
  private myFollow$: BehaviorSubject<any[]> = new BehaviorSubject<[]>([]);
  spiner = true;


  private baseUrl = "https://api.coingecko.com/api/v3/coins/";

  getCurrencies(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  getCurrencyInfo(currency: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + currency);
  }

  nextCurrency(): Observable<any[]> {
    return this.currency$;
  }

  pushCurrency(cur: any) {
    this._currencies.length = 0;
    this._currencies.push(cur);
    this.currency$.next(this._currencies);
  }

  pushCurrenciesFollow() {
    this._currencies.length = 0;
    this._currencies = [...this._myFollows];
    this.currency$.next(this._currencies);
  }

  setupCurrencies() {
    this.spiner = true;
    this._currencies.length = 0;
    this._modelCurrencies.length = 0;
    this.getCurrencies().subscribe(curr => {
      this._currencies = curr.splice(0, 10);
      this.currency$.next(this._currencies);
      this.spiner = false;
      this._modelCurrencies = [...this._currencies];
      this.modelCurrencies$.next(this._modelCurrencies);
    });
    // for (let i = 0; i < 10; i++) {
    //   this.getCurrencies().subscribe((currenciesData: any) => {
    //     this._currencies.push(currenciesData[i]);
    //     this.modelCurrencies.push(currenciesData[i]);
    //     console.log(this._currencies[i]);
    //     this.currency$.next(this._currencies);
    //   });
    // }
  }

  nextModel(): Observable<any[]> {
    return this.modelCurrencies$;
  }

  pushFollow(id: string) {
    const cur = this._modelCurrencies.find(a => a.id === id);
    this._myFollows.push(cur);
    this.myFollow$.next(this._myFollows);
    console.log(this._myFollows.length);
  }

  spliceFollow(id: string) {
    for (let i = 0; i < this._myFollows.length; i++) {
      if (id == this._myFollows[i].id) {
        this._myFollows.splice(i, 1);
        this.myFollow$.next(this._myFollows);
        console.log(this._myFollows.length);
        break;
      }
    }
  }

  getFollowObject(): Observable<any[]> {
    return this.myFollow$;
  }

  constructor(private httpClient: HttpClient) {
  }
  ngOnInit(): void {
  }
}
