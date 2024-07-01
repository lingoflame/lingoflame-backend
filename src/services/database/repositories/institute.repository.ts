import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { IInstituteRepository } from 'src/core/interfaces/institute.repository';
import { Institute } from 'src/core/entities/institute';

@Injectable()
export default class InstituteRepository implements IInstituteRepository {
  constructor(
    @InjectModel(Institute.name) private instituteModel: Model<Institute>,
  ) {}

  public async create(institute: Institute): Promise<Institute> {
    const newInstitute = await this.instituteModel.create({
      ...institute,
    });
    await newInstitute.save();
    return newInstitute;
  }

  async findById(id: string): Promise<Institute | null> {
    return this.instituteModel.findOne({ _id: id });
  }

  async find(): Promise<Array<Institute>> {
    return await this.instituteModel.find();
  }
  public async update(id: string, data: Partial<Institute>) {
    await this.instituteModel.updateOne({ _id: id }, { $set: data });
  }

  async delete(id: string) {
    await this.instituteModel.deleteOne({ _id: id });
  }
}
