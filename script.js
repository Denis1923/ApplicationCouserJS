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

// const 
//     a = prompt("Один из последних просмотренных фильмов?",""),
//     b = prompt("На сколько оцените его?",""),
//     c = prompt("Один из последних просмотренных фильмов?",""),
//     d = prompt("На сколько оцените его?","");

// //можно обратиться так personalMovieDB.movies.a, но тогда добавяться вместо вопроса a, c
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = b;

// console.log(personalMovieDB);

//Раздел 2: Практическая №2
// for(let i = 0; i <= personalMovieDB.count; i++)
// {
//     i = prompt("Один из последних просмотренных фильмов?","");

//     for(let j = 0; j <= personalMovieDB.count; j++)
//     {
//         personalMovieDB.movies[i] = j = prompt("На сколько оцените его?","");
//         if(j == null || personalMovieDB.movies[i].length > 50)
//         {
//             j--;
//             i--;
//             alert("либо пустая строка, либо длинна превышает 50 символов");
//         }
//     }
// }

//исправление как по курсу
for(let i = 0; i <= personalMovieDB.count; i++){
    const 
        a = prompt("Один из последних просмотренных фильмов?",""),
        b = prompt("На сколько оцените его?","");

    if(a == null || b == null || a == "" || b == "" || a.length > 50)
    {
        console.log("Error");
        
        if (i == 0) 
            i = 0;
        else 
            i--;
    }    
    else
    {
        personalMovieDB.movies[a] = b;
        console.log("Done");
    }
}

console.log(personalMovieDB);

if(personalMovieDB.count < 10)
    console.log("Просмотрено довольно мало фильмов");
else if(personalMovieDB >= 10 && personalMovieDB <= 30)
    console.log("Вы классический зритель")
else if(personalMovieDB.count > 30)
    console.log("Вы киноман");
else
    console.log("Произошла ошибка");



