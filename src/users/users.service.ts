import { Injectable } from '@nestjs/common';
import { StringUtils } from 'src/utils/string-utils';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private readonly users: Array<User> = [
    {
      id: 1,
      fullName: 'Danilo Sales',
      login: 'danilo',
      email: 'danilo.cybernet@gmail.com',
      password: '123456',
      createdDate: new Date(),
    },
  ];
  constructor(private stringUtils: StringUtils) {}

  public create(user: User): User {
    user.createdDate = new Date();
    this.users.push(user);
    return user;
  }

  public getUsers(): User[] {
    return this.users;
  }

  public searchByLogin(login: string): User {
    const user = this.users.find((user) => user.login == login);
    return user;
  }
}
