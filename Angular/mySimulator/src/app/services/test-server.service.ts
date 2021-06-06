import { UsersService } from 'src/app/services/users.service';
import { Test } from './../models/file-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServerService {

  private baseUrl = "http://localhost:8080/api/tests";

  constructor(private httpClient: HttpClient, private userService: UsersService) { }

  saveTest<T>(test: Test): Observable<T>{
    return this.httpClient.post<T>(this.baseUrl + "/create", test, this.userService.getOptions());
  }

  deleteTest<T>(test: Test): Observable<T>{
    return this.httpClient.post<T>(this.baseUrl + "/delete", test, this.userService.getOptions());
  }

  getAllTest<T>(): Observable<T>{
    return this.httpClient.get<T>(this.baseUrl + "/getAll", this.userService.getOptions());
  }
}
