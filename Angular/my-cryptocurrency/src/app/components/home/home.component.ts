import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { DataCurrenciesService } from './../../services/data-currencies.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currencies: object[];
  myFollows = [];
  viewAlert = false;
  currencyToChange;
  isLoged = false;


  constructor(public dataCurrenciesService: DataCurrenciesService,
    private loginService: LoginService, private router: Router) {
      this.dataCurrenciesService.setupCurrencies();
  }

  ngOnInit(): void {
    this.dataCurrenciesService.nextCurrency().subscribe(resp => {
      this.currencies = resp;
    });
    this.loginService.returnLogin().subscribe(resp => {
      this.isLoged = resp;
    })
  }

  alert(currency) {
    this.currencyToChange = currency;
    this.dataCurrenciesService.getFollowObject().subscribe(resp => this.myFollows = resp);
    this.viewAlert = true;
  }

  // change follow
  onSubmit(form: NgForm) {
    const a = form.value['delete'];
    this.dataCurrenciesService.spliceFollow(a);
    this.dataCurrenciesService.pushFollow(this.currencyToChange.id);
    this.viewAlert = false;
  }

  // don't change follow
  cancel() {
    this.viewAlert = false;
  }
}
