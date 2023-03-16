var articulos = [
    {nombre: 'Bici', precio: 200000},
    {nombre: 'Patineta', precio: 80000},
    {nombre: 'Television', precio: 2000000},
    {nombre: 'Computador', precio: 3500000},
    {nombre: 'Celular', precio: 900000}
]

// filter genera un nuevo array
var articulos_filtrado = articulos.filter(function (articulo) {
    return articulo.precio < 1000000
})
// Resultado: [
//     {nombre: 'Bici', precio: 200000},
//     {nombre: 'Patineta', precio: 80000},
//     {nombre: 'Celular', precio: 900000}
// ] 


// map nos ayuda a mapear los elementos
var articulos_mapeados = articulos.map(function (articulo) {
    return articulo.nombre < 1000000
})
// Resultado: [true, true, false, false, true] 


// find nos ayuda a encontrar un elemento de una lista
var articulo_encontrado = articulos.find(function (articulo) {
    return articulo.nombre === 'Bici'
})
// Resultado: {nombre: 'Bici', precio: 200000}


// some retorna true o false si algun elemento cumple una condicion
var articuloes_some = articulos.some(function (articulo) {
    return articulo.precio < 1000000
}) 
// true


// foreach a diferencia de los demas no genera un nuevo array, solo lo recorre
articulos.forEach(function (articulo) {
    console.log(articulo.nombre)
})
// Resultado: Bici
//            Patineta
//            Television
//            Computador
//            Celular

