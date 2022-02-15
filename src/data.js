// estas funciones son de ejemplo

// // export const example = () => {
// //   return 'example';
// // };

// // export const anotherExample = () => {
// //   return 'OMG';
// // };
import data from "./data/ghibli/ghibli.js";

export const filterRanking = (rankingScore) => {  
  let tipeRanking = rankingScore; 
    // let ranking = () => {
    if(tipeRanking === 'Top'){
      let arrayTop = data.films.filter(films => Number(films.rt_score) >= 83);
       return arrayTop;
    }else{
      let arrayNoTop = data.films.filter(films => Number(films.rt_score) < 83);
      return arrayNoTop;
    }
   
 
};

export const getPersonajes = (title, data) => {
  let lengthPersonajes = data.films.length

  for( let i = 0; i < lengthPersonajes; i++){
    if( data.films[i].title == title){
      return data.films[i].people
    }
  }
};
