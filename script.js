"use strict";

//Раздел 2: Практическая №1
let numberOfFilms = +prompt("Сколько фиьмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов?",""),
    b = prompt("Один из последних просмотренных фильмов?",""),
    c = prompt("Один из последних просмотренных фильмов?",""),
    d = prompt("Один из последних просмотренных фильмов?","");

//можно обратиться так personalMovieDB.movies.a, но тогда добавяться вместо вопроса a, c
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = b;

console.log(personalMovieDB);