import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CurrenciesComponent } from './components/currencies/currencies.component';
import { DataCurrenciesService } from './services/data-currencies.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { FollowsComponent } from './components/follows/follows.component';
import { OneFollowComponent } from './components/one-follow/one-follow.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CurrenciesComponent,
    LoginComponent,
    FollowsComponent,
    OneFollowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DataCurrenciesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
