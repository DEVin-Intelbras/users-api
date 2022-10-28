import { Module } from '@nestjs/common';
import { StringUtils } from 'src/utils/string-utils';
import { IsUserAlreadyExistConstraint } from './is-user-already-exists.validator';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, StringUtils, IsUserAlreadyExistConstraint],
})
export class UsersModule {}
