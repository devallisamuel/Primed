import { Injectable } from '@angular/core';
import { User } from './utility';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    {
      id: 0,
      name: 'John',
      email: 'John.Doe@gmail.com',
      role: 'User',
    },
  ];

  getUsers() {
    return this.users;
  }

  addUser(user: User) {
    this.users.push({ ...user, id: this.users.length });
  }

  editUser(user: User, idx: number) {
    console.log(user, this.users);
    debugger;
    this.users = this.users.splice(idx, 1, user);
  }

  deleteUser(id: any) {
    this.users = this.users.splice(id, 1);
  }
}
