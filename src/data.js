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
  });
  let sumaRT = arrayVacio.reduce((a  , b) =>{
    return a += b
  }, 0);  
  
  let promedio = sumaRT / arrayVacio.length;
  console.log('promedio', promedio)

  return graphicsScore;
};

 



  // let suma = new Array(sumaRT) 
  // console.log('suma', suma)

 // function mediaCalc (arrayVacio){
//   const sumaArrayVacio = arrayVacio.reduce((a , b) =>{
//     return a = a + b}, 0);
//     console.log(sumaArrayVacio)
// console.log(mediaCalc())

// const media = sumaArrayVacio / arrayVacio.length;
// return media


