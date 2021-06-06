import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestListComponent } from './components/intern/test-list/test-list.component';
import { LoginComponent } from './components/log/login/login.component';
import { InternListComponent } from './components/supervisor/intern-list/intern-list.component';
import { UploadNewTestsComponent } from './components/supervisor/upload-new-tests/upload-new-tests.component';
import { WelcomeFormComponent } from './components/welcome/welcome-form/welcome-form.component';
import { WelcomeIdentifyComponent } from './components/welcome/welcome-identify/welcome-identify.component';
import { WelcomeQuestion1Component } from './components/welcome/welcome-question1/welcome-question1.component';
import { WelcomeQuestion2Component } from './components/welcome/welcome-question2/welcome-question2.component';
import { WelcomeThanksComponent } from './components/welcome/welcome-thanks/welcome-thanks.component';
import { WelcomeWebcamComponent } from './components/welcome/welcome-webcam/welcome-webcam.component';
import { WelcomeComponent } from './components/welcome/welcome/welcome.component';

const routes: Routes = [
  { path: "", component: WelcomeComponent },
  { path: "login", component: LoginComponent },
  { path: "welcome", component: WelcomeComponent },
  { path: "welcome/form", component: WelcomeFormComponent },
  { path: "welcome/question1", component: WelcomeQuestion1Component },
  { path: "welcome/ready", component: WelcomeQuestion2Component },
  { path: "supervisor/interns-list", component: InternListComponent },
  { path: "supervisor/upload-tests", component: UploadNewTestsComponent},
  { path: "user/tests-list", component: TestListComponent },
  { path: "welcome/webcam", component: WelcomeWebcamComponent },
  { path: "welcome/identify/:name", component: WelcomeIdentifyComponent },
  { path: "welcome/thanks/:name", component: WelcomeThanksComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
