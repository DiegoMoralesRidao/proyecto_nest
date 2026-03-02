import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
export declare class MoviesService {
    private movies;
    create(createMovieDto: CreateMovieDto): any;
    findAll(title?: string, from?: string, to?: string): Movie[];
    findOne(id: number): Movie | undefined;
    update(id: number, updateMovieDto: UpdateMovieDto): Movie | null;
    remove(id: number): Movie | null;
}
