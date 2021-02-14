import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoged = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginService.returnLogin().subscribe(resp => {
      this.isLoged = resp;
    })
  }

  errorMessage: string;


  onLogin(email: string, password: string) {
    this.loginService.getLogin(email, password).subscribe(resp => {
      if (resp) {
        this.isLoged = true;
        this.router.navigate(['/home']);
        console.log(this.isLoged);
      } else {
        this.errorMessage = "error!!!"
      }
    })

  }

  onLogoff() {
    this.loginService.isLogedObject$.next(false);
  }


}
