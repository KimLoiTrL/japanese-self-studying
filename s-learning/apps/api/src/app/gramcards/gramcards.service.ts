import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GramcardDocument, Gramcards } from './schema/gramcards.schema';

@Injectable()
export class GramcardsService {
  constructor(
    @InjectModel(Gramcards.name)
      private GramcardModel: Model<GramcardDocument>
  ){}

  async getAll():Promise<Gramcards[]>{
    return this.GramcardModel.find().exec();
  }

  async findOne(id: string): Promise<Gramcards> {
    return await this.GramcardModel.findById(id).exec();
  }

  async createGramcard(gramcards : Gramcards){
    const newGramcard = new this.GramcardModel(gramcards);
    return newGramcard.save();
  }

  async updateGramcard(id: string, gramcards: Gramcards){
    return await this.GramcardModel.findByIdAndUpdate(id, gramcards, {new: true});
  }

  async deleteGramcard(id:string) {
    await this.GramcardModel.findByIdAndRemove(id);
  }
}
