import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type GramcardDocument = Gramcards & Document;

@Schema()
export class Gramcards {
  @Prop()
  name: string;

  @Prop()
  define: string;

  @Prop()
  structure: string[];

  @Prop()
  add: string;

  @Prop()
  ex: string;

  @Prop()
  sub: string;

  @Prop()
  ex_one: string;

  @Prop()
  sub_one: string;

  @Prop()
  set: string;
}

export const GramcardsSchema = SchemaFactory.createForClass(Gramcards);
