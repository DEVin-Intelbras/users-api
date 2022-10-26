import { Injectable } from '@nestjs/common';
import { StringUtils } from 'src/utils/string-utils';

@Injectable()
export class UsersService {
  private readonly users = [];

  constructor(private stringUtils: StringUtils) {}

  public create(user) {
    user.name = this.stringUtils.toUpperCase(user.name);
    this.users.push(user);
    return user;
  }

  public getUsers() {
    return this.users;
  }
}
