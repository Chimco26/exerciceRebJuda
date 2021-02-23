import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatesService {

myDate = new Date;

  myDates: Date[] = [
    new Date,
    new Date,
    new Date,
    new Date,
    new Date,
    new Date,
    new Date,
    new Date,
    new Date
  ];

  myDates$: BehaviorSubject<Date[]> = new BehaviorSubject<Date[]>(this.myDates);

  
  getDates(): Observable<Date[]> {
    return this.myDates$;
  }


  constructor() { }



}
