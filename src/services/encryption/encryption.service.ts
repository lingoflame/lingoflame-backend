import { Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';
import { IPasswordService } from 'src/core/interfaces/password.service';

@Injectable()
export class EncryptionService implements IPasswordService {
  constructor() {}

  async hash(password: string): Promise<string> {
    return await hash(password, 10);
  }
  async compare(password: string, hashedPassword: string): Promise<boolean> {
    return await compare(password, hashedPassword);
  }
}
