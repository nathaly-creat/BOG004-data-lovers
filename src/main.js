import data from "./data/ghibli/ghibli.js"
import {filterRanking, peliculasOrden, graphicsScore} from "./data.js"
// import Chart from "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js" // consultar sobre la ruta



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
let orderSelect = document.querySelector('.orderPeliculas')
// let datoCurioso = document.getElementById('promedio')

// manipulacion del dom para peliculas
const domManipulationPeliculas = () => {
  lista.style.display = "flex"
  orderPeliculas.style.display = "inline"
  tRanking.style.display = "none"
  listDetalles.style.display = "none"
  seccionPelicula.style.display = "none"
  seccionPersonajes.style.display = "none"
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
  tRanking.style.display = "grid" //pendiente era inline OJOOOOOOOOOO
}

window.onload = () => {
  flexItemFilter.style.visibility = "hidden";
  pintarPeliculas(peliculasData);
  mostrarDetalles(peliculasData);
  graphicsScore(data.films)
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
  tRanking.style.display = "flex" // modificando decia display inline
  lista.style.display = "none"
  listDetalles.style.display = "none"
  seccionPelicula.style.display = "none"
  orderPeliculas.style.display = "none"
  flexItemFilter.style.visibility = "visible"
  flexItemFilter.style.display = "inherit"
  seccionPersonajes.style.display = "none"
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

// /* COMPUTE*/
// let curioso = graphicsScore(data.films);
// curioso.innerHTML = '';
// datoCurioso.innerHTML =`
//         <h2>DATO CURIOSO GHIBLI</h2>
//         <p class = 'text'>Sabias que de todas estas películas el promedio de Score es de 88.8 puntos</p>`

graphicsScore(data.films)

// const graficas = () => {
// let Chart;
// const ctx = document.getElementById('myChart').getContext('2d');
// Chart.defaults.global.defaultFontColor = 'rgba(255, 102, 132, 0.2)';
// const myChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//       labels: [95, 93, 96, 97, 100, 94, 78, 91, 92, 75, 97, 89, 87, 41, 92, 95, 83, 89, 100, 92],
//       datasets: [{
//           label: 'Rating Score',
//           data: [95, 93, 96, 97, 100, 94, 78, 91, 92, 75, 97, 89, 87, 41, 92, 95, 83, 89, 100, 92],
//           backgroundColor: [
//               'rgba(255, 99, 132, 0.2)',
//               ],
//           borderColor: [
//               'rgba(255, 99, 132, 1)',
//               ],
//           borderWidth: 2
//       }]
//   },
//   options: {
//       scales: {
//           y: {
//               beginAtZero: true
//           }
//       }
//   }
// });
// console.table(myChart)
// }
// graficas();
