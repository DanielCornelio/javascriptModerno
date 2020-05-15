//recorrer arreglo con forEach

const pendientes = ["tarea", "comer", "proyecto", "aprender Js"];

for(let i = 0; i<pendientes.length; i++){
    console.log(`pendiente: ${pendientes[i]}`);
}

pendientes.forEach(function(pendiente, index){
    console.log(`${index} : ${pendiente}`)
});

console.log(pendientes.length)
//map para recorrer un arreglo de objetos

const carrito = [
    {id: 1, producto: "libro"},
    {id: 2, producto: "camisa"},
    {id: 3, producto: "guitarra"},
    {id: 4, producto: "disco"},
]

const nombreProducto = carrito.map(function(carrito){
    return carrito.producto;
})


//imprimir objeto con for

const automovil = {
    modelo:"camaro",
    motor: 6.1,
    marca: "chevrolet",
    año: 1960
}

for(let auto in automovil){
    console.log(`${auto} : ${automovil[auto]}`);
}
console.log(nombreProducto);