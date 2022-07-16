import { Category } from 'src/categories/entities/category.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { suppliers } from 'src/suppliers/entities/suppliers.entity';

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

  @OneToMany(() => Category, (category) => category.product)
  categories: Category[];

  @ManyToOne(() => suppliers, (suppliers) => suppliers.products)
  product: Product;
}
