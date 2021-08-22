let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        alert('Введите число');
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function personalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман!');
    } else {
        console.log('Произошла ошибка');
    }
}

personalLevel();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последнних просмотренных фильмов', ''),
              b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            alert('Не правильно');
            i--;
        }
    }
}

rememberMyFilms();

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


// let i = 0;
// while (i < 2) {
//     const a = prompt('Один из последнних просмотренных фильмов', ''),
//         b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('good');
//         i++;
//     } else {
//         console.log('error');
//         console.log(personalMovieDB);
//         i--;
//     }
// }

// let i = 0;
// do {
//     const a = prompt('Один из последнних просмотренных фильмов', ''),
//         b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         i++;
//     } else {
//         alert('Error');
//         console.log(personalMovieDB);
//         i--;
//     }
// } while (i < 2);

function writeYourGenres() {

    for (let i = 0; i < 3; i++) {

        if (personalMovieDB.genres[i] != '') {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр номер ${i + 1}`, '');
        } else {
            alert('Введите название жанра');
            i--;
        }
    }
}

writeYourGenres();

// function showMyDB(hidden) {
//     if(!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB);

function showMyDB() {
    if (personalMovieDB.private === false) {
        console.log(personalMovieDB);
    }
}

showMyDB();