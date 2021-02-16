import { LoginService } from './services/login.service';
import { DataCurrenciesService } from './services/data-currencies.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  currencies;
  myFollows = [];

  constructor(private dataCurrenciesService: DataCurrenciesService,
    public loginService: LoginService) { }

  ngOnInit(): void {
    this.dataCurrenciesService.nextModel().subscribe(resp => this.currencies = resp);
    this.dataCurrenciesService.getFollowObject().subscribe(resp => this.myFollows = resp);
  }

  setup(): void {
    this.dataCurrenciesService.setupCurrencies();
  }

  searchCurrency(form: NgForm) {
    const name1 = form.value.name;
    const curren = this.currencies.find(resp => resp.symbol === name1);
    this.dataCurrenciesService.pushCurrency(curren);
  }
}
