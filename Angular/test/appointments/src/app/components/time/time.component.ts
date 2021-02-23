import { Router } from '@angular/router';
import { AppointmentsService } from './../../services/appointments.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  @Input() date: Date;

  myHours: string[] = [
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];

  constructor(private appointmentsService: AppointmentsService,
    private router: Router) { }

  onChooseHour(hour: string) {
    console.log(hour);
    this.appointmentsService.pushAppointments(hour);
    this.router.navigate(['/appointments']);
  }

  ngOnInit(): void {
  }

}
