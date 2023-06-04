import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cards, CardsSchema } from './schema/cards.schema';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Cards.name,
      schema: CardsSchema
    }])
  ],
  controllers: [CardsController],
  providers: [CardsService]
})
export class CardsModule {}
