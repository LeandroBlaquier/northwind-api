import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShipperDTO } from './dto/shippers.dto';
import { Shipper } from './entities/shippers.entity';

@Injectable()
export class ShippersService {
  constructor(
    @InjectRepository(Shipper)
    private shippersRepository: Repository<Shipper>,
  ) {}

  async getAll(): Promise<Shipper[]> {
    return await this.shippersRepository.find();
  }

  async getId(id: number): Promise<Shipper> {
    return await this.shippersRepository.findOne({ where: { id } });
  }

  async insert(body: ShipperDTO) {
    const shipper = await this.shippersRepository.create({
      ...body,
    });

    await this.shippersRepository.save(shipper);
    return shipper;
  }
  async delete(id: number): Promise<Shipper> {
    const shipper = await this.shippersRepository.findOne({ where: { id } });
    if (shipper) {
      return this.shippersRepository.remove(shipper);
    }
    throw new NotFoundException(`No se encuentra el producto ${id}`);
  }
}
