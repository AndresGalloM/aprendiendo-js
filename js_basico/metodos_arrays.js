var articulos = [
    {nombre: 'Bici', precio: 200000},
    {nombre: 'Patineta', precio: 80000},
    {nombre: 'Television', precio: 2000000},
    {nombre: 'Computador', precio: 3500000},
    {nombre: 'Celular', precio: 900000}
]

// Filter genera un nuevo array
var articulos_filtrado = articulos.filter(function (articulo) {
    return articulo.precio < 1000000
})
// Resultado: [
//     {nombre: 'Bici', precio: 200000},
//     {nombre: 'Patineta', precio: 80000},
//     {nombre: 'Celular', precio: 900000}
// ] 


// Nos ayuda a mapear los elementos
var articulos_mapeados = articulos.map(function (articulo) {
    return articulo.nombre < 1000000
})
// Resultado: [true, true, false, false, true] 