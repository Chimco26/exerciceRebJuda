import { CurrencyModel } from './../../models/currency.model';
import { DataCurrenciesService } from './../../services/data-currencies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-follows',
  templateUrl: './follows.component.html',
  styleUrls: ['./follows.component.css']
})
export class FollowsComponent implements OnInit {

  myFollows: CurrencyModel[];

  constructor(public dataCurrenciesService: DataCurrenciesService) { }

  ngOnInit(): void {
    this.dataCurrenciesService.getFollowObject().subscribe(resp => this.myFollows = resp);
  }

}
