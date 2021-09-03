const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            alert('Введите число');
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
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
    },
    personalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман!');
        } else {
            console.log('Произошла ошибка');
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    },
    writeYourGenres: function () {

        for (let i = 0; i < 1; i++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);

            // if (genre === '' || genre == null) {
            //     console.log('Введите корректные данные');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i] = genre;
            // }
            let genres = prompt(`введите ваши любимые жанры через запятую`).toLowerCase();
            if (genres === '' || genres == null) {
                    console.log('Введите корректные данные');
                    i--;
                } else {
                    personalMovieDB.genres = genres.split(', ');
                    personalMovieDB.genres.sort();
                }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    showMyDB: function () {
        if (personalMovieDB.private === false) {
            console.log(personalMovieDB);
        }
    }
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

// function showMyDB(hidden) {
//     if(!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB);