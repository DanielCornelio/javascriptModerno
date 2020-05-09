let hora = 20;

if(hora > 0 && hora <= 10){
    console.log("buenos dias");
}else if(hora > 10 && hora <= 18){
    console.log("buenas tardes");
}else if(hora > 18 && hora <= 24){
    console.log("buenas noches");
}else{
    console.log("Hora no valida");
}

let efectivo = 300,
    credito = 300,
    disponible = efectivo + credito,
    totalCarrito = 500;

if(totalCarrito < efectivo || totalCarrito < credito){
    console.log("puedo pagar");
}else if(totalCarrito < disponible){
    console.log("pague con ambos");
}else{
    console.log("no puedo pagar");
}

const logueado = true;
console.log(logueado === true? "si se logueo": "no estas logueado")