import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

/**
 * Controller for handling Pokemon-related requests.
 */
@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) { }

  /**
   * Creates a new Pokemon.
   * @param createPokemonDto Data for the new Pokemon.
   * @returns The created Pokemon.
   */
  @Post()
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto);
  }

  /**
   * Retrieves all Pokemon, optionally filtered by name, type, and minimum HP.
   * @param name Optional name filter.
   * @param type Optional type filter.
   * @param minHp Optional minimum HP filter.
   * @returns A list of Pokemon.
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
   * Retrieves a single Pokemon by its ID.
   * @param id The ID of the Pokemon.
   * @returns The Pokemon with the given ID.
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pokemonService.findOne(+id);
  }

  /**
   * Updates an existing Pokemon.
   * @param id The ID of the Pokemon to update.
   * @param updatePokemonDto The updated data.
   * @returns The updated Pokemon.
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonService.update(+id, updatePokemonDto);
  }

  /**
   * Deletes a Pokemon by its ID.
   * @param id The ID of the Pokemon to delete.
   * @returns The deleted Pokemon.
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pokemonService.remove(+id);
  }
}

