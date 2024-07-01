import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class _Institute {
  id: string;

  @Prop({
    required: true,
    unique: true,
    type: String,
  })
  title: string;
}

export type InstituteDocument = HydratedDocument<_Institute>;

export const InstituteSchema = SchemaFactory.createForClass(_Institute).set(
  'versionKey',
  false,
);

InstituteSchema.virtual('id').get(function () {
  return this._id.toHexString();
});
