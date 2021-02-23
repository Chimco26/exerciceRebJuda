import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatesService {

myDate = new Date;

  myDates: Date[] = [];

  myDates$: BehaviorSubject<Date[]> = new BehaviorSubject<Date[]>(this.myDates);

  
  getDates(): Observable<Date[]> {
    return this.myDates$;
  }


  constructor() {
    for (let index = 0; index < 10; index++) {
      let fixDate = new Date(this.myDate);
      let currentDate = fixDate;
      currentDate.setDate(fixDate.getDate() + index);
      console.log(currentDate);
      this.myDates.push(currentDate);
    }
  }



}
