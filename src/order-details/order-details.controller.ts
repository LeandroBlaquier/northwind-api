import { Controller } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { OrderDetailsDTO } from './dto/order-details.dto';
import { OrderDetails } from './entities/order-detail.entity';

@Controller('order-details')
export class OrderDetailsController {
  constructor(
    @InjectRepository(OrderDetails)
    private orderRepository: Repository<OrderDetails>,
  ) {}

  async getAll(): Promise<OrderDetails[]> {
    return await this.orderRepository.find();
  }

  async getId(id: number): Promise<OrderDetails> {
    return await this.orderRepository.findOne({ where: { id } });
  }

  async insert(body: OrderDetailsDTO) {
    const supplier = await this.orderRepository.create({
      ...body,
    });

    await this.orderRepository.save(supplier);
    return supplier;
  }
}
