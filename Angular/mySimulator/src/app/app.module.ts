import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WebcamModule } from 'ngx-webcam';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment";
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask
} from "@angular/fire/storage";


import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome/welcome.component';
import { WelcomeFormComponent } from './components/welcome/welcome-form/welcome-form.component';
import { WelcomeIdentifyComponent } from './components/welcome/welcome-identify/welcome-identify.component';
import { WelcomeWebcamComponent } from './components/welcome/welcome-webcam/welcome-webcam.component';
import { LoginComponent } from './components/log/login/login.component';
import { WelcomeThanksComponent } from './components/welcome/welcome-thanks/welcome-thanks.component';
import { WelcomeQuestion1Component } from './components/welcome/welcome-question1/welcome-question1.component';
import { WelcomeQuestion2Component } from './components/welcome/welcome-question2/welcome-question2.component';
import { InternListComponent } from './components/supervisor/intern-list/intern-list.component';
import { TestListComponent } from './components/intern/test-list/test-list.component';
import { UploadNewTestsComponent } from './components/supervisor/upload-new-tests/upload-new-tests.component';
import { UploadDetailsComponent } from './components/supervisor/upload-details/upload-details.component';
import { UploadListComponent } from './components/supervisor/upload-list/upload-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    WelcomeFormComponent,
    WelcomeIdentifyComponent,
    WelcomeWebcamComponent,
    LoginComponent,
    WelcomeThanksComponent,
    WelcomeQuestion1Component,
    WelcomeQuestion2Component,
    InternListComponent,
    TestListComponent,
    UploadNewTestsComponent,
    UploadDetailsComponent,
    UploadListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    WebcamModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
