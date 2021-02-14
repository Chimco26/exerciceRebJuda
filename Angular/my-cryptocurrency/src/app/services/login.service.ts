import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  isLoged = false;
  isLogedObject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  getLogin(email, passeword): Observable<boolean> {
    if (email == 'abcd@efgh.com' && passeword == '1234') {
      this.isLoged = true;
      this.isLogedObject$.next(true);
      return of(true);
    }
  }

  returnLogin(): Observable<boolean> {
    this.isLoged = false;
    return this.isLogedObject$;
  }
}
