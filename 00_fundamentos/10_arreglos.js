//construir un arreglo
const numeros = [10,20,30,40,50];
console.log(numeros);

//arreglo de string (metodo alternativo)
const meses = new Array("enero", "febrero", "marzo", "abril");
console.log(meses[3]);
//añadir al final del arreglo
meses[4]="mayo";
meses.push("junio");

//añadir al principio del arreglo
meses.unshift("mes 0");
console.log(meses);

//encontrar elemento en un arreglo
console.log(meses.indexOf("febrero"));

//eliminar elemento de arreglo
meses.pop();
//eliminar el primer elemento del arreglo
meses.shift();
//quitar un rango
meses.splice(2,1);
//revertir
meses.reverse()
console.log(meses);
//unir 2 arreglos
let arreglo=[1,2,3],
    arreglo2 = [0,9,8];
    console.log(arreglo.concat(arreglo2));
//ordenar un arreglo
const frutas = ["platano", "manzana", "fresa", "naranja"];
frutas.sort();
console.log(frutas);

//ordenar numeros
const num = [1,3,5,67,12,332,51,111];
num.sort((x,y)=>x-y);
console.log(num);

//arreglo mezclado
const mezclado = ["hola", 20, false, null, true, undefined];
console.log(mezclado.length);

//comprobar si es un arreglo
console.log(Array.isArray(meses));

