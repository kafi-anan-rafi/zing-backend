import { IsNumber, IsDate, IsOptional } from 'class-validator';

export class SignupCustomerDto {
  @IsNumber()
  customer_id: number;

}
