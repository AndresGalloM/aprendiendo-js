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

// Convierte el texto a html
h1.innerHTML = 'Cambiar el contenido del h1 con <br> innerHTML'

// Respeta el contenido
h1.innerText = 'Cambiar el contenido del h1 con <br> innerHTML'


// Recuperar el contenido de un atributo en un elemento
console.log(h1.getAttribute('atributo')) // Atr

// Modificar el valor de un atributo en un elemento
h1.setAttribute('class', 'verde')

// Agregar clase
h1.classList.add('rojo')

// Eliminar clase
h1.classList.remove('rojo')


// Cambiar valor de input
input.value = 'Hola mundo'


// Crear elemento desde 0
const img = document.createElement('img');
// img.setAttribute('src', 'https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif');
img.src = 'https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif';

// Insertar elementos dentro de otros elementos
parrafo2.append(img);

// Remplaza el contenido
pid.replaceWith(img);

 