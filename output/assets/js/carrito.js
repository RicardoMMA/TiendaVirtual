// carrito.js

let carrito = [];

function agregarAlCarrito(producto) {
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function mostrarCarrito() {
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let carritoHTML = '';
    
    carrito.forEach(producto => {
        carritoHTML += `
            <div class="producto-carrito">
                <img src="assets/images/${producto.imagen}" alt="${producto.nombre}">
                <p>${producto.nombre}</p>
                <p>${producto.precio} USD</p>
                <button onclick="eliminarDelCarrito(${producto.id})">Eliminar</button>
            </div>
        `;
    });

    document.getElementById('carrito').innerHTML = carritoHTML;
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(producto => producto.id !== id);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

window.onload = mostrarCarrito;
