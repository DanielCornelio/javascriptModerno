//function declaration
function saludar(nombre){
    console.log(`Hola ${nombre}`);
}
saludar("Jose Daniel");
saludar("Miguel Angel");
saludar("Jose Arturo");

function sumar(a, b){
    console.log(a + b);
}
sumar(1,2);
sumar(3,4);

function sumar2(a, b){
    return a + b;
}   
let suma = sumar2(2,3);

console.log(suma);

function saludar2(nombre = "Visitante"){
    
    return `Hola ${nombre}`
}
let saludo = saludar2("daniel");
console.log(saludo)

//function expression

const sumas = function(a,b){
    return a + b;
}
console.log(sumas(1,2));
console.log(sumas(5,5));

const saludos = function(nombre = "daniel", edad = 30, profesion = "dev"){
    return `hola tienes ${edad} años, tu profesion es ${profesion} y te llamas ${nombre}`;
}
console.log(saludos("jose Daniel"));

//IIFE

(function(tecnologia){
    console.log("creando un IIFE " + tecnologia);
})("javascript");

//metodos de propiedad
//Cuando una funcion se pone dentro de un objeto

const musica = {
    reproducir : function(id){
        console.log("Reproduciendo musica id: " + id);
    },
    pausar : function(){
        console.log("Pausando la musica");
    }
}

//los metodos tambien se pueden guardar o crear fuera del objeto
musica.borrar = function(id){
    console.log(`Borrando musica id: ${id}`);
}
musica.reproducir(30);
musica.pausar();
musica.borrar(2);