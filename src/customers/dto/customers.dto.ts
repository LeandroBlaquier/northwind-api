import { IsInt, IsString } from 'class-validator';

export class CustomerDTO {
  @IsString()
  companyName: string;

  @IsInt()
  contactName: string;

  @IsString()
  contactTitle: string;

  @IsString()
  address: string;

  @IsString()
  city: string;

  @IsString()
  region: string;

  @IsInt()
  postalCode: number;

  @IsString()
  country: string;

  @IsInt()
  phone: number;

  @IsString()
  fax: string;
}
