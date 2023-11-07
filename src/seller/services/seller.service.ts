import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SellerService {
  constructor(private prisma: PrismaService) {}

  signUp(signupSellerDto) {
    return this.prisma.seller.create({ data: signupSellerDto });
  }

  async addProduct(sid, addProductDto) {
    const newProduct = { ...addProductDto, sellerId: parseInt(sid) };
    try {
      return await this.prisma.product.create({ data: newProduct });
    } catch (err) {
      return { error: "Seller don't exist", err };
    }
  }

  async getProduct(params) {
    const response = await this.prisma.product.findUnique({
      where: {
        id: parseInt(params.pid),
        AND: [{ sellerId: parseInt(params.sid) }],
      },
    });
    if (!response) return { error: 'Could not found the User or the Product' };
    return response;
  }

  async getProducts(sid: string) {
    try {
      const found = await this.prisma.seller.findUnique({
        where: { id: parseInt(sid) },
      });
      if (!found) return { error: "Seller don't exist" };

      return await this.prisma.product.findMany({
        where: { sellerId: parseInt(sid) },
      });
    } catch (err) {
      return { error: 'An unexpected error occured!', err };
    }
  }

  async updateProduct(params, body) {
    try {
      const { pid, sid } = params;
      const response = await this.prisma.product.update({
        data: body,
        where: { id: parseInt(pid), AND: [{ sellerId: parseInt(sid) }] },
      });
      if (!response) return { error: "Seller doesn't exist!" };
      return response;
    } catch (err) {
      return { error: 'An unexpected error occured!', err };
    }
  }

  async deleteProduct(params) {
    try {
      const { pid, sid } = params;
      const response = await this.prisma.product.delete({
        where: { id: parseInt(pid), AND: [{ sellerId: parseInt(sid) }] },
      });
      if (!response) return { error: "Seller or Product don't exist!" };
      return response;
    } catch (err) {
      return { error: 'An unexpected error occured!', err };
    }
  }
}
