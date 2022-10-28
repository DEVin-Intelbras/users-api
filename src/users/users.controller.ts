import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { NestResponse } from 'src/core/http/nest-response';
import { NestResponseBuilder } from 'src/core/http/nest-response-builder';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  // /users/login
  @Get(':login')
  public getUserByLogin(@Param('login') login: string): User {
    const user = this.service.searchByLogin(login);

    if (!user) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'User not found',
      });
    }

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
  public create(@Body() user: User): NestResponse {
    const userCreated = this.service.create(user);

    return new NestResponseBuilder()
      .withStatus(HttpStatus.CREATED)
      .withHeaders({
        Location: `/users/${userCreated.login}`,
      })
      .withBody(userCreated)
      .build();
  }

  @Post(':login')
  @HttpCode(200)
  public validateUser(@Param('login') login: string) {
    return {
      message: 'usuario validado',
    };
  }
}
