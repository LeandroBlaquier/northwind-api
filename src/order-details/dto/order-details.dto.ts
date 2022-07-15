import { IsInt, IsString } from 'class-validator';

export class OrderDetailsDTO {
  @IsString()
  CategoryName: string;

  @IsInt()
  UnitPrice: number;

  @IsInt()
  Quantity: number;

  @IsInt()
  Discount: number;
}
