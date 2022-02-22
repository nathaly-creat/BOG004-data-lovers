// import data from "./data/ghibli/ghibli.js";

export const filterRanking = (data) => {  
  let arrayTop = data.filter(films => films.rt_score >= 83);
  arrayTop.length = 10;
  return arrayTop;

 
};

export const getPersonajes = (title, data) => {
  // let lengthPersonajes = data.films.length
  data.filter(films => {
    return films.title == title ? films.people : null
  })

};


export const peliculasOrden = (data,order)=>{
  let titleSort = data.sort((a,z)=>{
    return (a.title > z.title) ? 1:-1
  })
  // console.log(titleSort) 
  if(order === 'ascendente'){titleSort}
  if(order === 'descendente'){titleSort.reverse()}
 
  return titleSort;
}




