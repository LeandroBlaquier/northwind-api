<<<<<<< HEAD
import { Category } from 'src/categories/entities/category.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
=======
import { suppliers } from 'src/suppliers/entities/suppliers.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
>>>>>>> relations1

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

<<<<<<< HEAD
  @OneToMany(() => Category, (category) => category.product)
  categories: Category[];
=======
  @ManyToOne(() => suppliers, (suppliers) => suppliers.products)
  product: Product;
>>>>>>> relations1
}
