import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { User } from 'src/core/entities/user';
import { IUserRepository } from 'src/core/interfaces/user.repository';

@Injectable()
export default class UserRepository implements IUserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  public async create(user: User): Promise<User> {
    const newUser = await this.userModel.create({
      ...user,
    });
    await newUser.save();
    return newUser;
  }

  async findOneByPhoneNumber(phone_number: string): Promise<User | null> {
    return this.userModel.findOne({ phone_number: phone_number });
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.userModel.findOne({ username: username });
  }

  async findById(id: string): Promise<User | null> {
    return this.userModel.findOne({ _id: id });
  }

  async find(): Promise<Array<User>> {
    return await this.userModel.find();
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email: email });
  }

  public async update(id: string, data: Partial<User>) {
    await this.userModel.updateOne({ _id: id }, { $set: data });
  }

  async delete(id: string) {
    await this.userModel.deleteOne({ _id: id });
  }
}
