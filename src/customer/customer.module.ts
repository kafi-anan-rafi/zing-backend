import { Module } from '@nestjs/common';
import { CustomersController } from './customer.controller';
import { CustomerService } from './services/customer.service';

@Module({
  imports: [],
  exports: [],
  controllers: [CustomersController],
  providers: [CustomerService],
})
export class CustomerModule {}
