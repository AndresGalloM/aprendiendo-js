var objetos = {
    piedra: 'papel',
    papel: 'tijera',
    tijera: 'piedra'
}
var lista_objetos = ['piedra', 'papel', 'tijera']
var longitud_lista = lista_objetos.length - 1

var usuario = lista_objetos[Math.ceil(Math.random()*longitud_lista)]
var cpu = lista_objetos[Math.ceil(Math.random()*longitud_lista)]

console.log(usuario, cpu)

switch (cpu) {
    case usuario:
        console.log('Quedo empate');
        break;
    case objetos[usuario]:
        console.log('Gano la cpu');
        break;
    default:
        console.log('Gano el usuario');

}