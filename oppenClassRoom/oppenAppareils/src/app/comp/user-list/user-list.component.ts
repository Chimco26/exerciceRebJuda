import { UserServiceService } from './../../services/user-service.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { User } from './../../models/User-model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: User[] = [
    {firstName: "Chimeon",
      lastName: "Cohen",
      email: "chimco26@gmail.com",
      drinkPreference: "Cola",}
  ];
 // userSubscription: Subscription;

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.userService.get().subscribe(
      (users: User[]) => {
        this.users = users;
        console.log(this.users);
      }
    );
  }

  ngOnDestroy(): void {
  //  this.userSubscription.unsubscribe();
  }

}
