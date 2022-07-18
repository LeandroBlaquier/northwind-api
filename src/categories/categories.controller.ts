import { Body, Controller, Post } from '@nestjs/common';
import { CategoryService } from './categories.service';
import { CategoryDTO } from './dto/category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  createProduct(@Body() categoryDTO: CategoryDTO) {
    this.categoryService.insert(categoryDTO);
  }
}
