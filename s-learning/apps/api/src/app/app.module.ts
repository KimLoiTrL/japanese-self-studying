import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { SetsModule } from "./sets/sets.module";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://bi:2GKbwDviKgbavvnk@cluster0.kw53spx.mongodb.net/s-learning?retryWrites=true&w=majority"),
    SetsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
