import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/core/entities/user';
import { IAuthService } from 'src/core/interfaces/auth.service';
import { IPasswordService } from 'src/core/interfaces/password.service';
import { ITokenService } from 'src/core/interfaces/token.service';
import { IUserRepository } from 'src/core/interfaces/user.repository';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject(IUserRepository) private userRepository: IUserRepository,
    @Inject(IPasswordService) private encryptionService: IPasswordService,
    @Inject(ITokenService)
    private jwtService: ITokenService,
  ) {}

  async login(user: any) {
    const payload = { userId: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(username: string, pass: string): Promise<User> {
    const user = await this.userRepository.findByUsername(username);
    if (user && (await this.encryptionService.compare(pass, user.password)))
      return user;

    return null;
  }
}
