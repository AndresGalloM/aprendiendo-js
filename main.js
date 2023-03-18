function obtenerElemento(elemento) {
    return document.querySelector(elemento);
}

const correo = obtenerElemento('.email');
const menu = obtenerElemento('.desktop-menu');
const menuHanIcon = obtenerElemento('.icono-menu');
const menuMobil = obtenerElemento('.mobile-menu')
const carritoIcon = obtenerElemento('.navbar-shopping-cart')
const carritoLista = obtenerElemento('.my-card')


function agregarClass(elemento, lista) {
    lista.forEach(element => {
        if (elemento !== element) {
            element.classList.add('inactivo')
        }
    });
    elemento.classList.toggle('inactivo')
}

const listaElementos = [menu, menuMobil, carritoLista]

correo.addEventListener('click', () => {
    agregarClass(menu, listaElementos)
});
menuHanIcon.addEventListener('click', () => {
    agregarClass(menuMobil, listaElementos)
});
carritoIcon.addEventListener('click', () => {
    agregarClass(carritoLista, listaElementos)
})