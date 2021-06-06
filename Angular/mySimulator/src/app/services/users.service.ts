import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = "http://localhost:8080";
  token = "";

  constructor(private httpClient: HttpClient) { }


  loginUser<T>(user: User): Observable<T>{
    return this.httpClient.post<T>(this.baseUrl + "/auth/login", user);
  }

  updateUser<T>(myUpdateUser: User, headers?: Object): Observable<User>{    
    return this.httpClient.put<User>(this.baseUrl + "/api/users/update", myUpdateUser, this.getOptions(headers));
  }

  registerUser<T>(user: User): Observable<T>{
    return this.httpClient.post<T>(this.baseUrl + "/auth/register", user);
  }

  getAllUsersWithHeader<T>(headers?: object): Observable<T>{
    return this.httpClient.get<T>(this.baseUrl + "/api/users/getAll", this.getOptions(headers));
  }

  getOptions(headers?: any){
    headers = headers? headers: {};
    headers["content-type"] = "application/json";
    headers["x-access-token"] = this.token;
    
    return{
      headers: new HttpHeaders(headers)
    }
  }
}
