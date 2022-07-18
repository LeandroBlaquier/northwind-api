import { Product } from 'src/products/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Suppliers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  companyName: string;

  @Column()
  ContactName: string;

  @Column()
  contactTitle: string;

  @Column()
  Address: string;

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

  @OneToMany(() => Product, (product) => product.supplierID)
  products: Product[];
}
