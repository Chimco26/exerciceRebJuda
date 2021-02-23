import { Router } from '@angular/router';
import { AppointmentModel } from './../../models/appointments.model';
import { AppointmentsService } from './../../services/appointments.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-appointments',
  templateUrl: './list-appointments.component.html',
  styleUrls: ['./list-appointments.component.css']
})
export class ListAppointmentsComponent implements OnInit {

  myAppointments: AppointmentModel[];

  constructor(private appointmentsService: AppointmentsService,
    private router: Router) { }

  ngOnInit(): void {
    this.appointmentsService.sendAppointments().subscribe(appoint => this.myAppointments = appoint);
  }

  onRedirect() {
    this.router.navigate(['/dates'])
  }

}
