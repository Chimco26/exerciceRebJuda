import { ListAppointmentsComponent } from './components/list-appointments/list-appointments.component';
import { TimeComponent } from './components/time/time.component';
import { DatesComponent } from './components/dates/dates.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: DatesComponent },
  { path: 'dates', component: DatesComponent },
  { path: 'dates/time', component: TimeComponent },
  { path: 'appointments', component: ListAppointmentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
