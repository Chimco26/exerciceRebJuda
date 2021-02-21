import { Subscription } from 'rxjs/internal/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from 'src/app/app/services/appareil.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  isAuth = false;


  constructor(private appareilService: AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
   }

  appareils: any[];
  appareilSubscription: Subscription;
  defaultOff = 'éteint';


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

  onEnvoyer() {
    this.appareilService.envoyerHttp();
  }

  onRecup() {
    this.appareilService.recupHttp().subscribe(
      (resp) => {
        this.appareils = resp;
      },
      () => {
        console.log('error!!');
      },
    );;
  }

  onSubmit(form: NgForm) {
    const appareil = {
      id: 0,
      name: '',
      status: ''
    }
    appareil.name = form.value.name;
    appareil.status = form.value.status;
    appareil.id = this.appareilService.appareils[this.appareilService.appareils.length - 1].id + 1;
    this.appareilService.appareils.push(appareil);
    this.appareilService.envoyerHttp();
  }

  ngOnInit(): void {
    this.appareilSubscription = this.appareilService.recupHttp().subscribe(
      (resp) => {
        this.appareils = resp;
      },
      () => {
        console.log('error!!');
      },
    );
  }

  ngOnDestroy(): void {
    this.appareilSubscription.unsubscribe();
  }

}
