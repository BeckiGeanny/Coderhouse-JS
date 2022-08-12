const operador1 = {
    nombre: "Julian",
    apellido: "Moon",
    cargo: "Servicio Tecnico",
    ingreso: "2005-06-30"
}
const operador2 = {
    nombre: "Riley",
    apellido: "Moon",
    cargo: "IT Manager",
    ingreso: "2010-10-04"
}
// const empleado = {
//     nombre: "",
//     apellido: "",
//     cargo: "",
//     ingreso: ""
// }
function Empleado(nombre, apellido, cargo, ingreso){
        this.nombre = nombre
        this.apellido = apellido
        this.cargo = cargo
        this.ingreso = ingreso
    }

    const empleado1 = new Empleado("Riley", "Moon", "IT Manager", 2021)
    const empleado2 = new Empleado("Anna", "Moon", "General Manager", 2008)

    const IVA = 1.21

    // function Producto(nombre, precio, stock){
    //     this.nombre = nombre
    //     this.precio = precio
    //     this.stock = stock
    //     this.precioConIVA = function(){
    //         let precioFinal = this.precio * IVA
    //         return "$" + precioFinal
    //     }
    //     this.restarStock = function(unidades) {
    //         this.stock = this.stock - unidades
    //     }
    // }

    const prod1 = new Producto("Notebook", 15000, 30)
    const prod2 = new Producto("Notebook 14 inches", 20000, 120)