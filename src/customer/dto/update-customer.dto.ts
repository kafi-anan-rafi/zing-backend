import { PartialType } from '@nestjs/mapped-types';
import { SignupCustomerDto } from './signup-customer.dto';

export class UpdateCustomerDto extends PartialType(SignupCustomerDto) {}
