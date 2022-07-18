import { Product } from 'src/products/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderDetails {
  @PrimaryGeneratedColumn() //los id se hacen de esta forma para que se autogeneren las id
  id: number;

  @Column()
  UnitPrice: number;

  @Column('smallint')
  Quantity: number;

  @Column('real')
  Discount: number;

  @Column('int')
  ProductID: number;

  @OneToMany(() => Product, (product) => product.orderdetail)
  product: Product[];
}
