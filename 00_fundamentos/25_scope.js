var a = "a";
let b = "b";
const c = "c";

//scope funcion
function funcionScope(){
    var a = "A";
    let b = "B";
    const c = "C";
    console.log("Funcion: "+ a,b,c);

}
funcionScope();

//scope de Bloque
if(true){
    var a = "AA"; //var reescribe el valor de la variable
    let b = "BB";
    const c = "CC";
    console.log("Bloque: "+ a,b,c);
}

//for
for(var a = 0; a <10; a++){
    console.log(a);
}

console.log("Globales: "+ a,b,c);