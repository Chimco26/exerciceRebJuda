import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-header',
  templateUrl: './cmp-header.component.html',
  styleUrls: ['./cmp-header.component.css'],
})
export class CmpHeaderComponent implements OnInit {
  dataTravel = {
    source: null,
    dest: null,
    date: new Date(),
  };
  search = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  resultDates() {
    this.search = true;
    this.dataService.dataTravel = this.dataTravel;
    this.dataService.resultDates();
  }


}
