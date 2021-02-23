import { AppointmentsService } from './../../services/appointments.service';
import { DatesService } from './../../services/dates.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent implements OnInit {

  myDates: Date[];

  constructor(private datesService: DatesService,
    private appointmentsService: AppointmentsService,
    private router: Router) { }

  ngOnInit(): void {
    this.datesService.getDates().subscribe(dates => this.myDates = dates);
  }

  onChooseDate(date: Date) {
    console.log(date);
    this.appointmentsService.myDates = date;
    this.router.navigate(['dates/time']);
  }

}
