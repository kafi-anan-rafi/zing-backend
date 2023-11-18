import { IsNumber, IsString, Max, Min } from 'class-validator';

export class OrderCustomerDto {
  @IsNumber()
  quantity: number;
}
