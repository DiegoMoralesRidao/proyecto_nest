import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';
export declare class PokemonService {
    private pokemon;
    create(createPokemonDto: CreatePokemonDto): any;
    findAll(name?: string, type?: string, minHp?: number): Pokemon[];
    findOne(id: number): Pokemon | undefined;
    update(id: number, updatePokemonDto: UpdatePokemonDto): Pokemon | null;
    remove(id: number): Pokemon | null;
}
