import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Admin } from 'src/core/entities/Admin';
import { IUserRepository } from 'src/core/interfaces/user.repository';

@Injectable()
export default class AdminRepository implements IUserRepository {
  constructor(@InjectModel(Admin.name) private admin: Model<Admin>) {}

  public async create(Admin: Admin): Promise<Admin> {
    const newAdmin = await this.admin.create({
      ...Admin,
    });
    await newAdmin.save();
    return newAdmin;
  }

  async findOneByPhoneNumber(phone_number: string): Promise<Admin | null> {
    return this.admin.findOne({ phone_number: phone_number });
  }

  async findById(id: string): Promise<Admin | null> {
    return this.admin.findOne({ _id: id });
  }

  async find(): Promise<Array<Admin>> {
    return await this.admin.find();
  }

  async findOneByEmail(email: string): Promise<Admin | null> {
    return this.admin.findOne({ email: email });
  }

  public async update(id: string, data: Partial<Admin>) {
    await this.admin.updateOne({ _id: id }, { $set: data });
  }

  async delete(id: string) {
    await this.admin.deleteOne({ _id: id });
  }
}
