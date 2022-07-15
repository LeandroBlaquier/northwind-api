import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { CustomersModule } from './customers/customers.module';
import { ShippersModule } from './shippers/shippers.module';
import { OrderDetailsModule } from './order-details/order-details.module';
import { CategoriesModule } from './categories/categories.module';
import { SuppliersModule } from './suppliers/suppliers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'northwind',
      retryDelay: 3000,
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductsModule,
    OrdersModule,
    CustomersModule,
    ShippersModule,
    OrderDetailsModule,
    CategoriesModule,
    SuppliersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
