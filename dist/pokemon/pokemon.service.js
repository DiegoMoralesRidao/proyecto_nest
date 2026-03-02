"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonService = void 0;
const common_1 = require("@nestjs/common");
let PokemonService = class PokemonService {
    pokemon = [
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
    create(createPokemonDto) {
        const newPokemon = { id: this.pokemon.length + 1, ...createPokemonDto };
        this.pokemon.push(newPokemon);
        return newPokemon;
    }
    findAll(name, type, minHp) {
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
    findOne(id) {
        return this.pokemon.find(p => p.id === id);
    }
    update(id, updatePokemonDto) {
        const idx = this.pokemon.findIndex(p => p.id === id);
        if (idx !== -1) {
            this.pokemon[idx] = { ...this.pokemon[idx], ...updatePokemonDto };
            return this.pokemon[idx];
        }
        return null;
    }
    remove(id) {
        const idx = this.pokemon.findIndex(p => p.id === id);
        if (idx !== -1) {
            const removed = this.pokemon.splice(idx, 1);
            return removed[0];
        }
        return null;
    }
};
exports.PokemonService = PokemonService;
exports.PokemonService = PokemonService = __decorate([
    (0, common_1.Injectable)()
], PokemonService);
//# sourceMappingURL=pokemon.service.js.map