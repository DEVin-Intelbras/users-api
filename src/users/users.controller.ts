import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  public getAll() {
    return this.userService.getUsers();
  }

  @Post()
  public create(@Body() user) {
    const userCreated = this.userService.create(user);
    return userCreated;
  }
}
