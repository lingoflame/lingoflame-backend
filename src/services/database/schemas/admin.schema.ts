import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseUser } from './base-user.schema';
import { Role } from 'src/core/entities/user';

@Schema()
export class _Admin extends BaseUser {
  role: Role = Role.Admin;
}

export type AdminDocument = HydratedDocument<_Admin>;

export const AdminSchema = SchemaFactory.createForClass(_Admin).set(
  'versionKey',
  false,
);

AdminSchema.virtual('id').get(function () {
  return this._id.toHexString();
});
