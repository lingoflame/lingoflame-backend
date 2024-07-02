import { Global, Module } from '@nestjs/common';
import { EncryptionService } from './encryption.service';
import { IPasswordService } from 'src/core/interfaces/password.service';

@Global()
@Module({
  imports: [],
  providers: [{ provide: IPasswordService, useClass: EncryptionService }],
  exports: [IPasswordService],
})
export class EncryptionModule {}
