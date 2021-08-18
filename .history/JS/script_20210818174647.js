const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '20');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: Boolean
};

personalMovieDB.movies = prompt('Один из последнних просмотренных фильмов', '')