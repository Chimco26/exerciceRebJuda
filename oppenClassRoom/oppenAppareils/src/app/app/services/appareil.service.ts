import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root',
})
export class AppareilService {

  appareilsSubject = new Subject<any[]>();

  appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allumé'
    }
  ];
  constructor(private httpClient: HttpClient,
    private router: Router) { }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(s => s.id === id);
    return appareil;
  }

  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
    this.emitAppareilSubject();
  }

  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
    this.emitAppareilSubject();
  }

  switchOnOne(i: number) {
    this.appareils[i].status = 'allumé';
    this.emitAppareilSubject();
  }

  switchOffOne(i: number) {
    this.appareils[i].status = 'éteint';
    this.emitAppareilSubject();
  }

  envoyerHttp() {
    this.httpClient
      .put('https://crypto-currency-7c500-default-rtdb.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log('super!');
        },
        (error) => {
          console.log('erreur' + error);
        }
      );
  }

  recupHttp() {
    return this.httpClient.get<any[]>('https://crypto-currency-7c500-default-rtdb.firebaseio.com/appareils.json');
  }
}
