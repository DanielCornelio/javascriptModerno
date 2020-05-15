//querySelector
//querySelector puede seleccionar id, class, tag, pero solo regresa el 1ro que encuentre
const encabezado = document.querySelector('#encabezado');
    encabezado.style.background="#333";
    encabezado.style.color="#fff";
    encabezado.style.padding="20px";
    //cambiar texto
    encabezado.textContent="Los mejores cursos"

    console.log(encabezado)

let enlace;
enlace=document.querySelector("#principal a:first-child");
enlace=document.querySelector("#principal a:last-child");
enlace=document.querySelector("#principal a:nth-child(3)");



console.log(enlace);