import { Observable } from 'rxjs';
import { DataCurrenciesService } from './../../services/data-currencies.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-follow',
  templateUrl: './one-follow.component.html',
  styleUrls: ['./one-follow.component.css']
})
export class OneFollowComponent implements OnInit {

  @Input() follow;

  constructor(public dataCurrenciesService: DataCurrenciesService) { }

  observable: Observable<number>
  
  ngOnInit() {
    this.observable = this.dataCurrenciesService.getCurrencyInfo(this.follow.id);
    console.log(this.follow)   
  }

  removeFollow() {
    this.dataCurrenciesService.spliceFollow(this.follow.id)
  }
  

}
