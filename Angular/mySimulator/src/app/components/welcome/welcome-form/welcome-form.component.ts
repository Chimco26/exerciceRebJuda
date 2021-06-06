import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user-model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-welcome-form',
  templateUrl: './welcome-form.component.html',
  styleUrls: ['./welcome-form.component.css']
})
export class WelcomeFormComponent implements OnInit {
  
  userForm: FormGroup;

  constructor(public loginService: LoginService,
    private router: Router ) { }


  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.userForm = new FormGroup({
      first_name: new FormControl("", Validators.required),
      last_name: new FormControl("", Validators.required),
      ID: new FormControl("", Validators.required),
      tel: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    })
  }

  onSubmitForm(){
    const myUser: User = this.userForm.value;
    this.loginService.myUser = myUser;
    this.router.navigate(['/welcome/identify/' + myUser.first_name]);
  }

}
