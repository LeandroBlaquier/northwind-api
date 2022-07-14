import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn() //los id se hacen de esta forma para que se autogeneren las id
  id: number;

  @Column()
  OrderDate: Date;

  @Column()
  RequiredDate: Date;

  @Column()
  ShippedDate: Date;

  @Column()
  ShipVia: string;

  @Column()
  Freight: string;

  @Column()
  ShipName: string;

  @Column()
  ShipAddress: string;

  @Column()
  ShipCity: string;

  @Column()
  ShipRegion: string;

  @Column()
  ShipPostalCode: number;

  @Column()
  ShipCountry: string;

  @Column()
  CustomerID: number;

  @Column()
  EmployeeID: number;
}
