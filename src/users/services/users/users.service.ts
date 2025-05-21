import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/users/utils/type';

@Injectable()
export class UsersService {
  private fakeUsers = [
    {
      id: 1,
      name: 'Khav Saroeun',
      email: 'khavsaroeun@gmail.com',
      password: '123456',
    },
    {
      id: 2,
      name: 'Sophal Chan',
      email: 'sophal.chan@example.com',
      password: '123456',
    },
    {
      id: 3,
      name: 'Vichea Lim',
      email: 'vichea.lim@mail.com',
      password: '123456',
    },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(user: CreateUserType) {
    const newUser = {
      ...user,
      id: this.fakeUsers.length + 1,
    };
    this.fakeUsers.push(newUser);
    return {
      message: 'User created successfully!',
    };
  }

  fetchUserById(id: number) {
    const user = this.fakeUsers.find((user) => user.id === id);
    if (!user) {
      return null;
    }
    return user;
  }
}
