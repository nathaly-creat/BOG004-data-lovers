import data from "./data/ghibli/ghibli.js"
import {filterRanking, peliculasOrden} from "./data.js"

const peliculasData = data.films;
const peliculas = document.getElementById("main__header--options-button-json");
const lista = document.getElementById("main__body--peliculas-cards");
const seccionPelicula = document.getElementById("seccion-peliculas");
const seccionPersonajes = document.getElementById("seccion-personajes");
const orderPeliculas= document.getElementById("orderPeliculas")
const peliculaSeleccionada = document.getElementById("main__card--peliculas-select");
const ranking = document.getElementById("main__header-options-button-ranking");
const tRanking = document.getElementById("main__body-raking");
let orderSelect = document.querySelector('.orderPeliculas')

// manipulacion del dom para peliculas
const domManipulationPeliculas = () => {
  lista.style.display = "flex"
  orderPeliculas.style.display = 'inline'
  tRanking.style.display = "none"
}

// manipulacion del dom para personajes
const domManipulationPersonajes = () => {
  lista.style.display = "none"
  orderPeliculas.style.display= "none" /* Con none puedo ocultar el sort de las cards peliculas*/
  seccionPersonajes.style.display = "inline"
  seccionPelicula.style.display = "inline"  
}
 
/**
 * pintar 
 */

 const pintarPeliculas = (data)=>{
  let template = " ";
  data.forEach((obj, index) => {
    template += `
    <div id='template--cards'>
    <img id='images' src='${obj.poster}'> 
    <p>Titulo: ${obj.title}</p>
    <p> Estreno: ${obj.release_date}</p>
    <button id='details-${index}'>Detalles</button>
    </div>`;
  });

  lista.innerHTML = template; 
}


// evento peliculas
peliculas.addEventListener("click", () => {
  domManipulationPeliculas()

  pintarPeliculas(peliculasData)
  // puedo ir por el boton y asignarle un evento
  peliculasData.map(function(film, index){
    const detallesPelicula = document.getElementById('details-' + index);
    // evento detalles
    detallesPelicula.addEventListener('click', ()=>{
      let getPeople = film.people;
      
      domManipulationPersonajes()
      peliculaSeleccionada.innerHTML = "";
      peliculaSeleccionada.innerHTML += `
        <img src="${film.poster}">
        <p>
          <b>Título:</b> ${film.title} <br>
          <b>Descripción:</b> ${film.description} <br>
          <b>Director:</b> ${film.director} <br>
          <b>Productor:</b> ${film.producer} <br>
        </p>
      `

      document.getElementById("list-personaje").innerHTML = "";
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



// evento top 10 peliculas
// manipulacion del dom para top 10 peliculas
const domManipulationRanking = () => {
  tRanking.style.display = "inline"
  lista.style.display = "none"
  orderPeliculas.style.display= "none"
}
 
ranking.addEventListener("click", () => {
  domManipulationRanking()
  let rankingTop = filterRanking(data.films);
  tRanking.innerHTML = ""
  rankingTop.forEach((obj) => {
      tRanking.innerHTML += `
      <div class='filter-cards'>
        <img src='${obj.poster}'> 
        <p>Titulo: ${obj.title}</p>
        <p>Record: ${obj.rt_score}</p>
      </div>`;
  });
});

// Manejo del Select con sort.
orderSelect.addEventListener('change', sortPeliculas)
function sortPeliculas (e){ 
  let order = e.target.value;
  let sorting =  peliculasOrden(peliculasData, order)
  pintarPeliculas(sorting)
}


