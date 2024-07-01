import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({
  discriminatorKey: 'role',
})
export class BaseUser {
  id: string;

  @Prop({
    required: false,
    type: String,
  })
  phone_number: string;

  @Prop({
    required: false,
    type: String,
  })
  email: string;

  @Prop({ required: true })
  first_name: string;

  @Prop({ required: true })
  last_name: string;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({
    type: Date,
    default: new Date(),
    required: true,
  })
  register_date: Date;
}

export type BaseUserDocument = HydratedDocument<BaseUser>;

export const BaseUserSchema = SchemaFactory.createForClass(BaseUser).set(
  'versionKey',
  false,
);

BaseUserSchema.virtual('id').get(function () {
  return this._id.toHexString();
});
