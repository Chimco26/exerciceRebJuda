import { DispoModel } from './../models/dispo.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-main1',
  templateUrl: './cmp-main1.component.html',
  styleUrls: ['./cmp-main1.component.css']
})
export class CmpMain1Component implements OnInit {

  @Input() dispo1: DispoModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
