import { IsInt, IsString } from 'class-validator';

export class ProductDTO {
  @IsString()
  productName: string;

  @IsInt()
  quantityPerUnit: number;

  @IsInt()
  unitPrice: number;

  @IsInt()
  unitsInStock: number;

  @IsInt()
  unitsOnOrder: number;

  @IsInt()
  reorderLevel: number;

  @IsInt()
  discontinuedt: number;
}
