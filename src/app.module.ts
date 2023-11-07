import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { SellerModule } from './seller/seller.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CustomerModule, SellerModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
