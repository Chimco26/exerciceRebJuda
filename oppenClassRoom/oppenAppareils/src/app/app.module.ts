import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { AppareilsCompComponent } from './comp/appareils-comp/appareils-comp.component';
import { FormsModule } from '@angular/forms';
import { AppareilService } from './app/services/appareil.service';
import { AuthComponent } from './comp/auth/auth.component';
import { AppareilViewComponent } from './comp/appareil-view/appareil-view.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './app/services/auth.service';

const appRoutes: Routes = [
  {path: 'appareils', component: AppareilViewComponent},
  {path: 'auth', component: AuthComponent},
  {path:'', component: AppareilViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilsCompComponent,
    AuthComponent,
    AppareilViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
