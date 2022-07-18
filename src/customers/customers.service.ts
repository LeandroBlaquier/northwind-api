import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerDTO } from './dto/customers.dto';
import { Customer } from './entities/customers.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async getAll(): Promise<Customer[]> {
    return await this.customerRepository.find();
  }

  async getId(id: number): Promise<Customer> {
    return await this.customerRepository.findOne({ where: { id } });
  }

  async insert(body: CustomerDTO) {
    const customer = await this.customerRepository.create({
      ...body,
    });

    await this.customerRepository.save(customer);
    return customer;
  }
}
