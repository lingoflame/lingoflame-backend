import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseUser } from './base-user.schema';
import { Role } from 'src/core/entities/user';

@Schema()
export class _Teacher extends BaseUser {
  role: Role;
}

export type TeacherDocument = HydratedDocument<_Teacher>;

export const TeacherSchema = SchemaFactory.createForClass(_Teacher).set(
  'versionKey',
  false,
);

TeacherSchema.virtual('id').get(function () {
  return this._id.toHexString();
});
