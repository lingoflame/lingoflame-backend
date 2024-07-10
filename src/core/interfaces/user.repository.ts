import { GenericRepository } from './generic.repository';
import { User } from '../entities/user';

export interface IUserRepository extends GenericRepository<User> {
  findByUsername(username: string): Promise<User>;
}

export const IUserRepository = Symbol('IUserRepository');
