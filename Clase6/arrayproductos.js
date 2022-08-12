function creoID(){
    return parseInt(Math.random() * 10000)
}

function agregarProductos() {
    let id = creoID()
    let descripcion = prompt("Ingresa el nombre del producto")
    let importe = parseInt(prompt("Ingresa el importe"))
        productos.push(new Producto(id, descripcion, importe))
        console.table(productos)
}

