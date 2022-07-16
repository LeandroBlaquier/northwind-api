import { IsDate, IsInt, IsString } from 'class-validator';

export class EmployeeDTO {
  @IsInt()
  employeeID: number;

  @IsString()
  lastName: string;

  @IsString()
  firstName: string;

  @IsString()
  tittle: string;

  @IsString()
  tittleOfCourtesy: string;

  @IsDate()
  birthDate: Date;

  @IsDate()
  hireDate: Date;

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
  homePhone: number;

  @IsInt()
  extension: number;

  @IsString()
  notes: string;

  @IsInt()
  reportsTo: number;
}
