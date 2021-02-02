import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private KEY = 'dd9187fe85cc7d81c786cbf377c7b6d4'
  private baseUrl = 'http://api.openweathermap.org/data/2.5/weather?'
  private gitHub = 'https://api.github.com/users/'

  constructor(private httpClient: HttpClient) { }

  get(city: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + "units=metric&q=" + city + "&appid=" + this.KEY);
  }

  getGit(name: string): Observable<any> {
    return this.httpClient.get(this.gitHub + name);
  }

}
