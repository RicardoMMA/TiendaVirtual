function setupTableFilter(table) {
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Filtrar tabla...';
  input.className = 'table-filter';
  table.parentNode.insertBefore(input, table);

  input.addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const rows = table.querySelectorAll('tbody tr');

    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(filter) ? '' : 'none';
    });
  });
}

// Exportar la función para que pueda ser utilizada en otros archivos
export { setupTableFilter };

