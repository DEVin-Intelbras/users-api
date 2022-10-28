import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsUserAlreadyExist } from './is-user-already-exists.validator';

export class User {
  id: number;

  @IsNotEmpty({
    message: 'login is required',
  })
  @IsString({
    message: 'login is need to be a string',
  })
  @IsUserAlreadyExist()
  login: string;

  @IsEmail({
    message: 'email must be an email',
  })
  email: string;

  @IsNotEmpty({
    message: 'password is required',
  })
  @Exclude({
    toPlainOnly: true,
  })
  password: string;

  @IsNotEmpty({
    message: 'full_name is required',
  })
  @Expose({
    name: 'full_name',
  })
  fullName: string;

  createdDate: Date;
}
