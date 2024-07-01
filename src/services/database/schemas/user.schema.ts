import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseUser } from './base-user.schema';
import { Role } from 'src/core/entities/user';

@Schema()
export class _User extends BaseUser {
  role: Role = Role.User;
}

export type UserDocument = HydratedDocument<_User>;

export const UserSchema = SchemaFactory.createForClass(_User).set(
  'versionKey',
  false,
);

UserSchema.virtual('id').get(function () {
  return this._id.toHexString();
});
