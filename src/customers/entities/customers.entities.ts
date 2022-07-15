import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  customerID: number;

  @Column()
  companyName: string;

  @Column()
  contactName: string;

  @Column()
  contactTitle: string;

  @Column()
  cddress: string;

  @Column()
  city: string;

  @Column()
  region: string;

  @Column()
  postalCode: number;

  @Column()
  country: string;

  @Column()
  phone: string;

  @Column()
  fax: string;
}
