import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Gramsets, GramsetsSchema } from './schema/gramsets.schema';
import { GramsetsController } from './gramsets.controller';
import { GramsetsService } from './gramsets.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Gramsets.name,
      schema: GramsetsSchema
    }])
  ],
  controllers: [GramsetsController],
  providers: [GramsetsService]
})
export class GramsetsModule {}
