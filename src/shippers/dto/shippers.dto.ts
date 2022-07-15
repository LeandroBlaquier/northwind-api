import { IsInt, IsString } from 'class-validator';

export class ShipperDTO {
  @IsString()
  companyName: string;

  @IsInt()
  phone: number;
}
