import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import firebase from 'firebase';

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
    return this.isLogedObject$;
  }

  creatNewUser(email: string, passeword: string) {
    return new Promise<void>(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, passeword).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signInUser(email: string, passeword: string) {
    return new Promise<void>(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, passeword).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signOutUser() {
    firebase.auth().signOut();
  }
}
