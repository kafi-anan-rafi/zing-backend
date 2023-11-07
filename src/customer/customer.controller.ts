import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CustomerService } from './services/customer.service';
import { SignupCustomerDto } from './dto/signup-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('/api/customer')
export class CustomersController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('signup')
  signUp(@Body() body: SignupCustomerDto) {
    return this.customerService.signUp(body);
  }

  @Get('/profile/:cid')
  viewProfile(@Param('cid') cid) {
    return this.customerService.viewProfile(cid);
  }

  @Patch('/profile/:cid')
  updateProfile(@Param('cid') cid, @Body() body: UpdateCustomerDto) {
    return this.customerService.updateProfile(cid, body);
  }

  @Get('/products')
  viewProduct() {
    return this.customerService.viewProduct();
  }

  @Get('/products/search')
  searchProduct(@Query('keyword') keyword: string) {
    return this.customerService.searchProduct(keyword);
  }

  // @Post('/order')
  // orderProduct(@Body() body) {}
}
