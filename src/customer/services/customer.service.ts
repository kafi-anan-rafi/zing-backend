import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
  signUp(customer) {
    return customer;
  }
}
