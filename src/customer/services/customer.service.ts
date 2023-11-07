import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  async signUp(signupCustomerDto) {
    return this.prisma.customer.create({ data: signupCustomerDto });
  }

  viewProduct() {
    return this.prisma.product.findMany();
  }
}
