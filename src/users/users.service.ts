import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatedUserDto } from './dto/update-user.dto';
// export interface User {
//   id: number;
//   username: string;
//   password: string;
//   role: 'INTERN' | 'ADMIN';
// }

// export interface UpdatedUser {
//   username?: string;
//   password?: string;
//   role?: 'INTERN' | 'ADMIN';
// }

@Injectable()
export class UsersService {
  private users: CreateUserDto[] = [
    { id: 1, username: 'john1', password: 'changeme', role: 'ADMIN' },
    { id: 2, username: 'john2', password: 'changeme', role: 'INTERN' },
    { id: 3, username: 'john3', password: 'changeme', role: 'ADMIN' },
    { id: 4, username: 'john4', password: 'changeme', role: 'INTERN' },
    { id: 5, username: 'john5', password: 'changeme', role: 'INTERN' },
    { id: 6, username: 'john6', password: 'changeme', role: 'ADMIN' },
    { id: 7, username: 'john7', password: 'changeme', role: 'ADMIN' },
  ];

  findAll(role?: 'INTERN' | 'ADMIN') {
    if (role) {
      const rolesFiltered = this.users.filter((user) => user.role === role);
      if (rolesFiltered.length === 0) {
        throw new NotFoundException('No users found with the specified role');
      } else {
        return rolesFiltered;
      }
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  create(user: CreateUserDto) {
    const id: number = this.users.length + 1;
    user = { ...user, id } as CreateUserDto;
    this.users.push(user);
    return user;
  }

  update(id: number, updatedUser: UpdatedUserDto) {
    //47:37 //1:01:17
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return { message: 'deleted successfully', removedUser };
  }
}
