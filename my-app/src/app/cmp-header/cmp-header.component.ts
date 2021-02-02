import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-header',
  templateUrl: './cmp-header.component.html',
  styleUrls: ['./cmp-header.component.css'],
})
export class CmpHeaderComponent implements OnInit {
  source;
  dest;
  date;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  resultDates() {
    this.dataService.resultDates(this.source, this.dest, this.date);
    this.dataService.source = this.source;
    this.dataService.dest = this.dest;
  }
}
