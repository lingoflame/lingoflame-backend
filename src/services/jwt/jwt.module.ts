import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtTokenService } from './encryption.service';
import { ITokenService } from 'src/core/interfaces/token.service';

@Global()
@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('ACCESS_TOKEN_SECRET'),
        signOptions: { expiresIn: '60d' },
      }),

      inject: [ConfigService],
    }),
  ],
  providers: [{ useClass: JwtTokenService, provide: ITokenService }],
  exports: [ITokenService],
})
export class AppJwtModule {}
