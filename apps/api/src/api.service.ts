import { USERS_SERVICE } from '@app/common/constants';
import { CREATE_PLAYER, START_GAME } from '@app/common/constants/messages';
import { CreateGameSessionDto } from '@app/common/dto/create-game-session.dto';
import { PlayerDto } from '@app/common/dto/player.dto';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { catchError, tap } from 'rxjs';
import { GeneralRpcException } from '@app/common/exceptions/GeneralRpcException';
import { GeneralHttpException } from '@app/common/exceptions/GeneralHttpException';

@Injectable()
export class ApiService {
  constructor(
    @Inject(USERS_SERVICE) private readonly usersClient: ClientProxy,
  ) {
  }

  async createPlayer(playerPayload: PlayerDto) {
    return this.usersClient
      .send(CREATE_PLAYER, playerPayload)
      .pipe(tap((res) => res));
  }

  async startGameSession(gameSessionPayload: CreateGameSessionDto) {
    return this.usersClient
      .send(START_GAME, gameSessionPayload)
      .pipe(
        tap((res) => res),
        catchError((error: GeneralRpcException) => {
        throw new GeneralHttpException(error.getErrorData());
      }));
  }
}
