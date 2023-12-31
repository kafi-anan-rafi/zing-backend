import { IsString, IsEmail, Length, IsPhoneNumber } from 'class-validator';

export class SignupCustomerDto {
  @IsString()
  @Length(2, 20)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(11)
  number: string;

  @IsString()
  @Length(4, 15)
  password: string;
}
