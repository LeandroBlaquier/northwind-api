import { Body, Controller, Post } from '@nestjs/common';
import { ProductDTO } from './dto/product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  createProduct(@Body() productDTO: ProductDTO) {
    this.productsService.insert(productDTO);
  }
}
