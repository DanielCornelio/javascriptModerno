//en js existe un objeto llamado Date

const diaHoy = new Date();

//fecha en especifico mes, dia, año
let navidad = new Date("12-25-2020");

let valor;
//mes
valor = diaHoy.getMonth();
//dia
valor = diaHoy.getDate();
valor = diaHoy.getDay();
//año
valor = diaHoy.getFullYear();
//minutos
valor = diaHoy.getMinutes();
//hora
valor = diaHoy.getHours();
//milisegundos
valor = diaHoy.getTime();

valor = diaHoy.getFullYear();
valor = diaHoy.setFullYear(2016);
valor = diaHoy.getFullYear();
console.log(valor);