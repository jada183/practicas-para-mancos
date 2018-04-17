import { Injectable } from '@angular/core';
import { User } from './user';
@Injectable()
export class UsersService {
  users: User[];
  constructor() { }
  add(user: User): void {
    this.users.push(user);
  }
}
