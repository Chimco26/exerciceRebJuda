import { CurrencyModel } from './../../models/currency.model';
import { Observable } from 'rxjs';
import { DataCurrenciesService } from './../../services/data-currencies.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-follow',
  templateUrl: './one-follow.component.html',
  styleUrls: ['./one-follow.component.css']
})
export class OneFollowComponent implements OnInit {

  @Input() follow: CurrencyModel;
  follow1: CurrencyModel;
  arrow = false;
  up: boolean;

  constructor(public dataCurrenciesService: DataCurrenciesService) {
  }

  ngOnInit() {
    this.dataCurrenciesService.getCurrencyInfo(this.follow.id).subscribe((resp: any) => {
      this.initFollow(resp);
      console.log('hello');
      console.log(resp.market_data.current_price.usd);
    }
    )

    console.log(this.follow);
    setInterval(() => {
      this.dataCurrenciesService.getCurrencyInfo(this.follow.id).subscribe((resp: any) => {
        if (resp.market_data.current_price.usd != this.follow1.priceUsd) {
          this.arrow = true;
          this.initFollow(resp);
          console.log('hello');
          console.log(resp.market_data.current_price.usd);
          if (resp.market_data.current_price.usd >= this.follow1.priceUsd) {
            this.up = true;
          } else {
            this.up = false;
          }
        }
        console.log('10 scd')
      });
    }, 10 * 1000)
  }

  initFollow(resp: any) {
    this.follow1 = {
      id: resp.id,
      name: resp.name,
      symbol: resp.symbol,
      image: resp.image.small,
      priceUsd: resp.market_data.current_price.usd,
      priceEur: resp.market_data.current_price.eur,
      priceNis: resp.market_data.current_price.ils,
    }
  }

  removeFollow() {
    this.dataCurrenciesService.spliceFollow(this.follow.id)
  }


}
