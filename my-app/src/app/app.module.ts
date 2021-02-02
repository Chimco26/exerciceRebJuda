import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CmpHeaderComponent } from './cmp-header/cmp-header.component';
import { CmpDay0Component } from './cmp-day0/cmp-day0.component';
import { CmpDay1Component } from './cmp-day1/cmp-day1.component';
import { CmpMain0Component } from './cmp-main0/cmp-main0.component';
import { CmpMain1Component } from './cmp-main1/cmp-main1.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { WeatherApiComponent } from './weather-api/weather-api.component';

const appRoutes: Routes = [
  {path: 'tickets', component: HomeComponent},
  {path: 'climat', component: WeatherApiComponent},
  {path: '', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CmpHeaderComponent,
    CmpDay0Component,
    CmpDay1Component,
    CmpMain0Component,
    CmpMain1Component,
    HomeComponent,
    WeatherApiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
