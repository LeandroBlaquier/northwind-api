import { Order } from 'src/orders/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  companyName: string;

  @Column()
  contactName: string;

  @Column()
  contactTitle: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  region: string;

  @Column()
  postalCode: number;

  @Column()
  country: string;

  @Column()
  phone: number;

  @Column()
  fax: string;

  @OneToMany(() => Order, (order) => order.customer)
  orders: Order[];
}
