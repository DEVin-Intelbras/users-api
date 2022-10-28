import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UsersService } from './users.service';

@Injectable()
@ValidatorConstraint()
export class IsUserAlreadyExistConstraint
  implements ValidatorConstraintInterface
{
  constructor(private userService: UsersService) {}

  validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): boolean | Promise<boolean> {
    return !!!this.userService.searchByLogin(value);
  }

  defaultMessage?(validationArguments?: ValidationArguments): string {
    return 'login is already exists';
  }
}

export function IsUserAlreadyExist(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: IsUserAlreadyExistConstraint,
    });
  };
}
