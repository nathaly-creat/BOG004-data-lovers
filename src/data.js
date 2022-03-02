// top 10
export const filterRanking = (data) => {  
  let arrayTop = data.filter(films => films.rt_score >= 83);
  arrayTop.length = 10;
  return arrayTop;
};

// sort
export const peliculasOrden = (data, order)=>{
  let titleSort = data.sort((a,z)=>{
    return (a.title > z.title)
      ? 1
      :-1;
  })
  // console.log(titleSort) 
  if(order === 'ascendente'){titleSort}
  if(order === 'descendente'){titleSort.reverse()}
 
  return titleSort;
}

// grafica
export const graphicsScore = (data) =>{
  let arrayVacio = [];
  let arrayRT = data.filter(films => films.rt_score > 40);
    arrayRT.map(function(films){
    arrayVacio.push(parseInt(films.rt_score));  
    // console.log(arrayVacio)
  });
  let sumaRT = arrayVacio.reduce((a  , b) =>{
    return a += b
  }, 0);  
  
  let promedio = sumaRT / arrayVacio.length;
  return promedio
};

export const getPeliculas = (data) => {
  let peliculas = [];
  data.forEach(element => {
    peliculas.push(element.title)
  });
  return peliculas
}

export const getRtScore = (data) => {
  let rtScore = [];
  data.forEach(element => {
    rtScore.push(parseInt(element.rt_score))
  });
  return rtScore
}



 




