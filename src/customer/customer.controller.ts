import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { CustomerService } from './services/customer.service';
import { SignupCustomerDto } from './dto/signup-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { Public } from 'src/auth/decorator/public.decorator';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { Role } from 'src/auth/role.enum';

// CUSTOMER CONTROLLER

@Controller('/api/customer')
export class CustomersController {
  constructor(private readonly customerService: CustomerService) {}
  // SIGN UP
  @Public()
  @Post('signup')
  signUp(@Body() body: SignupCustomerDto) {
    return this.customerService.signUp(body);
  }

  // VIEW PROFILE
  @Roles(Role.CUSTOMER)
  @Get('/profile/:cid')
  viewProfile(@Param('cid') cid) {
    return this.customerService.viewProfile(cid);
  }

  // UPDATE PROFILE
  @Roles(Role.CUSTOMER)
  @Patch('/profile/:cid')
  updateProfile(@Param('cid') cid, @Body() body: UpdateCustomerDto) {
    return this.customerService.updateProfile(cid, body);
  }

  // VIEW PRODUCT
  @Roles(Role.CUSTOMER)
  @Get('/product/:pid')
  viewProduct(@Param('pid') pid) {
    return this.customerService.viewProduct(pid);
  }

  // SEARCH PRODUCT
  @Roles(Role.CUSTOMER)
  @Get('/products/search')
  searchProduct(@Query('keyword') keyword: string) {
    return this.customerService.searchProduct(keyword);
  }

  // @Post('/order')
  // orderProduct(@Body() body) {}
}
