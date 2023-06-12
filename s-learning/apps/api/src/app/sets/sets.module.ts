import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Sets, SetsSchema } from './schema/sets.schema';
import { SetsController } from './sets.controller';
import { SetsService } from './sets.service';

import { CardsModule } from '../cards/cards.module';
import { Cards, CardsSchema } from '../cards/schema/cards.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
        {
        name: Sets.name,
        schema: SetsSchema
      },
        {
        name: Cards.name,
        schema: CardsSchema
      }
    ]),
    CardsModule
  ],
  controllers: [SetsController],
  providers: [SetsService]
})
export class SetsModule {}
