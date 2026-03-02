import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

// Controlador para gestionar las peticiones de Pokemon
@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) { }

  // Crea un nuevo Pokemon en la base de datos
  @Post()
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto);
  }

  // Obtiene la lista de Pokemon con filtros opcionales
  @Get()
  findAll(
    @Query('name') name?: string,
    @Query('type') type?: string,
    @Query('minHp') minHp?: string,
  ) {
    return this.pokemonService.findAll(name, type, minHp ? +minHp : undefined);
  }

  // Busca un Pokemon específico por su ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pokemonService.findOne(+id);
  }

  // Actualiza los datos de un Pokemon existente
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonService.update(+id, updatePokemonDto);
  }

  // Elimina un Pokemon del sistema por su ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pokemonService.remove(+id);
  }
}



