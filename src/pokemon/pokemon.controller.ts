import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

/**
 * Controlador para manejar las peticiones relacionadas con Pokemon.
 */
@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) { }

  /**
   * Crea un nuevo Pokemon.
   * @param createPokemonDto Datos para el nuevo Pokemon.
   * @returns El Pokemon creado.
   */
  @Post()
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto);
  }

  /**
   * Obtiene todos los Pokemon, opcionalmente filtrados por nombre, tipo y HP mínimo.
   * @param name Filtro opcional por nombre.
   * @param type Filtro opcional por tipo.
   * @param minHp Filtro opcional por HP mínimo.
   * @returns Una lista de Pokemon.
   */
  @Get()
  findAll(
    @Query('name') name?: string,
    @Query('type') type?: string,
    @Query('minHp') minHp?: string,
  ) {
    return this.pokemonService.findAll(name, type, minHp ? +minHp : undefined);
  }

  /**
   * Obtiene un solo Pokemon por su ID.
   * @param id El ID del Pokemon.
   * @returns El Pokemon con el ID proporcionado.
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pokemonService.findOne(+id);
  }

  /**
   * Actualiza un Pokemon existente.
   * @param id El ID del Pokemon a actualizar.
   * @param updatePokemonDto Los datos actualizados.
   * @returns El Pokemon actualizado.
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonService.update(+id, updatePokemonDto);
  }

  /**
   * Elimina un Pokemon por su ID.
   * @param id El ID del Pokemon a eliminar.
   * @returns El Pokemon eliminado.
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pokemonService.remove(+id);
  }
}


