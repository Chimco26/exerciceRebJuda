import { Component, Input, OnInit } from '@angular/core';
import { DateModel } from '../models/date.model';

@Component({
  selector: 'app-cmp-day0',
  templateUrl: './cmp-day0.component.html',
  styleUrls: ['./cmp-day0.component.css']
})
export class CmpDay0Component implements OnInit {
  dates: DateModel[]= [{
    day: "Wed, Sep 25",
    price: 10,
    cents: 50,
  }, {
    day: "Thu, Sep 26",
    price: 11,
    cents: 50,
  }, {
    day: "Fri, Sep 27",
    price: 12,
    cents: 50,
  }, {
    day: "Sat, Sep 28",
    price: 10,
    cents: 50,
  }, {
    day: "Sun, Sep 29",
    price: 17,
    cents: 50,
  }, {
    day: "Mon, Sep 30",
    price: 11,
    cents: 50,
  }, {
    day: "Tue, Oct 1",
    price: 10,
    cents: 50,
  }]
  constructor() {
   }

  ngOnInit(): void {
    console.log(this.dates);
    
  }

}
