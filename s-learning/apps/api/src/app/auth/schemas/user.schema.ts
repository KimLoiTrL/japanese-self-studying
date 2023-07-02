import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({
  timestamps: true
})

export class User extends Document{

  @Prop()
  username: string;

  @Prop({ unique: [true, 'Duplicate email entered']})
  email: string;

  @Prop()
  password: string;

  @Prop()
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
