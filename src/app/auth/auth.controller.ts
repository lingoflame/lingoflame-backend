import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { LocalAuthGuard } from './guards/auth.guard';
import { JwtAuthGuard } from './guards/jwt.guard';
import { ApiBody } from '@nestjs/swagger';
import { LogInDto } from './dto/log-in.dto';

@Controller()
export class AuthController {
  @Post('auth/login')
  @ApiBody({ type: LogInDto })
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    console.log(req.user);

    return req.user;
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req) {
    return req.user;
  }
}
