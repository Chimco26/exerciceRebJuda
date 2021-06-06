import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome-identify',
  templateUrl: './welcome-identify.component.html',
  styleUrls: ['./welcome-identify.component.css']
})
export class WelcomeIdentifyComponent implements OnInit {

  name: string;
  num1: number;
  num2: number;
  num3: number;
  num4: number;

  input1: number;
  input2: number;
  input3: number;
  input4: number;

  inputError = "";

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.name = this.activatedRoute.snapshot.params['name'];
    this.num1 = Math.floor(Math.random() * 9) + 0;
    this.num2 = Math.floor(Math.random() * 9) + 0;
    this.num3 = Math.floor(Math.random() * 9) + 0;
    this.num4 = Math.floor(Math.random() * 9) + 0;
  }

  onDigitInput(event) {
    let element;
    var inputt = event.srcElement.value;
    console.log(inputt);


    this.onSubmit()
    if (inputt && !isNaN(inputt))
      element = event.srcElement.nextElementSibling;

    if (event.code === 'Backspace')
      element = event.srcElement.previousElementSibling;

    if (element == null)
      return;
    else
      element.focus();
  }

  onSubmit() {
    if (this.num1 == this.input1 &&
      this.num2 == this.input2 &&
      this.num3 == this.input3 &&
      this.num4 == this.input4) {
      this.loginService.onCreate();
      this.router.navigate(["/welcome/thanks/" + this.name]);
    }
  }
}
