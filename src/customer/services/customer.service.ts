import { BadRequestException, Injectable } from '@nestjs/common';
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

  async createOrder(params, orderCustomerDto) {
    const { pid, cid } = params;
    const { quantity } = orderCustomerDto;

    const product = await this.prisma.product.findUnique({
      where: { id: parseInt(pid) },
    });
    if (!product)
      throw new BadRequestException('Sorry, the product could not found!');

    if (quantity < 1)
      throw new BadRequestException('Quantity should be greter than 0');

    if (product.stock > quantity) {
      const orderInfo = {
        customerId: parseInt(cid),
        totalAmount: quantity * product.price,
      };
      const order = await this.prisma.order.create({ data: orderInfo });

      const orderDetailsInfo = {
        orderId: order.id,
        productId: parseInt(pid),
        quantity: quantity,
        unitPrice: product.price,
      };
      await this.prisma.orderDetails.create({
        data: orderDetailsInfo,
      });

      // update product stock
      await this.prisma.product.update({
        data: { stock: product.stock - quantity },
        where: { id: parseInt(pid) },
      });

      return 'Product order successfull';
    }
    throw new BadRequestException(
      `Can't order more than ${product.stock} items`,
    );
  }
}
