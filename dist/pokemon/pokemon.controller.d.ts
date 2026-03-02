import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
export declare class PokemonController {
    private readonly pokemonService;
    constructor(pokemonService: PokemonService);
    create(createPokemonDto: CreatePokemonDto): any;
    findAll(name?: string, type?: string, minHp?: string): import("./entities/pokemon.entity").Pokemon[];
    findOne(id: string): import("./entities/pokemon.entity").Pokemon | undefined;
    update(id: string, updatePokemonDto: UpdatePokemonDto): import("./entities/pokemon.entity").Pokemon | null;
    remove(id: string): import("./entities/pokemon.entity").Pokemon | null;
}
