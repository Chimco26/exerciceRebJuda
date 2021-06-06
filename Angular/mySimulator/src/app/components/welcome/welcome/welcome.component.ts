import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  isIntern = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeToInternUsing(){
    this.isIntern = true;
  }

  changeToSupervisorUsing(){
    this.isIntern = false;
  }
  
}
