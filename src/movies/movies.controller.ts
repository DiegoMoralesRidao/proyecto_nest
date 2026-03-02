import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

// Controlador para manejar las peticiones de películas
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) { }

  // Recibe la petición para registrar una nueva película
  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  // Busca películas aplicando filtros si existen en la consulta
  @Get()
  findAll(
    @Query('title') title?: string,
    @Query('from') from?: string,
    @Query('to') to?: string,
  ) {
    return this.moviesService.findAll(title, from, to);
  }

  // Obtiene los detalles de una película por su ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moviesService.findOne(+id);
  }

  // Actualiza la información de una película específica
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.update(+id, updateMovieDto);
  }

  // Borra una película del sistema según su ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moviesService.remove(+id);
  }
}

