import { Module } from '@nestjs/common';
import { CustomersController } from './customer.controller';
import { CustomerService } from './services/customer.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [],
  exports: [],
  controllers: [CustomersController],
  providers: [CustomerService, PrismaService],
})
export class CustomerModule {}
