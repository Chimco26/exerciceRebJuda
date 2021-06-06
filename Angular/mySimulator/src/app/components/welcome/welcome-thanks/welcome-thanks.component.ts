import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome-thanks',
  templateUrl: './welcome-thanks.component.html',
  styleUrls: ['./welcome-thanks.component.css']
})
export class WelcomeThanksComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  name = this.activatedRoute.snapshot.params['name'];

  ngOnInit(): void {
  }

}
