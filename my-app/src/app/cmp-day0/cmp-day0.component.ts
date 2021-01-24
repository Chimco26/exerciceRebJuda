import { DataService } from './../services/data.service';
import { Component, Input, OnInit } from '@angular/core';
import { DateModel } from '../models/date.model';

@Component({
  selector: 'app-cmp-day0',
  templateUrl: './cmp-day0.component.html',
  styleUrls: ['./cmp-day0.component.css']
})
export class CmpDay0Component implements OnInit {

  constructor(private dataService: DataService) {
   }

   dates = [{
    day: this.dataService.datesArray[0],
    price: this.dataService.lowerPrice[0],
  }, {
    day: this.dataService.datesArray[1],
    price: this.dataService.lowerPrice[1],
  }, {
    day: this.dataService.datesArray[2],
    price: this.dataService.lowerPrice[2],
  }, {
    day: this.dataService.datesArray[3],
    price: this.dataService.lowerPrice[3],
  }, {
    day: this.dataService.datesArray[4],
    price: this.dataService.lowerPrice[4],
  }, {
    day: this.dataService.datesArray[5],
    price: this.dataService.lowerPrice[5],
  }, {
    day: this.dataService.datesArray[6],
    price: this.dataService.lowerPrice[6],
  }]

  ngOnInit(): void { }

}
