const numero1 = "50";
const numero2 = 10;
const numero3 = "tres";

console.log(numero1 + numero2);
console.log(Number(numero1) + numero2);
console.log(parseInt(numero1) + numero2);

console.log(typeof parseInt(numero1));
console.log(typeof parseInt(numero3)); //realmente es NaN

let dato;
dato = Number("20");
dato = Number("20.22033");
dato = Number(true);
dato = Number(false);
dato = Number(null);
dato = Number(undefined);
dato = Number("Hola");
dato = Number([1,2,3,4]);

dato = parseInt("100");
dato = parseFloat("100");
dato = parseFloat("100.2030");
dato = parseInt("100.2030");

//toFixed

dato = 155151.2648878;

console.log(parseFloat(dato).toFixed(2));