import data from "./data/ghibli/ghibli.js"
import {filterRanking, peliculasOrden, graphicsScore, getPeliculas, getRtScore} from "./data.js"


const peliculasData = data.films;
const peliculas = document.getElementById("main__header--options-button-json");
const lista = document.getElementById("main__body--peliculas-cards");
const seccionPelicula = document.getElementById("seccion-peliculas");
const seccionPersonajes = document.getElementById("seccion-personajes");
const orderPeliculas = document.getElementById("orderPeliculas")
const peliculaSeleccionada = document.getElementById("main__card--peliculas-select");
const ranking = document.getElementById("main__header-options-button-ranking");
const tRanking = document.getElementById("main__body-raking");
const flexItemFilter = document.getElementById("flex-items--filter");
const listDetalles = document.getElementById("list-personaje")
let orderSelect = document.querySelector('.orderPeliculas');
const chart = document.getElementById("rtscore-chart");
let rtScoreChart = document.getElementById("rtscore-chart").getContext("2d");

// manipulacion del dom para peliculas

const rtScoreGraph = () => {
  let graphColors = [
    "rgb(0, 142, 137)", "rgb(144, 224, 239)",
    "rgb(87, 5, 48)", "rgb(81, 18, 129)",
    "rgb(254, 251, 243)", "rgb(255, 230, 171)",
    "rgb(153, 140, 235)", "rgb(255, 24, 24)",
    "rgb(24, 77, 71)", "rgb(209, 232, 228)",
    "rgb(239, 109, 109)", "rgb(134, 198, 244)",
    "rgb(181, 254, 131)", "rgb(150, 206, 180)",
    "rgb(255, 92, 88)", "rgb(157, 157, 157)",
    "rgb(133, 244, 255)", "rgb(255, 248, 154)",
    "rgb(255, 222, 222)", "rgb(255, 223, 175)"
  ]
 
  let newChart = new Chart(rtScoreChart, {
    type: "bar",
    data:{
      labels: getPeliculas(peliculasData),
      datasets:[{
          type: "line",
          label: "promedio puntaje",
          data: Array(20).fill(graphicsScore(peliculasData)),
          backgroundColor: "black"
        }, {
        label:"puntaje",
        data: getRtScore(peliculasData),
        backgroundColor: graphColors,
        color: "#ffffff",
      }]
    },
    options: {
      indexAxis: "y"
    }
  })
  newChart;
}



const domManipulationPeliculas = () => {
  lista.style.display = "flex"
  orderPeliculas.style.display = "inline"
  tRanking.style.display = "none"
  listDetalles.style.display = "none"
  seccionPelicula.style.display = "none"
  seccionPersonajes.style.display = "none"
  flexItemFilter.style.visibility = "hidden"
  flexItemFilter.style.display = "none"
  chart.style.display = "block"
  chart.style.width = "700px"
  chart.style.height = "800px"
  // orderPeliculas.style.visibility = "visible"
} 

// manipulacion del dom para personajes
const domManipulationPersonajes = () => {
  lista.style.display = "none"
  orderPeliculas.style.display = "none" /* Con none puedo ocultar el sort de las cards peliculas*/
  seccionPersonajes.style.display = "inline"
  seccionPelicula.style.display = "inline"
  listDetalles.style.display = "flex"
  flexItemFilter.style.display = "none"
  flexItemFilter.style.visibility = "hidden"
  tRanking.style.display = "none"
  chart.style.display = "none"
}

window.onload = () => {
  flexItemFilter.style.visibility = "hidden";
  pintarPeliculas(peliculasData);
  mostrarDetalles(peliculasData);
  rtScoreGraph();
}

/**
 * pintar 
 */

 const pintarPeliculas = (data)=>{
  let template = " ";
  lista.innerHTML = "";
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
  mostrarDetalles(peliculasData)
});

// Mostrar detalles de las peliculas
const mostrarDetalles = (data) => {
  data.map(function(film, index){
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
          <b>Director:</b> ${film.director} <br>
          <b>Productor:</b> ${film.producer} <br><br>
          <b>Descripción:</b> ${film.description} <br>
          
        </p>
        
      `
      document.getElementById("list-personaje").innerHTML = "";
      getPeople.forEach((people) => {
      document.getElementById("list-personaje").innerHTML += `
        <div id="prueba" class="prueba-personajes">
          <p>
          <img  id="images" src="${people.img}"><br>
          <b> Nombre: </b> ${people.name}<br>
          <b> Género: </b> ${people.gender}<br>
          <b> Edad: </b> ${people.age}<br>
          <b> Especie: </b> ${people.specie}</br>
          </p>
        </div>`;
      })
    });
  });
}



// evento top 10 peliculas
// manipulacion del dom para top 10 peliculas
const domManipulationRanking = () => {
  tRanking.style.display = "flex"
  lista.style.display = "none"
  listDetalles.style.display = "none"
  seccionPelicula.style.display = "none"
  orderPeliculas.style.display = "none"
  flexItemFilter.style.visibility = "visible"
  flexItemFilter.style.display = "inherit"
  seccionPersonajes.style.display = "none"
  chart.style.display = "none"
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
  mostrarDetalles(peliculasData);
}

graphicsScore(data.films)