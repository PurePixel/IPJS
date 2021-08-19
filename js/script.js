const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// let lastFilm, lastFilm2 = personalMovieDB.movies;
// lastFilm = prompt('Один из последнних просмотренных фильмов', 'Logan');
// personalMovieDB.movies[lastFilm] = prompt('На сколько оцените его?', '8.1');
// lastFilm2 = prompt('Один из последнних просмотренных фильмов', 'Konan');
// personalMovieDB.movies[lastFilm2] = prompt('На сколько оцените его?', '9.1');

// const a = prompt('Один из последнних просмотренных фильмов', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последнних просмотренных фильмов', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

if(personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман!');
} else {
    console.log('Произошла ошибка');
}

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последнних просмотренных фильмов', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
    } else {
              console.log('error');
              i--;
    }
}



console.log(personalMovieDB);