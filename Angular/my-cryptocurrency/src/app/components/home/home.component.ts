import { DataCurrenciesService } from './../../services/data-currencies.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currencies = [];
  myFollows = [];
  viewAlert = false;
  currencyToChange;


  constructor(private dataCurrenciesService: DataCurrenciesService) { }
  
   

  ngOnInit(): void {
    this.currencies = this.dataCurrenciesService.currencies;
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
    this.myFollows = this. dataCurrenciesService.myFollows;
    this.viewAlert = true;
    console.log(this.currencyToChange);
  }
}
