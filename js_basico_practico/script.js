// Esta funcion se comporta con si estuvieramos en css (#id, .class, etiqueta)
// Solo recupera la primera coincidencia
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.querySelector('.parrafo');
const parrafo2 = document.querySelector('#parrafo');
const input = document.querySelector('input');

// Se comporta igual al de arriba pero recupera todos los elementos que coincidan
const pAll = document.querySelectorAll('p');


console.log({
    h1,
    p,
    parrafo,
    parrafo2,
    input
})