import { CurrencyModel } from './../../models/currency.model';
import { DataCurrenciesService } from './../../services/data-currencies.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  @Input() currency;
  @Output() sendFollowEvent: EventEmitter<object> = new EventEmitter<object>();

  cache = false;
  collapse = false;
  switch = false;
  toMuchFollows = false;
  spiner = true;
  numberOfFollows: number;


  currencyInfo: CurrencyModel = {
    id: null,
    name: null,
    symbol: null,
    image: null,
    priceUsd: null,
    priceEur: null,
    priceNis: null
  }

  switchCollapse() {
    this.collapse ? this.collapse = false : this.collapse = true;
  }

  followIt(id: string) {
    if (!this.switch) {
      this.dataCurrenciesService.pushFollow(id);
    } else {
      this.dataCurrenciesService.spliceFollow(id);
    }
  }

  alert() {
    if (this.toMuchFollows) {
      this.sendFollowEvent.emit(this.currency);
    }
  }


  constructor(private dataCurrenciesService: DataCurrenciesService) {

  }

  ngOnInit(): void {

    this.dataCurrenciesService.getFollowObject().subscribe(resp => {
      for (let follow of resp) {
        if (follow.id === this.currency.id) {
          this.switch = true;
          break;
        } else {
          this.switch = false;
        }
      }
      this.numberOfFollows = resp.length;
      if (this.numberOfFollows >= 5 && !this.switch) {
        this.toMuchFollows = true;
      } else {
        this.toMuchFollows = false;
      }
    })
  }

  getMoreInfo(currency: string): void {
    this.switchCollapse();
    if (!this.cache) {
      this.dataCurrenciesService.getCurrencyInfo(currency).subscribe((infoData: any) => {
        this.currencyInfo = {
          id: infoData.id,
          name: infoData.symbol,
          symbol: infoData.symbol,
          image: infoData.image.small,
          priceUsd: infoData.market_data.current_price.usd,
          priceEur: infoData.market_data.current_price.eur,
          priceNis: infoData.market_data.current_price.ils,
        };
        this.spiner = false;
      })
      this.cache = true;
      setTimeout(() => {
        this.setupCurrency();
        this.collapse = false;
      }, 60 * 1000);
    }
  };

  setupCurrency(): void {
    this.currencyInfo = {
      id: null,
      name: null,
      symbol: null,
      image: null,
      priceUsd: null,
      priceEur: null,
      priceNis: null
    };
    this.cache = false;
    this.spiner = true;
  }


}
