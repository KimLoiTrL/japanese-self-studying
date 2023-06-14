import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GramsetDocument, Gramsets } from './schema/gramsets.schema';
import { GramcardDocument, Gramcards } from '../gramcards/schema/gramcards.schema';

@Injectable()
export class GramsetsService {
  constructor(
    @InjectModel(Gramsets.name)
      private gramsetModel: Model<GramsetDocument>,
    @InjectModel(Gramcards.name)
      private gramcardModel: Model<GramcardDocument>
  ){}

    async getAll():Promise<Gramsets[]>{
      return this.gramsetModel.find().exec();
    }

    async findOne(id: string): Promise<Gramsets> {
      return await this.gramsetModel.findById(id).exec();
    }

    async getGramcardsBySet(GramsetId: string): Promise<any[]> {
      const gramset = await this.gramsetModel.findById(GramsetId).exec();
      const cardIds = gramset.gramcards.map(gramcard => gramcard.toString());
      return this.gramcardModel.find({ _id: { $in: cardIds } }).exec();
    }
}
