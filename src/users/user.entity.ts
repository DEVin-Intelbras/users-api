import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class User {
  id: number;

  @IsNotEmpty({
    message: 'login is required',
  })
  @IsString({
    message: 'login is need to be a string',
  })
  login: string;

  @IsEmail({
    message: 'email must be an email',
  })
  email: string;

  @IsNotEmpty({
    message: 'password is required',
  })
  password: string;

  @IsNotEmpty({
    message: 'fullName is required',
  })
  fullName: string;
  createdDate: Date;
}
