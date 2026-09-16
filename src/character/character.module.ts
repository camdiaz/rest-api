import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CharactersController } from './character.controller';
import { CharactersService } from './character.service';

@Module({
  imports: [HttpModule],
  controllers: [CharactersController],
  providers: [CharactersService],
})
export class CharactersModule {}