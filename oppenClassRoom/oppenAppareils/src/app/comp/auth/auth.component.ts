import { AuthService } from './../../app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }

  signIn() {
    this.authService.signIn().then(
      () => {
        console.log('sign in successful!');
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['appareils']);
      }
    );
  }

  signOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
