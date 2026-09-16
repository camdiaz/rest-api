import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { EpisodeController } from './episode.controller';
import { EpisodeService } from './episode.service';

@Module({
  imports: [HttpModule],
  controllers: [EpisodeController],
  providers: [EpisodeService],
})
export class EpisodeModule {}