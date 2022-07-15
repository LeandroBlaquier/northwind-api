import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderDetails {
  @PrimaryGeneratedColumn() //los id se hacen de esta forma para que se autogeneren las id
  id: number;

  @Column({ type: 'money' })
  UnitPrice: number;

  @Column('smallint')
  Quantity: number;

  @Column('real')
  Discount: number;

  @Column('int')
  ProductID: number;
}
