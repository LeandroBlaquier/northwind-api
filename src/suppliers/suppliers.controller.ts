import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { suppliersDTO } from './dto/suppliers.dto';
import { Suppliers } from './entities/suppliers.entity';
import { SuppliersService } from './suppliers.service';

@Controller('suppliers')
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) {}

  @Get()
  getAllCustomers(): Promise<Suppliers[]> {
    return this.suppliersService.getAll();
  }

  @Get(':id')
  async find(@Param('id', ParseIntPipe) id: number) {
    return this.suppliersService.getId(id);
  }

  @Post()
  createProduct(@Body() supplierDTO: suppliersDTO) {
    this.suppliersService.insert(supplierDTO);
  }
}
