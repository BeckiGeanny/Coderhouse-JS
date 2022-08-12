const IVA = 1.21

class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
        precioConIVA() {
            let precioFinal = this.precio * IVA
            return "$" + precioFinal
        }
        restarStock(unidades) {
            this.stock = this.stock - unidades
        }
    }

    const prod1 = new Producto("Notebook", 15000, 30)
    const prod2 = new Producto("Notebook 14 inches", 20000, 120)

    function nuevoProducto() {
        nombre = prompt("Ingrese el nombre")
        precio = prompt("Ingrese el precio")
        stock = prompt("Ingrese el stock")
        const prodNuevo = new Producto(nombre, precio, stock)
        console.log(prodNuevo)
    }

