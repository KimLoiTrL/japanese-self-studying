import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Sets, SetsSchema } from './schema/sets.schema';
import { SetsController } from './sets.controller';
import { SetsService } from './sets.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Sets.name,
      schema: SetsSchema
    }])
  ],
  controllers: [SetsController],
  providers: [SetsService]
})
export class SetsModule {}
