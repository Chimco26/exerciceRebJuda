import { DataService } from './../services/data.service';
import { Component, Input, OnInit } from '@angular/core';
import { DateModel } from '../models/date.model';

@Component({
  selector: 'app-cmp-day0',
  templateUrl: './cmp-day0.component.html',
  styleUrls: ['./cmp-day0.component.css'],
})
export class CmpDay0Component implements OnInit {
  debugger;
  search = false;
  constructor(private dataService: DataService) {}

  dates = this.dataService.datesArray;

  ngOnInit(): void {
  }
}
