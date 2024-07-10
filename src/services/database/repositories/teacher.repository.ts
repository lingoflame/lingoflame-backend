import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/core/interfaces/user.repository';
import { Teacher } from 'src/core/entities/teacher';
import { Admin } from 'src/core/entities/admin';

@Injectable()
export default class TeacherRepository implements IUserRepository {
  constructor(
    @InjectModel(Teacher.name) private teacherModel: Model<Teacher>,
  ) {}

  public async create(teacher: Teacher): Promise<Teacher> {
    const newTeacher = await this.teacherModel.create({
      ...teacher,
    });
    await newTeacher.save();
    return newTeacher;
  }

  async findOneByPhoneNumber(phone_number: string): Promise<Teacher | null> {
    return this.teacherModel.findOne({ phone_number: phone_number });
  }

  async findById(id: string): Promise<Teacher | null> {
    return this.teacherModel.findOne({ _id: id });
  }

  async findByUsername(username: string): Promise<Teacher | null> {
    return this.teacherModel.findOne({ username: username });
  }

  async find(): Promise<Array<Teacher>> {
    return await this.teacherModel.find();
  }

  async findOneByEmail(email: string): Promise<Teacher | null> {
    return this.teacherModel.findOne({ email: email });
  }

  public async update(id: string, data: Partial<Teacher>) {
    await this.teacherModel.updateOne({ _id: id }, { $set: data });
  }

  async delete(id: string) {
    await this.teacherModel.deleteOne({ _id: id });
  }
}
