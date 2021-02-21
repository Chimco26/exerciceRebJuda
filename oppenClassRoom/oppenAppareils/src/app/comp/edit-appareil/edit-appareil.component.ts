import { AppareilService } from 'src/app/app/services/appareil.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {

  defaultOff = 'éteint';

  constructor(private appareilService: AppareilService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const appareil = {
      id: 0,
      name: '',
      status: ''
    }
    appareil.name = form.value.name;
    appareil.status = form.value.status;
    appareil.id = this.appareilService.appareils[this.appareilService.appareils.length - 1].id + 1;
    this.appareilService.appareils.push(appareil);
    this.appareilService.envoyerHttp();
  }
}
