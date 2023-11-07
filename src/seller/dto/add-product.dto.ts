import { IsNumber, IsString } from 'class-validator';

export class AddProductDto {
  @IsString()
  name: string;

  @IsNumber()
  quantity: number;

  @IsString()
  details: string;

  @IsNumber()
  price: number;

  // category, SKU, Photo, Rating
}
