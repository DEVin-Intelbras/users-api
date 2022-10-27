import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  // /users/login
  @Get(':login')
  public getUserByLogin(@Param('login') login: string): User {
    const user = this.service.searchByLogin(login);

    return user;
  }

  //users?page=0&size=10
  @Get()
  public getAll(
    @Query('page') page: number,
    @Query('size') size: number,
  ): Array<User> {
    console.log(page);
    return this.service.getUsers();
  }

  @Post()
  public create(@Body() user: User): User {
    const userCreated = this.service.create(user);
    return userCreated;
  }

  @Post(':login')
  @HttpCode(200)
  public validateUser(@Param('login') login: string) {
    return {
      message: 'usuario validado',
    };
  }
}
