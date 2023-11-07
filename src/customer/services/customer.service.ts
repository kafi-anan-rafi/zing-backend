import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  async signUp(body) {
    return this.prisma.customer.create({ data: body });
  }

  async viewProfile(cid) {
    try {
      const response = await this.prisma.customer.findUnique({
        where: { id: parseInt(cid) },
      });
      if (!response) return { error: 'User not found!' };
      return response;
    } catch (err) {
      return { error: 'An unexpected error occured!' };
    }
  }

  async updateProfile(cid, body) {
    try {
      const response = await this.prisma.customer.update({
        where: { id: parseInt(cid) },
        data: body,
      });
      if (!response) return { error: 'User not found!' };
      return response;
    } catch (err) {
      return { error: 'An unexpected error occured!' };
    }
  }

  async viewProduct(pid) {
    try {
      const response = await this.prisma.product.findUnique({
        where: { id: parseInt(pid) },
      });
      if (!response) return { error: 'Product not found!' };
      return response;
    } catch (err) {
      return { error: 'An unexpected error occured!' };
    }
  }

  searchProduct(keyword: string) {
    return this.prisma.product.findMany({
      where: {
        OR: [
          {
            name: {
              contains: keyword,
            },
          },
          {
            details: {
              contains: keyword,
            },
          },
        ],
      },
    });
  }
}
