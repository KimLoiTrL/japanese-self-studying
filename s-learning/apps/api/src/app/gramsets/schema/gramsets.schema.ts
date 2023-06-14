import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
import { Gramcards } from "../../gramcards/schema/gramcards.schema";

export type GramsetDocument = Gramsets & Document;

@Schema()
export class Gramsets {
  @Prop()
  name: string;

  @Prop()
  content: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: Gramcards.name }] })
  gramcards: string[];
}

export const GramsetsSchema = SchemaFactory.createForClass(Gramsets);
