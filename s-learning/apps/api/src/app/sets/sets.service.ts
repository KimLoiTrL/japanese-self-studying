import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SetDocument, Sets } from './schema/sets.schema';
import { CardDocument, Cards } from '../cards/schema/cards.schema';

@Injectable()
export class SetsService {
  constructor(
    @InjectModel(Sets.name)
      private setModel: Model<SetDocument>,
    @InjectModel(Cards.name)
      private cardModel: Model<CardDocument>
  ){}

    async getAll():Promise<Sets[]>{
      return this.setModel.find().exec();
    }

    async findOne(id: string): Promise<Sets> {
      return await this.setModel.findById(id).exec();
    }

    async getCardsBySet(setId: string): Promise<any[]> {
      const set = await this.setModel.findById(setId).exec();
      const cardIds = set.cards.map(card => card.toString());
      return this.cardModel.find({ _id: { $in: cardIds } }).exec();
    }

    async createSet(sets : Sets){
      const newSet = new this.setModel(sets);
      return newSet.save();
    }

    async updateSet(id: string, sets: Sets){
      return await this.setModel.findByIdAndUpdate(id, sets, {new: true});
    }

    async deleteSet(id:string) {
      await this.setModel.findByIdAndRemove(id);
    }
}
