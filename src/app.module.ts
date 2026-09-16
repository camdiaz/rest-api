import { Module } from '@nestjs/common';
import { CharactersModule } from './character/character.module';
import { LocationModule } from './location/location.module';
import { EpisodeModule } from './episode/episode.module';

@Module({
  imports: [
    CharactersModule,
    LocationModule,
    EpisodeModule,
  ],
})
export class AppModule {}