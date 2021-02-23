import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatesComponent } from './components/dates/dates.component';
import { TimeComponent } from './components/time/time.component';
import { ListAppointmentsComponent } from './components/list-appointments/list-appointments.component';

@NgModule({
  declarations: [
    AppComponent,
    DatesComponent,
    TimeComponent,
    ListAppointmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
