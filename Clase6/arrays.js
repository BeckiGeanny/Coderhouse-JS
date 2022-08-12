function listarPaises() {
    
    for (let i = 0; i < paises.length; i++){
    console.log(paises[i])
    }
}

function agregarPais() {
    let nuevoPais = prompt("Ingresa el nuevo pais:")
    paises.push(nuevoPais)
}

function quitarPais() {
    let aQuitar = (prompt("Ingrese el pais a quitar"))
    let indice = paises.indexOf(aQuitar)
    if (indice !== -1) {
        let resultado = paises.splice(indice, 1)
    console.warn("Se ha eliminado el pais", resultado)
    } else {
        console.error("No seh ha econtrado el pais", aQuitar)
    }
}