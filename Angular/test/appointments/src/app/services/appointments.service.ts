import { BehaviorSubject, Observable } from 'rxjs';
import { AppointmentModel } from './../models/appointments.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  private myAppointments: AppointmentModel[] = [];
  private _myAppointments: AppointmentModel[];
  private myAppointments$: BehaviorSubject<AppointmentModel[]>;
  myDates: Date;

  pushAppointments(hour: string) {
    console.log(this.myDates);
    const appoint: AppointmentModel = {
      number: this.myAppointments.length + 1,
      date: this.myDates,
      hour: hour
    }
    this.myAppointments.push(appoint);
    this._myAppointments = [...this.myAppointments];
    this.myAppointments$.next(this._myAppointments);
  }

  sendAppointments(): Observable<AppointmentModel[]> {
    return this.myAppointments$;
  }

  constructor() {
    this.myAppointments$ = new BehaviorSubject<AppointmentModel[]>(this._myAppointments);
   }
}
