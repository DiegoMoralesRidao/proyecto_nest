import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

// Servicio para gestionar los datos y lógica de las películas
@Injectable()
export class MoviesService {
  private movies: Movie[] = [
    { id: 1, title: 'Inception', releaseDate: new Date('2010-07-16') },
    { id: 2, title: 'Interstellar', releaseDate: new Date('2014-11-07') },
    { id: 3, title: 'The Prestige', releaseDate: new Date('2006-10-20') },
    { id: 4, title: 'Memento', releaseDate: new Date('2001-05-25') },
    { id: 5, title: 'The Dark Knight', releaseDate: new Date('2008-07-18') },
  ];

  // Crea una nueva película y la añade a la lista
  create(createMovieDto: CreateMovieDto) {
    const newMovie = { id: this.movies.length + 1, ...createMovieDto, releaseDate: new Date(createMovieDto.releaseDate) } as any;
    this.movies.push(newMovie);
    return newMovie;
  }

  // Devuelve las películas filtradas por título o fecha si se requiere
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

  // Busca una película por su identificador único
  findOne(id: number) {
    return this.movies.find(m => m.id === id);
  }

  // Modifica los datos de una película por su ID
  update(id: number, updateMovieDto: UpdateMovieDto) {
    const idx = this.movies.findIndex(m => m.id === id);
    if (idx !== -1) {
      this.movies[idx] = { ...this.movies[idx], ...updateMovieDto } as any;
      return this.movies[idx];
    }
    return null;
  }

  // Quita una película de la lista permanentemente
  remove(id: number) {
    const idx = this.movies.findIndex(m => m.id === id);
    if (idx !== -1) {
      const removed = this.movies.splice(idx, 1);
      return removed[0];
    }
    return null;
  }
}



