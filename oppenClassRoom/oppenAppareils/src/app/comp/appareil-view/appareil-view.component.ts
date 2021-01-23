import { Component, OnInit } from '@angular/core';
import { AppareilService } from 'src/app/app/services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;


  constructor(private appareilService: AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
   }

  appareils: any[];


  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }

  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;
  }

}
