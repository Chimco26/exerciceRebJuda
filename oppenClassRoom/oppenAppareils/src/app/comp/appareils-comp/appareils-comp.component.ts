import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from 'src/app/app/services/appareil.service';

@Component({
  selector: 'app-appareils-comp',
  templateUrl: './appareils-comp.component.html',
  styleUrls: ['./appareils-comp.component.scss']
})
export class AppareilsCompComponent implements OnInit {

  @Input() appareil;
  @Input() index: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
  }

  getColor() {
    if(this.appareil.status === 'Allumé') {
      return 'green';
    } else if(this.appareil.status === 'éteint') {
      return 'red';
    }
  }

  onSwitch() {
    if(this.appareil.status === 'allumé') {
      this.appareilService.switchOffOne(this.index)
    } else if(this.appareil.status === 'éteint') {
      this.appareilService.switchOnOne(this.index)
    }
  }

}
