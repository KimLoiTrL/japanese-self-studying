import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema  } from "mongoose";
import { Cards } from "../../cards/schema/cards.schema";

export type SetDocument = Sets & Document;

@Schema()
export class Sets {
  @Prop()
  name: string;

  @Prop()
  imageUrl: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: Cards.name }] })
  cards: string[];
}

export const SetsSchema = SchemaFactory.createForClass(Sets);
