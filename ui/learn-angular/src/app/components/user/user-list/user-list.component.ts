import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  listUsers:any = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getListUsers()
    .subscribe(users => {
      this.listUsers = users;
    }) 
  }

}
