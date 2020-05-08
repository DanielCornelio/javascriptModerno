
try{
    algo();
}catch(error){
    console.log(error);
}finally{
    console.log("no le importa, ejecuta de todos modos")
}


obtenerClientes();
function obtenerClientes(){
    console.log("Descargando...");
    setTimeout(function(){
        console.log("Completo")
    },3000)
}
