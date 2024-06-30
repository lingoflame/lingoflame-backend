import { GenericRepository } from './generic.repository';
import { User } from '../entities/user';

export interface IUserRepository extends GenericRepository<User> {}
