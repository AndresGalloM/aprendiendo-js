var edad = 18;

if (edad === 18) {
    console.log('Puedes votar, sera tu primera votación');
} else if (edad > 18) {
    console.log('Puedes votar');
} else {
    console.log('No puedes votar');
}

// ternario
resultado = edad >= 18 ? 'Puedes votar' : 'No puedes votar';

var objetos = {
    piedra: 'papel',
    papel: 'tijera',
    tijera: 'piedra'
}
var lista_objetos = ['piedra', 'papel', 'tijera']
var longitud_lista = lista_objetos.length - 1

function juego_ppt(jugador, cpu) {
    console.log(`Jugador: ${jugador} Vs CPU: ${cpu}`)
    if (jugador === cpu) return 'Empate';
    return objetos[jugador] === cpu ? 'Gano CPU': 'Gano Jugador'
}

console.log(juego_ppt(
    lista_objetos[Math.ceil(Math.random()*longitud_lista)],
    lista_objetos[Math.ceil(Math.random()*longitud_lista)]
))