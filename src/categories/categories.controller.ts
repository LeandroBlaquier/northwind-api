import { Body, Controller, Post } from '@nestjs/common';
import { CategoryService } from './categories.service';
import { CategoryDTO } from './dto/category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly CategoryService: CategoryService) {}

  @Post()
  createProduct(@Body() CategoryDTO: CategoryDTO) {
    this.CategoryService.insert(CategoryDTO);
  }
}
