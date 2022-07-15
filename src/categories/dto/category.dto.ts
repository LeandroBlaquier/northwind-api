import { IsString } from 'class-validator';

export class CategoryDTO {
  @IsString()
  CategoryName: string;

  @IsString()
  Description: string;

  @IsString()
  Picture: string;
}
