import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CmpHeaderComponent } from './cmp-header/cmp-header.component';
import { CmpDay0Component } from './cmp-day0/cmp-day0.component';
import { CmpDay1Component } from './cmp-day1/cmp-day1.component';
import { CmpMain0Component } from './cmp-main0/cmp-main0.component';
import { CmpMain1Component } from './cmp-main1/cmp-main1.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CmpHeaderComponent,
    CmpDay0Component,
    CmpDay1Component,
    CmpMain0Component,
    CmpMain1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
