import { DataCurrenciesService } from './../../services/data-currencies.service';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  @Input() currency;
  @Input() index;

  currencyInfo = {
    image: '',
    price: '',
    name: '',
  };
  cache = true;
  collapse = false;

  switchCollapse() {
    if (this.collapse) {
      this.collapse = false;
    } else {
      this.collapse = true;
    };
  }


  constructor(private dataCurrenciesService: DataCurrenciesService) { }

  ngOnInit(): void { }

  getMoreInfo(currency: string): void {
    
    if (this.cache) {
      this.dataCurrenciesService.getCurrencyInfo(currency).subscribe((infoData: any) => {
        this.currencyInfo.image = infoData.image.small;
        this.currencyInfo.price = infoData.market_data.current_price.usd;
        this.currencyInfo.name = infoData.symbol;
      })
      this.cache = false;
      console.log(this.currencyInfo);
    } else {
      setTimeout(() => {
        this.setupCurrency();
      }, 5000);
    }
  };

  setupCurrency(): void {
    this.currencyInfo = {
      image: '',
      price: '',
      name: '',
    };
    this.cache = true;
  }


}
