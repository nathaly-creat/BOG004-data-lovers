import data from "./data/ghibli/ghibli.js"
import {filterRanking, peliculasOrden} from "./data.js"
const peliculasData = data.films;

let peliculas = document.getElementById("main__header--options-button-json");
const lista = document.getElementById("main__body--peliculas-cards");
const seccionPelicula = document.getElementById("seccion-peliculas");
const seccionPersonajes = document.getElementById("seccion-personajes");
const orderPeliculas= document.getElementById("orderPeliculas")
const peliculaSeleccionada = document.getElementById("main__card--peliculas-select");

/*reload button HOME*/

document.getElementById("main__header-options-boton-reload").addEventListener("click", () =>{
  orderPeliculas.style.display= "none"
  location.reload('div');
  
});


/* Mensaje de Bienvenida*/
 let btnHome = document.getElementById('main__header-options-boton-reload');
 orderPeliculas.style.display = 'none'
 btnHome.addEventListener('click', ()=>{
  location.reload('div');
  
    let welcome = document.createElement('div');
    welcome.createElement("div");
    welcome.innerHTML = `<div>
    <p> Bienvenidos a la fan Pages de Studio Ghibli</p>
    </div>`;
    document.body.appendChild(welcome);})
 
  

peliculas.addEventListener("click", () => {
  orderPeliculas.style.display = 'inline'
  peliculas.style.display = 'inline';
  let template = " ";
 
  peliculasData.forEach((obj, index) => {
    template += `
    <div id='template--cards'>
    <img id='images' src='${obj.poster}'> 
    <p>Titulo: ${obj.title}</p>
    <p> Estreno: ${obj.release_date}</p>
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
      orderPeliculas.style.display= "none" /* Con none puedo ocultar el sort de las cards peliculas*/
      seccionPersonajes.style.display = "inline"
      seccionPelicula.style.display = "inline"
      peliculaSeleccionada.innerHTML += `
        <img src="${film.poster}">
        <p>
          <b>Título:</b> ${film.title} <br>
          <b>Descripción:</b> ${film.description} <br>
          <b>Director:</b> ${film.director} <br>
          <b>Productor:</b> ${film.producer} <br>
        </p>
      `

      getPeople.forEach((people) => {
      document.getElementById("list-personaje").innerHTML += `
        <div id="prueba" class="prueba-personajes">
          <p>
          <b> Nombre: </b> ${people.name}<br>
          <img  id="images" src="${people.img}"><br>
          <b> Género: </b> ${people.gender}<br>
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
  orderPeliculas.style.display= "none"
  let rankingTop = filterRanking(data.films);
//  console.log(rankingTop)
// console.log(tRanking)
  rankingTop.forEach((obj) => {
      tRanking.innerHTML += `
      <div class='filter-cards'>
        <img src='${obj.poster}'> 
        <p>Titulo: ${obj.title}</p>
        <p>Record: ${obj.rt_score}</p>
      </div>`;
  });
  visibilitypeliculas.style.display = "none"
});

// peliculasOrden(peliculasData);
// Manejo del Select con sort.

let orderSelect = document.querySelector('.orderPeliculas')
orderSelect.addEventListener('change', sortPeliculas)

function sortPeliculas (e){ 
  let order = e.target.value;
  let sorting =  peliculasOrden(peliculasData, order)
  //   /*OJOOOOOOOO: quiero crear en esta seccion la manipulacion del DOM que me permita revertir la posicion de las cards, en consola si se aprecia.*/

  // console.log('render1', sorting)
  return sorting; 
}





