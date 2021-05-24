// Hago la consulta a la base de datos con javascript
// Creé en firebase una base de datos online para poder enlazar un Get de forma dinámica
// creé una coleccion de productos con data de prueba (dummy data)
// en este sitio:'https://digitalsolutions-1eb5e-default-rtdb.firebaseio.com/Productos.json'

fetch('https://digitalsolutions-1eb5e-default-rtdb.firebaseio.com/Productos.json')
.then(response => response.json())
.then((data) => {
    let tr = '';
    data.forEach(element => {
        // voy concatenando cada fila de datos para mostrarlo en forma dinámica
        tr += `<tr><td>${element.articulo}</td><td>${element.categoria}</td><td>${element.deposito}</td><td>${element.nombre}</td><td>${element.stock}</td><td>${element.sucursal}</td></tr>`;
    });
    //asigno en la tabla body los datos concatenados
    document.querySelector('#table_id tbody').innerHTML = tr; //Append the data
}).catch(error => {
    console.log(error);
});