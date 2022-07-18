import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { suppliersDTO } from './dto/suppliers.dto';
import { Suppliers } from './entities/suppliers.entity';

@Injectable()
export class SuppliersService {
  constructor(
    @InjectRepository(Suppliers)
    private suppliersRepository: Repository<Suppliers>,
  ) {}

  async getAll(): Promise<Suppliers[]> {
    return await this.suppliersRepository.find();
  }

  async getId(id: number): Promise<Suppliers> {
    return await this.suppliersRepository.findOne({ where: { id } });
  }

  async insert(body: suppliersDTO) {
    const supplier = await this.suppliersRepository.create({
      ...body,
    });

    await this.suppliersRepository.save(supplier);
    return supplier;
  }
}
