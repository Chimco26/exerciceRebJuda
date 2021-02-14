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

  currencies;
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
      console.log(this.currencies);
    });
    this.loginService.returnLogin().subscribe(resp => {
      this.isLoged = resp;
    })
  }

  onRedirection() {
    this.router.navigate(['/login']);
  }

  onSubmit(form: NgForm) {
    const a = form.value['delete'];
    console.log(a);
    this.dataCurrenciesService.spliceFollow(a);
    this.dataCurrenciesService.pushFollow(this.currencyToChange.id);
    this.viewAlert = false;
  }

  cancel() {
    this.viewAlert = false;
  }

  alert(currency) {
    this.currencyToChange = currency;
    this.dataCurrenciesService.getFollowObject().subscribe(resp => this.myFollows = resp);
    this.viewAlert = true;
    console.log(this.currencyToChange);
  }
}
