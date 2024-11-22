document.addEventListener("DOMContentLoaded", function () {
  // Hacer la solicitud a obtener_opiniones.php
  fetch('obtener_opiniones.php')
      .then(response => response.json()) // Convertir la respuesta a JSON
      .then(data => {
          const tableBody = document.querySelector('tbody');
          tableBody.innerHTML = ""; // Limpiar la tabla antes de llenarla

          // Recorrer los datos y agregarlos a la tabla
          data.forEach(opinion => {
              const row = document.createElement('tr');

              // Crear celdas para cada columna
              const idOpClienteFK = document.createElement('td');
              idOpClienteFK.textContent = opinion.ID_OpClienteFK;

              const idProductoFK = document.createElement('td');
              idProductoFK.textContent = opinion.ID_ProductoFK;

              const idClienteFK = document.createElement('td');
              idClienteFK.textContent = opinion.ID_ClienteFK;

              const nCasoFK = document.createElement('td');
              nCasoFK.textContent = opinion.N_CasoFK;

              // Agregar celdas a la fila
              row.appendChild(idOpClienteFK);
              row.appendChild(idProductoFK);
              row.appendChild(idClienteFK);
              row.appendChild(nCasoFK);

              // Agregar la fila a la tabla
              tableBody.appendChild(row);
          });
      })
      .catch(error => console.error('Error:', error));
});


