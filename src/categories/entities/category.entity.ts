import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
