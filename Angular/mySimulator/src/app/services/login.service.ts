import { Router } from '@angular/router';
import { UsersService } from './users.service';
import { Injectable } from '@angular/core';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  myUser: User = {};

  constructor(private usersService: UsersService, private router: Router) { }

  onCreate(){
    console.log(this.myUser);
    this.usersService.registerUser<User>(this.myUser).subscribe(data=> {
      this.usersService.token = data.token;
      this.myUser = data;
      console.log(data)
    });
  }

  onLogin(user: User){
    this.usersService.loginUser<User>(user).subscribe(data=> {
      this.usersService.token = data.token;
      console.log(this.usersService.token);
      
      this.myUser = data;     
      console.log(data);
      if(data.roleNumber < 400){
        this.router.navigate(["/user/tests-list"])
      } else {
        this.router.navigate(["/supervisor/interns-list"])
      }
    });
  }

  onUpdate(){
    console.log("update test");
    this.usersService.updateUser<User>(this.myUser).subscribe(data=> {
      console.log("update");
      this.router.navigate(["/welcome/ready"]);
    },
     err=> console.log(err));
  }
}
