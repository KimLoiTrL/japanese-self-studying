import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GramsetDocument, Gramsets } from './schema/gramsets.schema';

@Injectable()
export class GramsetsService {
  constructor(
    @InjectModel(Gramsets.name)
      private gramsetModel: Model<GramsetDocument>
    ){}

    async getAll():Promise<Gramsets[]>{
      return this.gramsetModel.find().exec();
    }
}
