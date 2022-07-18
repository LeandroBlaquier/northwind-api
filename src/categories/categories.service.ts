import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryDTO } from './dto/category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private CategoryRepository: Repository<CategoryDTO>,
  ) {}

  async insert(body: CategoryDTO) {
    const product = this.CategoryRepository.create({
      ...body,
    });
    await this.CategoryRepository.save(product);
    return product;
  }
}
