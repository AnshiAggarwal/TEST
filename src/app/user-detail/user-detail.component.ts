

import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../model';
import {UserService} from '../user.service';


@Component({templateUrl: 'user-detail.component.html'})
export class UserDetailComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

//  deleteUser(id: number) {
//    this.userService.delete(id).pipe(first()).subscribe(() => {
//      this.loadAllUsers()
//    });
// }
}


