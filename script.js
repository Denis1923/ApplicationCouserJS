"use strict";

//Раздел 2: Практическая №1
let numberOfFilms = prompt("Сколько фиьмов вы уже посмотрели?", "");
let moviesOfFilms = {};
const actorsOfFilms = {};
let genresOfFilms = [];
//let privatOfFilms = false;

const personalMovieDB = {
    count: numberOfFilms,
    movies: moviesOfFilms,
    actors: actorsOfFilms,
    genres: genresOfFilms,
    privat: false
};

let lastOfFilms = prompt("Один из последних просмотренных фильмов?","");
let ratingOfFilms = prompt("На сколько оцените уго?","");

moviesOfFilms ={
    lastOfFilms :  ratingOfFilms
};

console.log(moviesOfFilms);