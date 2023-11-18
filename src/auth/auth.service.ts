import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/signin.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async customerSignIn(body: SignInDto) {
    const user = await this.prisma.customer.findUnique({
      where: { email: body.email },
    });

    if (user.password !== body.password) throw new UnauthorizedException();
    const payload = { ...user };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async sellerSignIn(body) {
    try {
      const user = await this.prisma.seller.findUnique({
        where: { email: body.email },
      });
      if (user.password !== body.password)
        throw new UnauthorizedException('Incorrect password');
      const payload = { ...user };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (error) {
      console.error('Error ', error);
    }
  }
}
