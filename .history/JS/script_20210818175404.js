const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '20');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: Boolean
};

let lastFilm = personalMovieDB.movies;
lastFilm = prompt('Один из последнних просмотренных фильмов', 'Lo');
personalMovieDB.movies.lastFilm = prompt('На сколько оцените его?', '');
