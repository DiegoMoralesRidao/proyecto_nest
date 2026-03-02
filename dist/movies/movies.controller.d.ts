import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
export declare class MoviesController {
    private readonly moviesService;
    constructor(moviesService: MoviesService);
    create(createMovieDto: CreateMovieDto): any;
    findAll(title?: string, from?: string, to?: string): import("./entities/movie.entity").Movie[];
    findOne(id: string): import("./entities/movie.entity").Movie | undefined;
    update(id: string, updateMovieDto: UpdateMovieDto): import("./entities/movie.entity").Movie | null;
    remove(id: string): import("./entities/movie.entity").Movie | null;
}
