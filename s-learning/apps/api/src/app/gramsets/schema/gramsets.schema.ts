import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type GramsetDocument = Gramsets & Document;

@Schema()
export class Gramsets {
  @Prop()
  name: string;

  @Prop()
  content: string;
}

export const GramsetsSchema = SchemaFactory.createForClass(Gramsets);
