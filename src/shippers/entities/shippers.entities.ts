import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Shipper {
  @PrimaryGeneratedColumn()
  shipperId: number;

  @Column()
  companyName: string;

  @Column()
  phone: number;
}
