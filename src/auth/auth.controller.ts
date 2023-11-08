import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './decorator/public.decorator';
import { SignInDto } from './dto/signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('/customer/signin')
  customerSignIn(@Body() body: SignInDto) {
    return this.authService.customerSignIn(body);
  }

  @Public()
  @Post('/seller/signin')
  sellerSignIn(@Body() body: SignInDto) {
    return this.authService.sellerSignIn(body);
  }
}
