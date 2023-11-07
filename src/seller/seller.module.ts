import { Module } from '@nestjs/common';
import { SellerController } from './seller.controller';
import { SellerService } from './services/seller.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [],
  exports: [],
  controllers: [SellerController],
  providers: [SellerService, PrismaService],
})
export class SellerModule {}
