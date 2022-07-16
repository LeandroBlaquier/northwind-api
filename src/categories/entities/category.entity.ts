import { Product } from 'src/products/entities/product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 15 })
  CategoryName: string;

  @Column()
  Description: string;

  @Column()
  Picture: string;

  @ManyToOne(() => Product, (product) => product.categories)
  product: Product;
}
