import { User } from '../entities/user';

export interface IAuthService {
  validateUser(username: string, password: string): Promise<User>;
}
