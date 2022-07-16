import { suppliers } from 'src/suppliers/entities/suppliers.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @ManyToOne(() => suppliers, (suppliers) => suppliers.products)
  product: Product;
}
