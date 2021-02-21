import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CurrencyModel } from '../models/currency.model';

@Injectable({
  providedIn: 'root'
})
export class DataCurrenciesService implements OnInit {

  private baseUrl = "https://api.coingecko.com/api/v3/coins/";
  private _currencies = [];
  private currency$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private _modelCurrencies = [];
  private modelCurrencies$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private _myFollows = [];
  private myFollow$: BehaviorSubject<any[]> = new BehaviorSubject<[]>([]);
  spiner = true;


  getCurrencies(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  getCurrencyInfo(id: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + id);
  }

  getFollowObject(): Observable<any[]> {
    return this.myFollow$;
  }

  nextCurrency(): Observable<any[]> {
    return this.currency$;
  }

  nextModel(): Observable<any[]> {
    return this.modelCurrencies$;
  }

  pushCurrency(cur: object) {
    this._currencies.length = 0;
    this._currencies.push(cur);
    this.currency$.next(this._currencies);
    this.spiner = false;
  }

  setupCurrencies() {
    this.spiner = true;
    this._currencies.length = 0;
    this._modelCurrencies.length = 0;
    this.getCurrencies().subscribe(curr => {
      this._currencies = curr.splice(0, 50);
      this.currency$.next(this._currencies);
      this.spiner = false;
      this._modelCurrencies = [...this._currencies];
      this.modelCurrencies$.next(this._modelCurrencies);
    });
  }

  pushFollow(id: string) {
    const cur = this._modelCurrencies.find(a => a.id === id);
    const curObject: CurrencyModel = {
      id: cur.id,
      name: cur.name,
      symbol: cur.symbol,
      image: cur.image.small,
      priceUsd: cur.market_data.current_price.usd,
      priceEur: cur.market_data.current_price.eur,
      priceNis: cur.market_data.current_price.ils,
    }
    this._myFollows.push(curObject);
    this.myFollow$.next(this._myFollows);
  }

  spliceFollow(id: string) {
    for (let i = 0; i < this._myFollows.length; i++) {
      if (id == this._myFollows[i].id) {
        this._myFollows.splice(i, 1);
        this.myFollow$.next(this._myFollows);
        break;
      }
    }
  }

  constructor(private httpClient: HttpClient) {
  }
  ngOnInit(): void {
  }
}
