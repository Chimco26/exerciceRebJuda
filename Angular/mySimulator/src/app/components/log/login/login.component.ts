import { UsersService } from 'src/app/services/users.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user-model';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  listUsers: any[] = [];

  constructor(private loginService: LoginService,
              private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getAllUsersWithHeader<User[]>().subscribe(users => {
      for(let myUser of users){
        this.listUsers.push(myUser);
      }
      console.log(this.listUsers);
      
    });
  }
  onSubmit(form: NgForm){
    const userLogin = form.value;
    console.log(userLogin);
    this.loginService.onLogin(userLogin);
  }
}
