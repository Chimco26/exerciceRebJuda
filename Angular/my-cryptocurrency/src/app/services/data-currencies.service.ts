import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataCurrenciesService implements OnInit {

  currencies = [];
  modelCurrencies = [];


  private baseUrl = "https://api.coingecko.com/api/v3/coins/";

  getCurrencies(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "list");
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

  constructor(private httpClient: HttpClient) {
    this.setupCurrencies();
  }
  ngOnInit(): void {
  }
}
