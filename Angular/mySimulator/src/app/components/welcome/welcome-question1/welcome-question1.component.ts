import { LoginService } from 'src/app/services/login.service';
import { FormGroup, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-question1',
  templateUrl: './welcome-question1.component.html',
  styleUrls: ['./welcome-question1.component.css']
})
export class WelcomeQuestion1Component implements OnInit {

  userQuestions: FormGroup;  
  
  next = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onNext(){
    this.next = this.next? false : true;
  }

  onSubmitForm(){
    console.log(this.loginService.myUser);
    this.loginService.onUpdate();
  }

}
