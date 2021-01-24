import { DispoModel } from './../models/dispo.model';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cmp-main0',
  templateUrl: './cmp-main0.component.html',
  styleUrls: ['./cmp-main0.component.css']
})
export class CmpMain0Component implements OnInit {

  constructor(private dataService: DataService) { }

  dispoDates = [[]];
  search = this.dataService.openSearch;

  ngOnInit(): void {
    this.dispoDates =  this.dataService.dispoDates;
  }



}
