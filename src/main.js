import data from "./data/ghibli/ghibli.js"
import {filterRanking} from "./data.js"


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

export let peliculas = document.getElementById("main__header--options-boton-json");
const lista = document.getElementById("main__body--peliculas-cards");
peliculas.addEventListener("click", () => {
  let peliculasData = data.films;
  let template = "";
  peliculasData.forEach((obj, index) => {
    template += `
            <div class='prueba'>
              <img id='images' src='${obj.poster}'> 
              <p id = "">${obj.title}</p>
              <p>${obj.release_date}</p>
              <button id='details-${index}'>Detalles</button>
            </div>`;
  });
  lista.innerHTML = template; 
  // puedo ir por el boton y asignarle un evento
  
peliculasData.map(function(film, index){
  console.log(film,index);
    const detallesPelicula = document.getElementById('details-'+index);
    detallesPelicula.addEventListener('click', ()=>{
     
      let x = film.people;
      x.forEach((people) =>{
        document.getElementById("list-personaje").innerHTML += 
      `<div>
          <p>${people.name}</p>
      <img src="${people.img}">
      </div>
      `;
      })
      
      
    });
  });
});





//   peliculasData.forEach((film, index) => {
//     const detallesPelicula = document.getElementById('details-'+index);
//     detallesPelicula.addEventListener('click', ()=>{
//       console.log(film);
      
//       document.getElementById("list-personaje").textContent += 
//       `<div>
//           <li>${film.people[index]}</li>
//       <img src="${film.people[index]}"> </div>
//       `;
      
//     });
//   });
 




let ranking = document.getElementById("main__header-options-boton-ranking");
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



//  personajes
// let detallePelicula = document.getElementById('details');
// let personajeLista = document.getElementById('list-personaje')
// // let divPersonajes = document.querySelector(".list-personaje");
// detallePelicula.addEventListener('click', ()=>{

//   let peoplesTotal = filterPeople(data.films);
//   peoplesTotal.forEach((obj) => {
//     personajeLista.innerHTML += `<div>
//     <li>${obj.name}</li>
// <img src="${obj.img}"> </div>
// `;

//   })
// });



// let divPersonajes = document.getElementById("div-personajes");
//   document.getElementById('personajes').addEventListener('click', ()=>{
//     let personajes = getPersonajes("Castle in the Sky", data)
//     // console.log(personajes);    
//     personajes.forEach(element =>{  
//         divPersonajes.innerHTML += `
//             <li>${element.name}</li>
//             <img src="${element.img}">    
//         `
//     })
//   });


// // prueba checkbox
// let fromAToZ = document.getElementById("from_A-Z")
// let fromZToA = document.getElementById("from_Z-A")
// let personajesPonyo = ["sosuke", "lisa", "kumiko", "ponyo"];

// fromAToZ.addEventListener("click", () => {
//     personajesPonyo.sort();
//     console.log(personajesPonyo);

    
//     fromZToA.disabled = true;
// })

// fromZToA.addEventListener("click", () => {
//     personajesPonyo.sort();

//     let personajesPonyoFromAToZ = [];
//     personajesPonyoFromAToZ = personajesPonyo.sort();

//     personajesPonyoFromAToZ.reverse();
//     console.log(personajesPonyoFromAToZ);

//     fromAToZ.disabled = true
// })
