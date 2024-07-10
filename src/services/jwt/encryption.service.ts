import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/core/entities/user';
import { ITokenService } from 'src/core/interfaces/token.service';

@Injectable()
export class JwtTokenService implements ITokenService {
  constructor(private jwtService: JwtService) {}

  async sign(payload: { userId: string }): Promise<string> {
    return await this.jwtService.sign(payload);
  }
  async verify(token: string): Promise<User> {
    return await this.jwtService.verify(token);
  }
}
