import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Gramsets, GramsetsSchema } from './schema/gramsets.schema';
import { GramsetsController } from './gramsets.controller';
import { GramsetsService } from './gramsets.service';

import { GramcardsModule } from '../gramcards/gramcards.module';
import { Gramcards, GramcardsSchema } from '../gramcards/schema/gramcards.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
        {
        name: Gramsets.name,
        schema: GramsetsSchema
      },
      {
        name: Gramcards.name,
        schema: GramcardsSchema
      },
    ]),
    GramcardsModule
  ],
  controllers: [GramsetsController],
  providers: [GramsetsService]
})
export class GramsetsModule {}
