import { DataCurrenciesService } from './../../services/data-currencies.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  @Input() currency;
  @Input() index;
  @Output() sendFollowEvent: EventEmitter<any[]> = new EventEmitter<any[]>();

  cache = false;
  collapse = false;
  switch = false;
  toMuchFollows = false;
  spiner = true;
  numberOfFollows;


  currencyInfo = {
    name: '',
    image: '',
    priceUsd: '',
    priceEur: '',
    priceNis: '',
  };

  switchCollapse() {
    if (this.collapse) {
      this.collapse = false;
    } else {
      this.collapse = true;
      setTimeout(() => {
        this.collapse = false;
      }, 10 * 1000);
    };
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
          name: infoData.symbol,
          image: infoData.image.small,
          priceUsd: infoData.market_data.current_price.usd,
          priceEur: infoData.market_data.current_price.eur,
          priceNis: infoData.market_data.current_price.ils,
        };
        })
        setTimeout(() => {
          this.spiner = false;
        }, 1000);
      this.cache = true;
      setTimeout(() => {
        this.setupCurrency();
      }, 60 * 1000);
      console.log(this.currencyInfo);
    }
  };

  setupCurrency(): void {
    this.currencyInfo = {
      name: '',
      image: '',
      priceUsd: '',
      priceEur: '',
      priceNis: '',
    };
    this.cache = false;
  }


}
