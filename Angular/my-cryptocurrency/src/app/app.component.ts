import { DataCurrenciesService } from './services/data-currencies.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  currencies;

  constructor(private dataCurrenciesService: DataCurrenciesService) { }

  ngOnInit(): void {
    this.currencies = this.dataCurrenciesService.modelCurrencies;
  }

  setup(): void {
    this.dataCurrenciesService.setupCurrencies();
  }

  searchCurrency(form: NgForm) {
    // this.currentCurrencies = this.dataCurrenciesService.currencies;
    const name1 = form.value.name;
    console.log(name1);
    this.dataCurrenciesService.currencies.length = 0;
    for (let curren of this.currencies) {
      if (name1 === curren.id) {
        console.log(curren.id);
        this.dataCurrenciesService.currencies.push(curren);
        break;
      }
    }
  }
}
