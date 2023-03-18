function obtenerElemento(elemento) {
    return document.querySelector(elemento);
}

const correo = obtenerElemento('.email');
const menu = obtenerElemento('.desktop-menu');
const menuHanIcon = obtenerElemento('.icono-menu');
const menuMobil = obtenerElemento('.mobile-menu')
const carritoIcon = obtenerElemento('.navbar-shopping-cart')
const carritoLista = obtenerElemento('.my-card')
const gridProductos = obtenerElemento('.cards-container')


function agregarClass(elemento, lista) {
    lista.forEach(element => {
        if (elemento !== element) {
            element.classList.add('inactivo')
        }
    });
    elemento.classList.toggle('inactivo')
}

function renderizarProductos(arrayProductos) {
    for (producto of listaProductos) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const imagenProducto = document.createElement('img');
        imagenProducto.classList.add('product-image');
        imagenProducto.src = producto.imagen;
        imagenProducto.setAttribute('alt', 'Producto');
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('info-content');
    
        const productInfoDiv1 = document.createElement('div');
    
        const productPrec = document.createElement('p');
        productPrec.innerText = producto.precio;
        const productNomb = document.createElement('p');
        productNomb.innerText = producto.nombre;
    
        productInfoDiv1.append(productPrec, productNomb);
    
        const productInfoDiv2 = document.createElement('div');
        const productInfoFigure = document.createElement('figure');
        const productInfoCarr = document.createElement('img');
        productInfoCarr.src = 'Platzi Yard Sale/icons/bt_add_to_cart.svg';
    
        productInfoFigure.append(productInfoCarr)
        productInfoDiv2.append(productInfoFigure)
    
        productInfo.append(productInfoDiv1, productInfoDiv2);
        productCard.append(imagenProducto, productInfo);
    
        gridProductos.append(productCard)
    }
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

const listaProductos = [
    {nombre: 'Key board', precio: '$120.00', imagen: 'https://i.pinimg.com/564x/73/a9/b9/73a9b9ad0723dc7963ff800569bcfe8d.jpg'},
    {nombre: 'Key board', precio: '$100.00', imagen: 'https://i.pinimg.com/564x/70/5f/84/705f842a6d66f0bad042ea7e7230f68c.jpg'},
    {nombre: 'Key board', precio: '$380.00', imagen: 'https://i.pinimg.com/564x/a6/a1/c0/a6a1c0bf174e24b2698460fefe078f80.jpg'},
    {nombre: 'Key board', precio: '$80.00', imagen: 'https://i.pinimg.com/736x/b2/7a/a1/b27aa1c17db87da9104732ba6329c865.jpg'},
    {nombre: 'Key board', precio: '$120.00', imagen: 'https://i.pinimg.com/564x/ae/c1/cd/aec1cd8a7f5839acb038b8ef61fa85e8.jpg'},
    {nombre: 'Key board', precio: '$140.59', imagen: 'https://i.pinimg.com/564x/63/12/6f/63126fb4dfe3d46b95895ff3e639264c.jpg'},
    {nombre: 'Key board', precio: '$120.00', imagen: 'https://i.pinimg.com/736x/5c/55/be/5c55be93643064002fc844533128cb23.jpg'},
    {nombre: 'Key board', precio: '$100.99', imagen: 'https://i.pinimg.com/564x/ee/3c/17/ee3c176674649575fe51d38dd27d75d0.jpg'},
    {nombre: 'Key board', precio: '$120.99', imagen: 'https://i.pinimg.com/564x/eb/72/91/eb72911670567857c53d51eb98d21287.jpg'},
    {nombre: 'Key board', precio: '$100.99', imagen: 'https://i.pinimg.com/564x/65/56/54/6556547574143be7b3abf24f6c5be26f.jpg'},
    {nombre: 'Key board', precio: '$75.99', imagen: 'https://i.pinimg.com/564x/3e/81/ed/3e81edc49291bb49b7332ff0e13db932.jpg'},
    {nombre: 'Key board', precio: '$175.99', imagen: 'https://i.pinimg.com/564x/86/c1/7c/86c17c5f4fef243c3e4fa4a6c346a333.jpg'}
];

renderizarProductos(listaProductos);