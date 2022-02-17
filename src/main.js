import data from "./data/ghibli/ghibli.js"
import {filterRanking} from "./data.js"

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
  peliculasData.forEach((obj) => {
    template += `
            <div class='prueba'>
              <img id='images' src='${obj.poster}'> 
              <p id = "">${obj.title}</p>
              <p>${obj.release_date}</p>
              
              <button id='details'> Detalles</button>
            </div>     
        `;
  });

  lista.innerHTML = template; 
});

// let divPersonajes = document.getElementById("div-personajes");
//   document.getElementById('personajes').addEventListener('click', ()=>{
//     let personajes = getPersonajes("Castle in the Sky", data)
//     console.log(personajes);    
//     personajes.forEach(element => 
//         divPersonajes.innerHTML += `
//             <li>${element.name}</li>
//             <img src="${element.img}">    
//         `
//     })
// };



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


// reload button HOME

document.getElementById("main__header-options-boton-reload").addEventListener("click", () =>{
    location.reload();
    
});





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
