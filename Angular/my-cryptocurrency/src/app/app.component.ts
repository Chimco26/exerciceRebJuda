import { LoginService } from './services/login.service';
import { DataCurrenciesService } from './services/data-currencies.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  currencies;
  myFollows = [];
  isAuth: boolean;

  constructor(private dataCurrenciesService: DataCurrenciesService,
    public loginService: LoginService) {
      var firebaseConfig = {
        apiKey: "AIzaSyDH9wqEHrHPRbSUYudejAp-w-sDbF5GP3E",
        authDomain: "crypto-currency-7c500.firebaseapp.com",
        databaseURL: "https://crypto-currency-7c500-default-rtdb.firebaseio.com",
        projectId: "crypto-currency-7c500",
        storageBucket: "crypto-currency-7c500.appspot.com",
        messagingSenderId: "279368510929",
        appId: "1:279368510929:web:0bc9904f7dfdb43afa84f0",
        measurementId: "G-VBNNM776XT"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
     }

  ngOnInit(): void {
    this.dataCurrenciesService.nextModel().subscribe(resp => this.currencies = resp);
    this.dataCurrenciesService.getFollowObject().subscribe(resp => this.myFollows = resp);
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    )
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
