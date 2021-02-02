import { DataCurrenciesService } from './../../services/data-currencies.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currencies = [];

  

  constructor(private dataCurrenciesService: DataCurrenciesService) { }

  ngOnInit(): void {
    this.currencies = this.dataCurrenciesService.currencies;
  }

}
