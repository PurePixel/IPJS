const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '20');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: Boolean
};

let lastFilm = personalMovieDB.movies,
    lastFilm2 = personalMovieDB.movies;
lastFilm = prompt('Один из последнних просмотренных фильмов', 'Logan');
personalMovieDB.movies[lastFilm] = prompt('На сколько оцените его?', '8.1');
lastFilm2 = prompt('Один из последнних просмотренных фильмов', 'Koan');
personalMovieDB.movies[lastFilm2] = prompt('На сколько оцените его?', '8.1');

console.log(personalMovieDB.movies);