import { Subject } from 'rxjs/internal/Subject';
import { Injectable } from '@angular/core';
import { User } from '../models/User-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private users: User[] = [];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users);
  }

  get(): Observable<any[]> {
    return this.userSubject;
  }

  addUser(user: User) {
    this.users.push(user);
    console.log(this.users);
    this.emitUsers();
  }
}
