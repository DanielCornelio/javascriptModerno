const edad = 18;

if(edad >= 18){
    console.log("si puedes entrar al sitio");
}else{
    console.log("no puedes entrar al sitio");
}

//comprobar que una variable tiene un valor
const puntaje = 1000;
if(puntaje){
    console.log(`El puntaje fue de ${puntaje}`);
}else{
    console.log(`No hay puntaje`);
}

let efectivo = 500;
let totalCarrito = 300;

if(efectivo > totalCarrito){
    console.log("pago correcto");
}else{
    console.log(`fondos insuficientes`);
}