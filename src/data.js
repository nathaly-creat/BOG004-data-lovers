// estas funciones son de ejemplo

document.getElementById("btnJson").addEventListener("click", totalGhibliFilms);

function totalGhibliFilms(){
  fetch("./data/ghibli/ghibli.json")
    .then(function(res){
      return res.json();
    })
    .then(function(data){
      console.log(data);
    })
}











// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };
