import { Component, Input, OnInit } from '@angular/core';
import { DateModel } from '../models/date.model';

@Component({
  selector: 'app-cmp-day1',
  templateUrl: './cmp-day1.component.html',
  styleUrls: ['./cmp-day1.component.css']
})
export class CmpDay1Component implements OnInit {

  @Input() date: DateModel;

  constructor() { }

  ngOnInit(): void {
  }


}
