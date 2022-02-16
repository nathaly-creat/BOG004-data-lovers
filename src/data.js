// import data from "./data/ghibli/ghibli.js";

export const filterRanking = (data) => {  
  console.log(data);
  let arrayTop = data.filter(film => film.rt_score >= 83);
  // console.log('arraytop antes: ', arrayTop);
  arrayTop.length = 10;
  // console.log('arraytop 10: ', arrayTop);
  return arrayTop;

};

// export const getPersonajes = (title, data) => {
//   let lengthPersonajes = data.films.length

//   for( let i = 0; i < lengthPersonajes; i++){
//     if( data.films[i].title == title){
//       return data.films[i].people
//     }
//   }
// };
