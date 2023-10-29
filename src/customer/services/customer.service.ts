import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}
  
  async signUp(signupCustomerDto) {
    return this.prisma.customer.create({ data: signupCustomerDto });
  }
}
