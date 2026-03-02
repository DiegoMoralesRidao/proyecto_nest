"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesService = void 0;
const common_1 = require("@nestjs/common");
let MoviesService = class MoviesService {
    movies = [
        { id: 1, title: 'Inception', releaseDate: new Date('2010-07-16') },
        { id: 2, title: 'Interstellar', releaseDate: new Date('2014-11-07') },
        { id: 3, title: 'The Prestige', releaseDate: new Date('2006-10-20') },
        { id: 4, title: 'Memento', releaseDate: new Date('2001-05-25') },
        { id: 5, title: 'The Dark Knight', releaseDate: new Date('2008-07-18') },
    ];
    create(createMovieDto) {
        const newMovie = { id: this.movies.length + 1, ...createMovieDto, releaseDate: new Date(createMovieDto.releaseDate) };
        this.movies.push(newMovie);
        return newMovie;
    }
    findAll(title, from, to) {
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
    findOne(id) {
        return this.movies.find(m => m.id === id);
    }
    update(id, updateMovieDto) {
        const idx = this.movies.findIndex(m => m.id === id);
        if (idx !== -1) {
            this.movies[idx] = { ...this.movies[idx], ...updateMovieDto };
            return this.movies[idx];
        }
        return null;
    }
    remove(id) {
        const idx = this.movies.findIndex(m => m.id === id);
        if (idx !== -1) {
            const removed = this.movies.splice(idx, 1);
            return removed[0];
        }
        return null;
    }
};
exports.MoviesService = MoviesService;
exports.MoviesService = MoviesService = __decorate([
    (0, common_1.Injectable)()
], MoviesService);
//# sourceMappingURL=movies.service.js.map