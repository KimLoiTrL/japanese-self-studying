import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CardDocument = Cards & Document;

@Schema()
export class Cards {
  @Prop()
  card_id: string;

  @Prop()
  word: string;

  @Prop()
  pronunciation: string;

  @Prop()
  define: string;

  @Prop()
  part: string;

  @Prop()
  example: string;

  @Prop()
  trans: string;

  @Prop()
  set: string;
}

export const CardsSchema = SchemaFactory.createForClass(Cards);
