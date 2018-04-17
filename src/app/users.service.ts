import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UsersService {
  users: User[] = [
    { name: 'Santiago', lastName: 'Losada Borrajo', country: 'España', email: 'email@string.com' },
    { name: 'Jason', lastName: 'Franco Quinteiro', country: 'España', email: 'yeah@string.com' }
  ];

  constructor() { }

  add(user: User): void {
    this.users.push(user);
  }

  delete(user: User): void {
    let numb: number;
    for (const oneUser of this.users) {
      if (oneUser.name === user.name) {
        numb = this.users.indexOf(oneUser);
      }
    }
    this.users.splice(numb, 1);
  }
}
