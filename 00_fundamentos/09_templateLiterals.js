const producto1 = "Pizza",
        precio1 = 30,
        producto2 = "Hamburguesa",
        precio2 = 40;

let html;

// html = '<ul>'+
//         '<li>Orden' + producto1 + '</li>' +
//         '<li>precio' + precio1 + '</li>' +
//         '<li>Orden' +  + '</li>' +
//         '<li>precio' + precio2 + '</li>' +
//         '</ul>';

html = `
        <ul>
            <li>Orden: ${producto1}</li>
            <li>precio: ${precio1}</li>
            <li>Orden: ${producto2}</li>
            <li>precio: ${precio2}</li>
            <li>total: ${precio1 + precio2}</li>
            <li>total: ${total(precio1, precio2)}</li>
        </ul>
        `;
function total(precio1, precio2){
    return precio1 + precio2
}


        document.getElementById('app').innerHTML = html;