import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn() //los id se hacen de esta forma para que se autogeneren las id
  id: number;

  @Column('datetime')
  OrderDate: Date;

  @Column('datetime')
  RequiredDate: Date;

  @Column('datetime')
  ShippedDate: Date;

  @Column({ type: 'int' })
  ShipVia: number;

  @Column({ type: 'money' })
  Freight: number;

  @Column('varchar', { length: 40 })
  ShipName: string;

  @Column('varchar', { length: 60 })
  ShipAddress: string;

  @Column('varchar', { length: 15 })
  ShipCity: string;

  @Column('varchar', { length: 15 })
  ShipRegion: string;

  @Column('varchar', { length: 10 })
  ShipPostalCode: string;

  @Column('varchar', { length: 15 })
  ShipCountry: string;

  @Column()
  CustomerID: number;

  @Column({ type: 'int' })
  EmployeeID: number;
}
