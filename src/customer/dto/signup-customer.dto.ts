import {
  IsDate,
  IsString,
  IsEmail,
  Length,
  IsPhoneNumber,
  Matches,
} from 'class-validator';

export class SignupCustomerDto {
  @IsString()
  @Length(2, 20)
  name: string;

  @IsEmail()
  email: string;

  // @IsString()
  // @IsPhoneNumber('BD', { message: 'Enter a valid Bangladeshi phone number' })
  // number: string;

  // @IsDate()
  // @IsString()
  // dob: Date;

  // @IsString()
  // @Length(4, 50)
  // address: string;

  // @IsString()
  // @Matches(/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
  //   message:
  //     'Password must contain minimum 8 characters, at least 1 letter, 1 number and 1 special character',
  // })
  // password: string;
}
