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
import { OrderDTO } from './dto/order.dto';
import { Order } from './entities/order.entity';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  getAllOrders(): Promise<Order[]> {
    return this.ordersService.getAll();
  }

  @Get(':id')
  async find(@Param('id', ParseIntPipe) id: number) {
    return this.ordersService.getId(id);
  }

  @Post()
  createProduct(@Body() orderDTO: OrderDTO) {
    this.ordersService.insert(orderDTO);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: number) {
    this.ordersService.delete(id);
  }
}
