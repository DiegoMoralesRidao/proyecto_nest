import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';

@Injectable()
export class PokemonService {
  private pokemon: Pokemon[] = [
    { id: 1, name: 'Bulbasaur', type: 'Grass', hp: 45 },
    { id: 2, name: 'Charmander', type: 'Fire', hp: 39 },
    { id: 3, name: 'Squirtle', type: 'Water', hp: 44 },
    { id: 4, name: 'Pikachu', type: 'Electric', hp: 35 },
    { id: 5, name: 'Jigglypuff', type: 'Fairy', hp: 115 },
    { id: 6, name: 'Mewtwo', type: 'Psychic', hp: 106 },
    { id: 7, name: 'Snorlax', type: 'Normal', hp: 160 },
    { id: 8, name: 'Dragonite', type: 'Dragon', hp: 91 },
    { id: 9, name: 'Lucario', type: 'Fighting', hp: 70 },
    { id: 10, name: 'Gengar', type: 'Ghost', hp: 60 },
    { id: 11, name: 'Lapras', type: 'Water', hp: 130 },
    { id: 12, name: 'Arcanine', type: 'Fire', hp: 90 },
    { id: 13, name: 'Gardevoir', type: 'Psychic', hp: 68 },
    { id: 14, name: 'Tyranitar', type: 'Rock', hp: 100 },
    { id: 15, name: 'Celebi', type: 'Grass', hp: 100 },
  ];

  create(createPokemonDto: CreatePokemonDto) {
    const newPokemon = { id: this.pokemon.length + 1, ...createPokemonDto } as any;
    this.pokemon.push(newPokemon);
    return newPokemon;
  }

  findAll(name?: string, type?: string, minHp?: number) {
    let filtered = [...this.pokemon];

    if (name) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
    }

    if (type) {
      filtered = filtered.filter(p => p.type.toLowerCase() === type.toLowerCase());
    }

    if (minHp) {
      filtered = filtered.filter(p => p.hp >= minHp);
    }

    return filtered;
  }

  findOne(id: number) {
    return this.pokemon.find(p => p.id === id);
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    const idx = this.pokemon.findIndex(p => p.id === id);
    if (idx !== -1) {
      this.pokemon[idx] = { ...this.pokemon[idx], ...updatePokemonDto } as any;
      return this.pokemon[idx];
    }
    return null;
  }

  remove(id: number) {
    const idx = this.pokemon.findIndex(p => p.id === id);
    if (idx !== -1) {
      const removed = this.pokemon.splice(idx, 1);
      return removed[0];
    }
    return null;
  }
}
