import { HttpClientModule } from '@angular/common/http';
import { UserServiceService } from './services/user-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { AppareilsCompComponent } from './comp/appareils-comp/appareils-comp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppareilService } from './app/services/appareil.service';
import { AuthComponent } from './comp/auth/auth.component';
import { AppareilViewComponent } from './comp/appareil-view/appareil-view.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './app/services/auth.service';
import { SingleAppareilComponent } from './comp/single-appareil/single-appareil.component';
import { FourOhFourComponent } from './comp/four-oh-four/four-oh-four.component';
import { EditAppareilComponent } from './comp/edit-appareil/edit-appareil.component';
import { UserListComponent } from './comp/user-list/user-list.component';
import { NewUserComponent } from './comp/new-user/new-user.component';

const appRoutes: Routes = [
  {path: 'appareils', component: AppareilViewComponent},
  {path: 'appareils/:id', component: SingleAppareilComponent},
  {path: 'edit', component: EditAppareilComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'users', component: UserListComponent},
  {path: 'new-user', component: NewUserComponent},
  {path:'', component: AppareilViewComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilsCompComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AppareilService,
    AuthService,
    UserServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
