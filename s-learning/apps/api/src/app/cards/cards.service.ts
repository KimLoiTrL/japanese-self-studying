import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CardDocument, Cards } from './schema/cards.schema';

@Injectable()
export class CardsService {
  constructor(
    @InjectModel(Cards.name)
      private cardModel: Model<CardDocument>
  ){}

  async getAll():Promise<Cards[]>{
    return this.cardModel.find().exec();
  }

  async findOne(id: string): Promise<Cards> {
    return await this.cardModel.findById(id).exec();
  }
}
