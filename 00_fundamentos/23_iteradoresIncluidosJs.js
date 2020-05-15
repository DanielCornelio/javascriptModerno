const ciudades = ["londres", "new york", "madrid", "paris"];
const ordenes = new Set([123,231,131, 102]);
const datos = new Map();
datos.set("nombre", "juan");
datos.set("profesion", "desarrollador web");

//entries iterador
//entries a las ciudades
// for(let entrada of ciudades.entries()){
//     console.log(entrada)
// }
// //entries para las ordenes
// for(let entradas of ordenes.entries()){
//     console.log(entradas)
// }
// for(let entradas of datos.entries()){
//     console.log(entradas)
// }
//values iterador
//values a las ciudades
// for(let entradas of ciudades.values()){
//     console.log(entradas)
// }
//key iterador

// for(let entradas of ciudades.keys()){
//     console.log(entradas)
// }



// //default iterador

// for(let entradas of ciudades){
//     console.log(entradas)
// }

const mensaje = "aprendiendo js";
for (let letra of mensaje){
    console.log(letra);
}

const enlaces = document.getElementsByTagName("a");

for(let enlace of enlaces){
    console.log(enlace.href);
}