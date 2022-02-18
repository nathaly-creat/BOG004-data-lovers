// import data from "./data/ghibli/ghibli.js";

export const filterRanking = (data) => {  
  let arrayTop = data.filter(film => film.rt_score >= 83);
  arrayTop.length = 10;
  return arrayTop;

 
};



export const getPersonajes = (title, data) => {
  let lengthPersonajes = data.films.length
  
  for( let i = 0; i < lengthPersonajes; i++){
    if( data.films[i].title == title){
      return data.films[i].people
    }
  }
};
