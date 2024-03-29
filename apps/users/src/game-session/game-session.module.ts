import { Module } from '@nestjs/common';
import { GameSessionService } from './game-session.service';
import { GameSessionRepository } from './repositories/game-session.repository';
import { DatabaseModule } from '@app/common';
import {
  GameSessionDocument,
  GameSessionSchema,
} from './models/game-session.shema';
import { JoinedPlayersService } from '../joined-player/joined-player.service';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: GameSessionDocument.name, schema: GameSessionSchema },
    ]),
  ],
  providers: [GameSessionService, GameSessionRepository, JoinedPlayersService],
  exports: [GameSessionService],
})
export class GameSessionModule {}
