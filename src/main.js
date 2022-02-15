// import { example } from './data.js';
// // import data from './data/lol/lol.js';
// // import data from './data/ghibli/ghibli.json'
// import data from './data/rickandmorty/rickandmorty.js';

// import { totalGhibliFilms } from './data.js';         
// console.log(totalGhibliFilms)

import data from "./data/ghibli/ghibli.js"
import {getPersonajes, filterRanking} from "./data.js"

export let peliculas = document.getElementById("btnJson");
const lista = document.getElementById("list-dinamic");
// let lista = document.querySelector('.lista');
peliculas.addEventListener("click", () => {
  let peliculasData = data.films;
  let template = "";
  peliculasData.forEach((obj) => {
    template += `
            <div class="cards">
            <img id='images' src='${obj.poster}'> 
            <p id = "">${obj.title}</p>
            <p>${obj.release_date}</p>
            <p>Descripción:${obj.description}</p>
            <p>Productor:${obj.producer}</p>
            <p>Director:${obj.director}</p>
            <button id='details'> Detalles</button>
            </div>     
        `;
  });

  lista.innerHTML = template; 
});

let divPersonajes = document.getElementById("div-personajes");
  document.getElementById('personajes').addEventListener('click', ()=>{
    let personajes = getPersonajes("Castle in the Sky", data)
    console.log(personajes);    
    personajes.forEach(element => {
        divPersonajes.innerHTML += `
            <li>${element.name}</li>
            <img src="${element.img}">    
        `
    });
})

let ranking = document.getElementById("botonRanking");
const tRanking = document.getElementById('tRankig_section');

ranking.addEventListener("click", () => {
  let rankingTop = filterRanking("Top");
//  console.log(rankingTop)
// console.log(tRanking)
  rankingTop.forEach((obj) => {
      tRanking.innerHTML += `<div class="cards">
        <img src='${obj.poster}'> 
        <p>Titulo: ${obj.title}</p>
        <p>Puntaje: ${obj.rt_score}</p>
        
        </div>`;
  });
});


// prueba checkbox
let fromAToZ = document.getElementById("from_A-Z")
let fromZToA = document.getElementById("from_Z-A")
let personajesPonyo = ["sosuke", "lisa", "kumiko", "ponyo"];

fromAToZ.addEventListener("click", () => {
    personajesPonyo.sort();
    console.log(personajesPonyo);

    
    
    fromZToA.disabled = true;
})

fromZToA.addEventListener("click", () => {
    personajesPonyo.sort();

    let personajesPonyoFromAToZ = [];
    personajesPonyoFromAToZ = personajesPonyo.sort();

    personajesPonyoFromAToZ.reverse();
    console.log(personajesPonyoFromAToZ);

    fromAToZ.disabled = true
})
