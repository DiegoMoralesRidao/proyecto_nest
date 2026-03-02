import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

/**
 * Service for managing movies data.
 */
@Injectable()
export class MoviesService {
  private movies: Movie[] = [
    { id: 1, title: 'Inception', releaseDate: new Date('2010-07-16') },
    { id: 2, title: 'Interstellar', releaseDate: new Date('2014-11-07') },
    { id: 3, title: 'The Prestige', releaseDate: new Date('2006-10-20') },
    { id: 4, title: 'Memento', releaseDate: new Date('2001-05-25') },
    { id: 5, title: 'The Dark Knight', releaseDate: new Date('2008-07-18') },
  ];

  /**
   * Creates a new movie.
   * @param createMovieDto Data for the new movie.
   * @returns The created movie.
   */
  create(createMovieDto: CreateMovieDto) {
    const newMovie = { id: this.movies.length + 1, ...createMovieDto, releaseDate: new Date(createMovieDto.releaseDate) } as any;
    this.movies.push(newMovie);
    return newMovie;
  }

  /**
   * Retrieves movies, optionally filtered by title and date range.
   * @param title Optional title filter.
   * @param from Optional start date filter.
   * @param to Optional end date filter.
   * @returns A filtered list of movies.
   */
  findAll(title?: string, from?: string, to?: string) {
    let filtered = [...this.movies];

    if (title) {
      filtered = filtered.filter(m => m.title.toLowerCase().includes(title.toLowerCase()));
    }

    if (from) {
      const fromDate = new Date(from);
      filtered = filtered.filter(m => m.releaseDate >= fromDate);
    }

    if (to) {
      const toDate = new Date(to);
      filtered = filtered.filter(m => m.releaseDate <= toDate);
    }

    return filtered;
  }

  /**
   * Finds a single movie by its ID.
   * @param id The ID of the movie.
   * @returns The movie found, or undefined.
   */
  findOne(id: number) {
    return this.movies.find(m => m.id === id);
  }

  /**
   * Updates an existing movie's data.
   * @param id The ID of the movie to update.
   * @param updateMovieDto The updated data.
   * @returns The updated movie, or null if not found.
   */
  update(id: number, updateMovieDto: UpdateMovieDto) {
    const idx = this.movies.findIndex(m => m.id === id);
    if (idx !== -1) {
      this.movies[idx] = { ...this.movies[idx], ...updateMovieDto } as any;
      return this.movies[idx];
    }
    return null;
  }

  /**
   * Removes a movie by its ID.
   * @param id The ID of the movie to remove.
   * @returns The removed movie, or null if not found.
   */
  remove(id: number) {
    const idx = this.movies.findIndex(m => m.id === id);
    if (idx !== -1) {
      const removed = this.movies.splice(idx, 1);
      return removed[0];
    }
    return null;
  }
}

