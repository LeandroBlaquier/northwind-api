import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string;

  @Column()
  supplierID: number;

  @Column()
  categoryID: number;

  @Column()
  quantityPerUnit: number;

  @Column()
  unitPrice: number;

  @Column()
  unitsInStock: number;

  @Column()
  unitsOnOrder: number;

  @Column()
  reorderLevel: number;

  @Column()
  discontinuedt: number;
}
