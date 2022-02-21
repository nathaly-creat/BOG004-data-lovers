import data from "./data/ghibli/ghibli.js"
import {filterRanking, peopleOrden} from "./data.js"
const peliculasData = data.films;

// reload button HOME

document.getElementById("main__header-options-boton-reload").addEventListener("click", () =>{
  location.reload();
  
});


// Mensaje de Bienvenida
export function Saludo (){
  let welcome = document.createElement('div');
  welcome.createElement("div");
  welcome.innerHTML = `<div>
  <p> Bienvenidos a la fan Pages de Studio Ghibli</p>
  </div>`;
  document.body.appendChild(welcome);
}

export let peliculas = document.getElementById("main__header--options-button-json");
const lista = document.getElementById("main__body--peliculas-cards");
const seccionPelicula = document.getElementById("seccion-peliculas");
const seccionPersonajes = document.getElementById("seccion-personajes");
const orderCheck = document.getElementById("orderCheck")
const peliculaSeleccionada = document.getElementById("main__card--peliculas-select");


peliculas.addEventListener("click", () => {
  
  let template = "";
 
  peliculasData.forEach((obj, index) => {
    template += `
    <div id='prueba'>
    <img id='images' src='${obj.poster}'> 
    <p id = "">${obj.title}</p>
    <p>${obj.release_date}</p>
    <button id='details-${index}'>Detalles</button>
    </div>`;
  });
  lista.innerHTML = template; 
  // puedo ir por el boton y asignarle un evento
  peliculasData.map(function(film, index){
    // console.log(film,index);
    const detallesPelicula = document.getElementById('details-' + index);
    detallesPelicula.addEventListener('click', ()=>{
      let getPeople = film.people;
      // oculta peliculas menu
      lista.style.display = "none"
      // muestra seccion personajes
      orderCheck.style.display= "inline"
      seccionPersonajes.style.display = "inline"
      seccionPelicula.style.display = "inline"
      peliculaSeleccionada.innerHTML += `
        <img src="${film.poster}">
        <p>
          <b>TITLE:</b> ${film.title} <br>
          <b>DESCRIPTION:</b> ${film.description} <br>
          <b>DIRECTOR:</b> ${film.director} <br>
          <b>PRODUCER:</b> ${film.producer} <br>
        </p>
      `

      getPeople.forEach((people) => {
      document.getElementById("list-personaje").innerHTML += `
        <div id="prueba" class="prueba-personajes">
          <p>
          <b> Nombre: </b> ${people.name}<br>
          <img  id="images" src="${people.img}"><br>
          <b> Genero: </b> ${people.gender}<br>
          <b> Edad: </b> ${people.age}<br>
          <b> Especie: </b> ${people.specie}</br>
          </p>
        </div>`;
      })
    });
  });
});

// top 10 peliculas

let ranking = document.getElementById("main__header-options-button-ranking");
const tRanking = document.getElementById("main__body-raking");
const visibilitypeliculas =  document.getElementById("main__body--peliculas-cards");
// console.log(data)
ranking.addEventListener("click", () => {
  let rankingTop = filterRanking(data.films);
//  console.log(rankingTop)
// console.log(tRanking)
  rankingTop.forEach((obj) => {
      tRanking.innerHTML += `<div>
        <img src='${obj.poster}'> 
        <p>Titulo: ${obj.title}</p>
        <p>Record: ${obj.rt_score}</p>
        </div>`;
  });
  visibilitypeliculas.style.display = "none"
});

// let personajeLista = document.getElementById('list-personaje')
// // let divPersonajes = document.querySelector(".list-personaje");


// fromAToZ.addEventListener("click", () => {
//   personajesPonyo.sort();;
//   console.log(personajesPonyo);;
// // 
    
//   fromZToA.disabled = true;
// })

// fromZToA.addEventListener("click", () => {
//     personajesPonyo.sort();

//   let personajesPonyoFromAToZ = [];
//     personajesPonyoFromAToZ = personajesPonyo.sort();

//   personajesPonyoFromAToZ.reverse();
//     console.log(personajesPonyoFromAToZ);

//   fromAToZ.disabled = trues
// })
peopleOrden(peliculasData)