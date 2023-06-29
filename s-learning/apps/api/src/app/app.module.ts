import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SetsModule } from "./sets/sets.module";
import { CardsModule } from "./cards/cards.module";
import { GramsetsModule } from "./gramsets/gramsets.module";
import { GramcardsModule } from "./gramcards/gramcards.module";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.prod', '.env'],
      isGlobal: true
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGODB_URI')
      }),
      inject: [ConfigService]
    }),
    SetsModule,
    CardsModule,
    GramsetsModule,
    GramcardsModule,
    AuthModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
