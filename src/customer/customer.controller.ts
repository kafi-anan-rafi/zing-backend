import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './services/customer.service';
import { SignupCustomerDto } from './dto/signup-customer.dto';

@Controller('/api/customer')
export class CustomersController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('signup')
  signUp(@Body() signupCustomerDto: SignupCustomerDto) {
    return this.customerService.signUp(signupCustomerDto);
  }

  // @Post('signin')
  // signIn() {
  //   return 'customer signin!';
  // }
}
