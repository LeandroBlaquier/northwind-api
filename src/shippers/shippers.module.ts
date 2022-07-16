import { Module } from '@nestjs/common';
import { ShippersService } from './shippers.service';
import { ShippersController } from './shippers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shipper } from './entities/shippers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shipper])],
  providers: [ShippersService],
  controllers: [ShippersController],
  exports: [TypeOrmModule],
})
export class ShippersModule {}
