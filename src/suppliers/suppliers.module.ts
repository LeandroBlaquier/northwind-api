import { Module } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuppliersController } from './suppliers.controller';
import { suppliers } from './entities/suppliers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([suppliers])],
  providers: [SuppliersService],
  controllers: [SuppliersController],
  exports: [TypeOrmModule],
})
export class SuppliersModule {}
