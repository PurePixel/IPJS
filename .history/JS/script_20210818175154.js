const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '20');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: Boolean
};

let lastFilm = personalMovieDB.movies;
lastFim = prompt('Один из последнних просмотренных фильмов', '');
personalMovieDB.movies.lastFilm = prompt('На сколько оцените его?', '');