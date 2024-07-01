import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { IClassRepository } from 'src/core/interfaces/class.repository';
import { Class } from 'src/core/entities/class';

@Injectable()
export default class ClassRepository implements IClassRepository {
  constructor(@InjectModel(Class.name) private ClassModel: Model<Class>) {}

  public async create(Class: Class): Promise<Class> {
    const newClass = await this.ClassModel.create({
      ...Class,
    });
    await newClass.save();
    return newClass;
  }

  async findById(id: string): Promise<Class | null> {
    return this.ClassModel.findOne({ _id: id });
  }

  async find(): Promise<Array<Class>> {
    return await this.ClassModel.find();
  }

  public async update(id: string, data: Partial<Class>) {
    await this.ClassModel.updateOne({ _id: id }, { $set: data });
  }

  async delete(id: string) {
    await this.ClassModel.deleteOne({ _id: id });
  }
}
