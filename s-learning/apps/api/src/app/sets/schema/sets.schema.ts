import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type SetDocument = Sets & Document;

@Schema()
export class Sets {
  @Prop()
  set_id: string;

  @Prop()
  name: string;

  @Prop()
  imageUrl: string;
}

export const SetsSchema = SchemaFactory.createForClass(Sets);
