import { IsDate, IsInt, IsString } from 'class-validator';

export class OrderDTO {
  @IsDate()
  OrderDate: Date;

  @IsDate()
  RequiredDate: Date;

  @IsDate()
  ShippedDate: Date;

  @IsInt()
  ShipVia: number;

  @IsInt()
  Freight: number;

  @IsString()
  ShipName: string;

  @IsString()
  ShipAddress: string;

  @IsString()
  ShipCity: string;

  @IsString()
  ShipRegion: string;

  @IsString()
  ShipPostalCode: string;

  @IsString()
  ShipCountry: string;
}
