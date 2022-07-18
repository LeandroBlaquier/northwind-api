import {
  Body,
  Controller,
  Get,
  // HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  // Put,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomerDTO } from './dto/customers.dto';
import { Customer } from './entities/customers.entity';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customerServices: CustomersService) {}

  @Get()
  getAllCustomers(): Promise<Customer[]> {
    return this.customerServices.getAll();
  }

  @Get(':id')
  async find(@Param('id', ParseIntPipe) id: number) {
    return this.customerServices.getId(id);
  }

  @Post()
  createProduct(@Body() customerDTO: CustomerDTO) {
    this.customerServices.insert(customerDTO);
  }
}
