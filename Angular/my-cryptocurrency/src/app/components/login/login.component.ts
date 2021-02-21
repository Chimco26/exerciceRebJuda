import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isAuth = false;
  errorMessage = '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    )
  }


  onLogin(email: string, password: string) {
    this.loginService.signInUser(email, password).then(
      () => {
        this.router.navigate(['/home']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  onLogoff() {
    this.loginService.signOutUser();
  }


}
