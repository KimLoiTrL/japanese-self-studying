import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SetDocument, Sets } from './schema/sets.schema';

@Injectable()
export class SetsService {
  constructor(
    @InjectModel(Sets.name)
      private setModel: Model<SetDocument>
    ){}

    async getAll():Promise<Sets[]>{
      return this.setModel.find().exec();
    }
}
