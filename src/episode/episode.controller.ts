import { Controller, Get, Param, Query, ParseIntPipe } from '@nestjs/common';
import { EpisodeService } from './episode.service';

@Controller('episode')
export class EpisodeController {
  constructor(private readonly episodeService: EpisodeService) {}

    @Get()
    findAll(@Query('page') page?: string, @Query('name') name?: string) {
        const pageNum = page ? parseInt(page, 10) : 1;
        return this.episodeService.findAll(pageNum, name);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.episodeService.findOne(id);
    }
}

