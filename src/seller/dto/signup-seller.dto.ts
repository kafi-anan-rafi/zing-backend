import {
  IsDate,
  IsString,
  IsEmail,
  Length,
  IsPhoneNumber,
  Matches,
} from 'class-validator';

export class SignupSellerDto {
  @IsString()
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
