import { IsNotEmpty, IsString } from 'class-validator';
import { ObjectId } from 'mongoose';
import { IPlayer } from '../../interfaces/player.interface';

export class PlayerDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
