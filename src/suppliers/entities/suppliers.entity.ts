import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class suppliers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  companyName: string;

  @Column()
  ContactName: string;

  @Column()
  contactTitle: string;

  @Column()
  Address: number;

  @Column()
  city: string;

  @Column()
  region: string;

  @Column()
  Postalcode: number;

  @Column()
  country: string;

  @Column()
  phone: number;

  @Column()
  fax: string;

  @Column()
  homePage: string;
}
