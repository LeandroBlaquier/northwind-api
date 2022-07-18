import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ShipperDTO } from './dto/shippers.dto';
import { Shipper } from './entities/shippers.entity';
import { ShippersService } from './shippers.service';

@Controller('shippers')
export class ShippersController {
  constructor(private readonly shippersServices: ShippersService) {}

  @Get()
  getAllCustomers(): Promise<Shipper[]> {
    return this.shippersServices.getAll();
  }

  @Get(':id')
  async find(@Param('id', ParseIntPipe) id: number) {
    return this.shippersServices.getId(id);
  }

  @Post()
  createProduct(@Body() shipperDTO: ShipperDTO) {
    this.shippersServices.insert(shipperDTO);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: number) {
    this.shippersServices.delete(id);
  }
}
