import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.movieService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') movieID: string): Movie {
    return this.movieService.getOne(movieID);
  }

  @Post()
  create(@Body() movieData) {
    return this.movieService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieID: string) {
    return this.movieService.deleteOne(movieID);
  }

  @Patch(':id')
  path(@Param('id') movieID: string, @Body() updateData) {
    return this.movieService.update(movieID, updateData);
  }
}
