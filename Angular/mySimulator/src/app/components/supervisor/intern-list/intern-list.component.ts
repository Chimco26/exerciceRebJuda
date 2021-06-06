import { UsersService } from 'src/app/services/users.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user-model';

@Component({
  selector: 'app-intern-list',
  templateUrl: './intern-list.component.html',
  styleUrls: ['./intern-list.component.css']
})
export class InternListComponent implements OnInit {

  listUsers: User[] = [];


  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getAllUsersWithHeader<User[]>().subscribe(users => {
      for(let myUser of users){
        this.listUsers.push(myUser);
      }
      console.log(this.listUsers);
      
    });
  }

}
