import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SellerService } from './services/seller.service';
import { AddProductDto } from './dto/add-product.dto';
import { SignupSellerDto } from './dto/signup-seller.dto';
import { UpdateProductDto } from './dto/update-product.dto';

// SELLER CONTROLLER

@Controller('/api/seller')
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}

  // SIGN UP
  @Post('signup')
  signUp(@Body() signupSellerDto: SignupSellerDto) {
    return this.sellerService.signUp(signupSellerDto);
  }

  // ADD PRODUCT
  @Post('/:sid/products')
  addProduct(@Param('sid') sid, @Body() addProductDto: AddProductDto) {
    return this.sellerService.addProduct(sid, addProductDto);
  }

  // GET PRODUCT
  @Get('/:sid/product/:pid')
  getProduct(@Param() param) {
    return this.sellerService.getProduct(param);
  }

  @Get('/:sid/products')
  getProducts(@Param('sid') sid) {
    return this.sellerService.getProducts(sid);
  }

  // UPDATE PRODUCT
  @Patch('/:sid/product/:pid')
  updateProduct(@Param() params, @Body() body: UpdateProductDto) {
    return this.sellerService.updateProduct(params, body);
  }

  // DELETE PRODUCT
  @Delete('/:sid/product/:pid')
  deleteProduct(@Param() params) {
    return this.sellerService.deleteProduct(params)
  }

}
