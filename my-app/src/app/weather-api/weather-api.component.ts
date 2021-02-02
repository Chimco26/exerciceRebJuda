import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-api',
  templateUrl: './weather-api.component.html',
  styleUrls: ['./weather-api.component.css']
})
export class WeatherApiComponent implements OnInit {

  temp: number;
  nameUser: string;
  locationUser: string;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  check(inp: HTMLInputElement) {
    this. weatherService.get(inp.value).subscribe((weatherData: any) => {
      this.temp = weatherData.main.temp;
    });
  }

  checkGit(inp: HTMLInputElement) {
    this. weatherService.getGit(inp.value).subscribe((userData: any) => {
      this.nameUser = userData.name;
      this.locationUser = userData.location;
    });
  }

}
