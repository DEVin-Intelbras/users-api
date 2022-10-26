import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { StringUtils } from './utils/string-utils';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, StringUtils],
})
export class AppModule {}
