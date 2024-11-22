
// app.js

// Esperamos que el contenido de la página se haya cargado
window.onload = function() {
    // Hacemos una petición fetch al backend para obtener los productos
    fetch('php/productos.php')
        .then(response => response.json()) // Convertimos la respuesta JSON en un objeto de JavaScript
        .then(data => {
            // Una vez que tenemos los datos, los procesamos y los mostramos en el frontend
            let productosHTML = '';

            // Iteramos sobre los productos y generamos el HTML
            data.forEach(producto => {
                productosHTML += `
                    <div class="producto">
                        <img src="assets/images/${producto.imagen}" alt="${producto.nombre}">
                        <h3>${producto.nombre}</h3>
                        <p>${producto.descripcion}</p>
                        <p>${producto.precio} USD</p>
                        <a href="product-detail.html?id=${producto.id}">Ver detalles</a>
                    </div>
                `;
            });

            // Insertamos el HTML generado en el contenedor de productos
            document.getElementById('productos').innerHTML = productosHTML;
        })
        .catch(error => console.log('Error al cargar los productos:', error)); // Si ocurre un error, lo mostramos en la consola
};
function mostrarProductos(categoria) {
    const productos = document.getElementById('productos');

    if (categoria === 'mujer') {
        productos.innerHTML = `
            <div class="producto">
                <img src="assets/img/camiseta-deportiva1.jpg" alt="Camiseta Deportiva 1">
                <h3>Camiseta Deportiva1</h3>
                <p>Descripción: Camiseta cómoda y ligera para entrenar.</p>
                <p>Precio: $20.00</p>
            </div>
            <div class="producto">
                <img src="assets/img/camiseta-deportiva2.jpg" alt="Camiseta Deportiva 2">
                <h3>Camiseta Deportiva2</h3>
                <p>Descripción: Camiseta de alto rendimiento.</p>
                <p>Precio: $25.00</p>
            </div>
            <div class="producto">
                <img src="assets/img/camiseta-deportiva3.jpg" alt="Camiseta Deportiva 3">
                <h3>Camiseta Deportiva3</h3>
                <p>Descripción: Camiseta deportiva ligera.</p>
                <p>Precio: $30.00</p>
            </div>
        `;
    } else if (categoria === 'hombre') {
        productos.innerHTML = `
            <div class="producto">
                <h3>Producto para Hombre</h3>
                <p>Descripción: Producto en categoría hombre.</p>
            </div>
        `;
    } else if (categoria === 'niños') {
        productos.innerHTML = `
            <div class="producto">
                <h3>Producto para Niños</h3>
                <p>Descripción: Producto en categoría niños.</p>
            </div>
        `;
    }
}
// Función para mostrar el modal con los detalles del producto
function mostrarDetalles(nombre, codigo, precio, tallas, color) {
    // Mostrar el modal
    document.getElementById("modal").style.display = "block";

    // Rellenar los datos del producto en el modal
    document.getElementById("nombreProducto").textContent = nombre;
    document.getElementById("codigoProducto").textContent = codigo;
    document.getElementById("precioProducto").textContent = precio;
    document.getElementById("colorProducto").textContent = color;
    
    // Mostrar las tallas disponibles (como un select)
    const tallasArray = tallas.split(', ');
    const selectTalla = document.getElementById("selectTalla");
    selectTalla.innerHTML = ''; // Limpiar las opciones actuales
    tallasArray.forEach(talla => {
        const option = document.createElement("option");
        option.value = talla.toLowerCase();
        option.textContent = talla;
        selectTalla.appendChild(option);
    });
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

// Función para agregar al carrito
function agregarAlCarrito() {
    const tallaSeleccionada = document.getElementById("selectTalla").value;
    const productoNombre = document.getElementById("nombreProducto").textContent;
    alert(`Producto ${productoNombre} agregado al carrito con talla ${tallaSeleccionada}`);
}
let carrito = []; // Array para almacenar los productos del carrito

// Función para mostrar los detalles del producto en el modal
function mostrarDetalles(nombre, codigo, precio, tallas, color) {
    document.getElementById("nombreProducto").innerText = nombre;
    document.getElementById("codigoProducto").innerText = codigo;
    document.getElementById("precioProducto").innerText = precio;
    document.getElementById("colorProducto").innerText = color;
    document.getElementById("selectTalla").value = 'xs'; // Default tamaño

    document.getElementById("modal").style.display = "block";
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

// Función para agregar al carrito
function agregarAlCarrito() {
    const tallaSeleccionada = document.getElementById("selectTalla").value;
    const producto = {
        nombre: document.getElementById("nombreProducto").innerText,
        codigo: document.getElementById("codigoProducto").innerText,
        precio: document.getElementById("precioProducto").innerText,
        talla: tallaSeleccionada,
        color: document.getElementById("colorProducto").innerText
    };

    // Agregar producto al carrito
    carrito.push(producto);

    // Actualizar el carrito
    actualizarCarrito();

    // Cerrar el modal de detalles
    cerrarModal();
}

// Función para actualizar el carrito
function actualizarCarrito() {
    const contenidoCarrito = document.getElementById("contenidoCarrito");
    const totalCarrito = document.getElementById("totalCarrito");

    // Limpiar contenido actual
    contenidoCarrito.innerHTML = '';

    let total = 0;
    
    // Mostrar los productos del carrito
    carrito.forEach(producto => {
        const itemCarrito = document.createElement("div");
        itemCarrito.innerHTML = `
            <p>${producto.nombre} - ${producto.color} - ${producto.talla} - ${producto.precio}</p>
        `;
        contenidoCarrito.appendChild(itemCarrito);
        total += parseFloat(producto.precio.replace('$', '').replace(',', ''));
    });

    // Mostrar el total del carrito
    totalCarrito.innerText = `Total: $${total.toFixed(2)}`;
}

// Función para abrir el carrito
function abrirCarrito() {
    document.getElementById("carrito").style.display = "block";
}

// Función para cerrar el carrito
function cerrarCarrito() {
    document.getElementById("carrito").style.display = "none";
}

// Función para finalizar la compra
function finalizarCompra() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    alert("¡Compra realizada con éxito!");
    carrito = []; // Limpiar el carrito después de la compra
    actualizarCarrito(); // Actualizar la vista del carrito
}
function abrirModalSesion() {
    document.getElementById("modalSesion").style.display = "block";
}

function cerrarModalSesion() {
    document.getElementById("modalSesion").style.display = "none";
}

// assets/js/app.js

// Función para simular la creación de la cuenta
function crearCuenta(event) {
    event.preventDefault();  // Evita el comportamiento por defecto del formulario

    // Obtén los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('emailCrear').value;
    const password = document.getElementById('passwordCrear').value;

    // Aquí puedes agregar la lógica para enviar los datos del formulario a tu servidor, si es necesario

    // Simula el éxito y muestra el mensaje
    document.getElementById('mensajeExito').style.display = 'block';

    // Oculta el formulario de creación de cuenta
    document.getElementById('formCrearCuenta').style.display = 'none';
}

// Agrega el evento para manejar el formulario de crear cuenta
document.getElementById('formCrearCuenta').addEventListener('submit', crearCuenta);

// assets/js/app.js
function procesarFormulario(event) {
    event.preventDefault(); // Evita que la página se recargue

    // Obtiene los valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("emailCrear").value.trim();
    const password = document.getElementById("passwordCrear").value.trim();

    // Verifica que los campos estén completos
    if (nombre && email && password) {
        alert(`¡Cuenta creada exitosamente!\nNombre: ${nombre}\nCorreo: ${email}`);
        document.getElementById("formCrearCuenta").reset(); // Limpia el formulario
    } else {
        alert("Por favor, completa todos los campos antes de continuar.");
    }
}

function guardarOpinion(event) {
    event.preventDefault(); // Evita que la página se recargue

    // Obtén los valores ingresados
    const producto = document.getElementById("producto").value;
    const opinion = document.getElementById("opinion").value.trim();
    const calificacion = document.getElementById("calificacion").value;

    // Verifica que todos los campos estén completos
    if (producto && opinion && calificacion) {
        // Contenedor donde se mostrarán las opiniones
        const listaOpiniones = document.getElementById("lista-opiniones");

        // Crea un nuevo elemento de opinión
        const nuevaOpinion = document.createElement("div");
        nuevaOpinion.classList.add("opinion-item");
        nuevaOpinion.innerHTML = `
            <h3>${producto}</h3>
            <p><strong>Calificación:</strong> ${"★".repeat(calificacion)} (${calificacion}/5)</p>
            <p>${opinion}</p>
        `;

        // Agrega la nueva opinión a la lista
        listaOpiniones.appendChild(nuevaOpinion);

        // Muestra un mensaje de alerta indicando que la opinión fue enviada con éxito
        alert("¡Tu opinión ha sido enviada exitosamente!");

        // Limpia el formulario después de enviar
        document.getElementById("form-opinion").reset();
    } else {
        alert("Por favor, completa todos los campos antes de enviar.");
    }
}

// Función para finalizar la compra y mostrar el formulario flotante de confirmación
function finalizarCompra() {
    // Ocultar el carrito de compras
    document.getElementById("carrito").style.display = "none"; 
    
    // Mostrar el formulario flotante de confirmación del pedido
    document.getElementById("procesarPedido").style.display = "block"; 
}

// Función para confirmar la compra y mostrar el mensaje de éxito final
function confirmarCompra(event) {
    // Prevenir que se recargue la página (comportamiento por defecto del formulario)
    event.preventDefault();

    // Obtener los datos del formulario
    const direccion = document.getElementById("direccionEnvio").value;
    const metodoPago = document.getElementById("metodoPago").value;

    // Aquí puedes agregar lógica para procesar el pedido, como enviarlo al servidor

    // Ocultar el formulario de confirmación flotante
    document.getElementById("procesarPedido").style.display = "none"; 

    // Mostrar el mensaje de compra exitosa al final
    document.getElementById("mensajeExito").style.display = "block"; 
}