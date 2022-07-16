import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  employeesID: number;

  @Column({ type: 'varchar', length: 20 })
  lastName: string;

  @Column({ type: 'varchar', length: 20 })
  firstName: string;

  @Column({ type: 'varchar', length: 30 })
  tittle: string;

  @Column({ type: 'varchar', length: 25 })
  tittleOfCourtesy: string;

  @Column({ type: 'date' })
  brithDate: Date;

  @Column({ type: 'date' })
  hireDate: Date;

  @Column({ type: 'varchar', length: 60 })
  address: string;

  @Column({ type: 'varchar', length: 15 })
  city: string;

  @Column({ type: 'varchar', length: 15 })
  region: string;

  @Column({ type: 'number', length: 10 })
  postalCode: string;

  @Column({ type: 'varchar', length: 15 })
  country: string;

  @Column({ type: 'number', length: 24 })
  homePhone: number;

  @Column({ type: 'number', length: 5 })
  extension: number;

  @Column({ type: 'number' })
  reportsTo: number;
}
