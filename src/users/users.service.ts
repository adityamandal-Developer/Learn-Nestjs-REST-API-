import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, username: 'john1', password: 'changeme', role: 'ADMIN' },
    { id: 2, username: 'john2', password: 'changeme', role: 'INTERN' },
    { id: 3, username: 'john3', password: 'changeme', role: 'ADMIN' },
    { id: 4, username: 'john4', password: 'changeme', role: 'INTERN' },
    { id: 5, username: 'john5', password: 'changeme', role: 'INTERN' },
    { id: 6, username: 'john6', password: 'changeme', role: 'ADMIN' },
    { id: 7, username: 'john7', password: 'changeme', role: 'ADMIN' },
  ];

  findAll(role?: 'INTREN' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }
}
