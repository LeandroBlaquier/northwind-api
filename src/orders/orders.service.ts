import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'src/customers/entities/customers.entity';
import { Repository } from 'typeorm';
import { OrderDTO } from './dto/order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepositery: Repository<Order>,
    @InjectRepository(Customer)
    private customersRepository: Repository<Customer>,
  ) {}

  async getAll(): Promise<Order[]> {
    return await this.ordersRepositery.find();
  }

  async getId(id: number): Promise<Order> {
    return await this.ordersRepositery.findOne({ where: { id } });
  }

  async insert(body: OrderDTO) {
    const order = this.ordersRepositery.create({
      ...body,
    });
    await this.ordersRepositery.save(order);
    return order;
  }

  async delete(id: number): Promise<Order> {
    const product = await this.ordersRepositery.findOne({ where: { id } });
    if (product) {
      return this.ordersRepositery.remove(product);
    }
    throw new NotFoundException(`No se encuentra el producto ${id}`);
  }
}
