const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '20');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: Boolean
};

const lastFilm = personalMovieDB.movies;
lastFilm = prompt('Один из последнних просмотренных фильмов', 'Logan');
personalMovieDB.movies.lastFilm = prompt('На сколько оцените его?', '8.1');

console.log(personalMovieDB.movies);