import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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

  async getId(customerID: number): Promise<Customer> {
    return await this.customerRepository.findOne({ where: { customerID } });
  }
}
