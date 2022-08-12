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

function generadorAutomatico() {
    productos.push(new Producto(1234, "NOTEBOOK EXO E17", 29950))
    productos.push(new Producto(2345, "MACBOOK AIR 13", 249900))
    productos.push(new Producto(3456, "LENOVO IDEAPAD 13", 199949))
    productos.push(new Producto(4567, "IPAD PRO 12", 219890))
    productos.push(new Producto(5678, "LENOVO GAMER 15", 409090))
    productos.push(new Producto(6789, "MACBOOK PRO 15", 459000))
    productos.push(new Producto(7890, "ASUS GAMING PRO 17", 679800))
    productos.push(new Producto(8901, "IPAD MINI 7.9", 189900))}
    
function generarCarrito() {
    carrito.push(new Producto(1234, "NOTEBOOK EXO E17", 29950))
    carrito.push(new Producto(2345, "MACBOOK AIR 13", 249900))
    carrito.push(new Producto(3456, "LENOVO IDEAPAD 13", 199949))
}
generadorAutomatico()
generarCarrito()

function recorrerElementos() {
    for (let producto of productos) {
    console.table(producto)
    }
}

function recorrerProductos() {
    productos.forEach(element => {
        console.table(element)
        
    });
}

function buscarProducto() {
    let prod = prompt("Ingresa el producto a buscar")
    const resultado = productos.find(element => {
        return element.nombre === prod
    })
    console.table(resultado)
}

function filtrarProducto() {
    let prod = prompt("Ingresa el termino a buscar")
    const resultado = productos.filter(element => element.nombre.includes(prod))
    console.table(resultado)
}

function calcularCarrito() {
   let total = carrito.reduce((acumulador, producto) =>acumulador + producto.importe, 0)
    console.log("Total a pagar", total)
}