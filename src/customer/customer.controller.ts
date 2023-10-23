import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './services/customer.service';

@Controller('customer')
export class CustomersController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('signup')
  signUp(@Body() body) {
    return this.customerService.signUp(body);
  }

  // @Post('signin')
  // signIn() {
  //   return 'customer signin!';
  // }
}
