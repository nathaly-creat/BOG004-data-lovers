import { filterRanking, peliculasOrden} from "../src/data.js";

/* Pruebas Unitarias de filter*/
let movies = [
  {
    title: "Spirited Away",
    rt_score: "97",
  },
  {
        title: "The Cat Returns",
    rt_score: "89",
  },
  {
    title: "Castle in the Sky",
    rt_score: "95",
  },
  {
    title: "My Neighbor Totoro",
    rt_score: "93",
  },
  {
    
    title: "Kiki's Delivery Service",
    rt_score: "96",
  },
  {
    title: "Grave of the Fireflies",
    rt_score: "97",
  },
  {
    title: "Only Yesterday",
    rt_score: "100",
  },
  { 
    title: "Porco Rosso",
    rt_score: "94",
  },
  {
    title: "Pom Poko",
    rt_score: "78",
    
  },
  {
    title: "Whisper of the Heart",
    rt_score: "91",
  },
  {
    title: "Princess Mononoke",
     
    
    rt_score: "92",
    
  },
  {
    title: "My Neighbors the Yamadas",
    
      
    
    rt_score: "75",},
    
  {
    title: "Tales from Earthsea",
    
      
    
    rt_score: "41",
  },
];

let arrayRanking = [
  {
    title: "Spirited Away",
    
      
    rt_score: "97",
  },
  {
    title: "The Cat Returns",
    
     
    rt_score: "89",
    
  },
  {
    title: "Castle in the Sky",
    
     
    rt_score: "95",
  },
  {
    title: "My Neighbor Totoro",
    
      
    rt_score: "93",
  },
  {
    title: "Kiki's Delivery Service",
    
    
    rt_score: "96",
  },
  {
    title: "Grave of the Fireflies",
    
      
    
    rt_score: "97",
  },
  {
    title: "Only Yesterday",
    
     
    
    rt_score: "100",
  },
  {
    title: "Porco Rosso",
    
      
    
    rt_score: "94",
  },
  {
    title: "Whisper of the Heart",
    
      
    
    rt_score: "91",
  },
  {
    title: "Princess Mononoke",
    
     
    rt_score: "92",
  }
];

describe("filterRanking ", () => {
  it.only(" filterRanking  is a function", () => {
    expect(typeof filterRanking).toBe("function");
  });

  it.only("Deberia retornar los Rating Score de Peliculas con ponderacion mayor o igual a 83", () => {
    expect(filterRanking(movies)).toEqual(arrayRanking);
  });

  
});


/*Pruebas unitarias de SORT*/
const titleData =[
  {title: 'Castle in the Sky'},
  {title: 'Princess Mononoke'},
  {title: 'From Up on Poppy Hill'},
  {title: "Kiki's Delivery Service"}, 
  {title: 'The Cat Returns'},
  {title: 'When Marnie Was There'},
  {title: 'Whisper of the Heart'},];

  const title =[
    {title: 'Castle in the Sky'},
    {title: 'From Up on Poppy Hill'},
    {title: "Kiki's Delivery Service"}, 
    {title: 'Princess Mononoke'},
    {title: 'The Cat Returns'},
    {title: 'When Marnie Was There'},
    {title: 'Whisper of the Heart'},];

    const titleDescendente = [
      {title: 'Whisper of the Heart'},
      {title: 'When Marnie Was There'},
      {title: 'The Cat Returns'},
      {title: 'Princess Mononoke'},
      {title: "Kiki's Delivery Service"},
      {title: 'From Up on Poppy Hill'},
      {title: 'Castle in the Sky'},];

describe("peliculasOrden", () => {
  it.only(" peliculasOrden  is a function", () => {
    expect(typeof peliculasOrden).toBe("function");
  });

  it.only("Si existe en la data un array con title, retornar en orden ascendente A-Z",  () => {
    const orderA = "ascendente";
    expect(peliculasOrden(titleData, orderA)).toEqual(title);
  });

  it.only("Si existe en la data un array con title, retornar en orden descendente Z-A",  () => {
    const orderD = "descendente";
    expect(peliculasOrden(title, orderD)).toEqual(titleDescendente);
    });

  });
  








