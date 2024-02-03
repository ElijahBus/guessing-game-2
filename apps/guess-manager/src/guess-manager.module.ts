import { Module } from '@nestjs/common';
import { GuessManagerController } from './guess-manager.controller';
import { GuessManagerService } from './guess-manager.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGO_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
    }),
  ],
  controllers: [GuessManagerController],
  providers: [GuessManagerService],
})
export class GuessManagerModule {}