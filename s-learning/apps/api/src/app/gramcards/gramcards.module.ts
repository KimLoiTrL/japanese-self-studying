import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Gramcards, GramcardsSchema } from './schema/gramcards.schema';
import { GramcardsController } from './gramcards.controller';
import { GramcardsService } from './gramcards.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Gramcards.name,
      schema: GramcardsSchema
    }])
  ],
  controllers: [GramcardsController],
  providers: [GramcardsService]
})
export class GramcardsModule {}
