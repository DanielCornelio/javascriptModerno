//construir un arreglo
const numeros = [10,20,30,40,50];
console.log(numeros);

//arreglo de string (metodo alternativo)
const meses = new Array("enero", "febrero", "marzo", "abril");
console.log(meses[3]);
meses[4]="mayo";
meses.push = "junio";
console.log(meses);

//arreglo mezclado
const mezclado = ["hola", 20, false, null, true, undefined];
console.log(mezclado.length);

//comprobar si es un arreglo
console.log(Array.isArray(meses));