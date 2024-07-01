import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { ClassLevel } from 'src/core/entities/class';
import { TeacherDocument } from './teacher.schema';

@Schema()
export class _Class {
  @Prop({
    required: true,
    type: String,
  })
  name: string;

  @Prop({
    required: true,
    enum: ClassLevel,
    type: String,
  })
  level: string;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'Teacher',
  })
  teacher: TeacherDocument;

  @Prop({
    required: true,
    type: String,
  })
  book: string;

  @Prop({
    required: true,
    type: String,
  })
  sessionsPerWeek: string;

  @Prop({
    required: true,
    type: String,
  })
  dayOfWeek: string;

  @Prop({
    required: true,
    type: String,
  })
  hour: string;

  @Prop({
    required: true,
    type: Number,
  })
  cost: number;

  @Prop({
    required: true,
    type: Number,
  })
  capacity: number;
}

export type ClassDocument = HydratedDocument<_Class>;

export const ClassSchema = SchemaFactory.createForClass(_Class).set(
  'versionKey',
  false,
);

ClassSchema.virtual('id').get(function () {
  return this._id.toHexString();
});
