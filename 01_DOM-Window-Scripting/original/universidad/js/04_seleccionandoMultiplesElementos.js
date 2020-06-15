const enlaces = document.getElementsByClassName('enlace')[3];

//css

enlaces.style.background = "#333";
enlaces.textContent="nuevo enlace";

console.log(enlaces);

const listaEnlaces = document.querySelector('ul').getElementsByClassName('enlace');

console.log(listaEnlaces);

const links = document.getElementsByTagName('a');

let enlace =  Array.from(links);

enlace.forEach(function(enlace){
    console.log(enlace.textContent)
});
console.log(links);