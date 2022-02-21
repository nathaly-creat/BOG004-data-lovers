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

export const peopleOrden = (data) => {
  // console.log(data)
    let arrayPeople = []
    data.forEach((element) => {
      arrayPeople.push(element.people)
    });
    // arrayPeopleS.array.forEach((people, index) => {
    //   return pe    
    // });
    // console.log(".people", arrayPeople)

   let ordenado = arrayPeople.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })
    console.log("ordenado", ordenado)
  //   if (peopleOrden === "Ascendente A-Z"){
  //     return arrayPeopleS.sort();
  //   }  else if (peopleOrden === "Descendente Z-A"){
  //     return arrayPeopleS.reverse();
  //   }
      
  let reverseArray = ordenado.reverse()
  console.log('reverso', reverseArray)


   };
    
   



// export const ordenadorA-Z = (people) => {
//   people.sort();
//    console.log(people.sort());
// }


