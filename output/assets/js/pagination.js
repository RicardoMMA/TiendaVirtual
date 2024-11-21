function setupPagination(table, itemsPerPage = 10) {
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));
  const pageCount = Math.ceil(rows.length / itemsPerPage);
  let currentPage = 1;

  function showPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    rows.forEach((row, index) => {
      row.style.display = (index >= start && index < end) ? '' : 'none';
    });
  }

  function createPaginationControls() {
    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'pagination';
    
    for (let i = 1; i <= pageCount; i++) {
      const button = document.createElement('button');
      button.textContent = i;
      button.addEventListener('click', () => {
        currentPage = i;
        showPage(currentPage);
        updateActiveButton();
      });
      paginationContainer.appendChild(button);
    }

    table.parentNode.insertBefore(paginationContainer, table.nextSibling);

    function updateActiveButton() {
      paginationContainer.querySelectorAll('button').forEach((btn, index) => {
        btn.classList.toggle('active', index + 1 === currentPage);
      });
    }

    updateActiveButton();
  }

  showPage(currentPage);
  createPaginationControls();
}

// Exportar la función para que pueda ser utilizada en otros archivos
export { setupPagination };

