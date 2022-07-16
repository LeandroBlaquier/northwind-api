import { IsInt, IsString } from 'class-validator';

export class suppliersdto {
  @IsString()
  contacName: string;

  @IsString()
  CompanyName: string;

  @IsString()
  contacTitle: string;

  @IsString()
  Address: string;

  @IsString()
  city: string;

  @IsString()
  region: string;

  @IsInt()
  PostalCode: number;

  @IsString()
  conutry: string;

  @IsInt()
  phone: number;

  @IsString()
  fax: string;

  @IsString()
  Homepage: string;

  @IsInt()
  stock: number;
}
