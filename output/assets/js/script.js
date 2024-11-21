import { setupPagination } from './pagination.js';
import { setupTableFilter } from './filter.js';

document.addEventListener('DOMContentLoaded', () => {
  const tables = document.querySelectorAll('table');
  tables.forEach(table => {
    initializeTable(table);
  });
});

function initializeTable(table) {
  const headers = table.querySelectorAll('th');
  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      sortTable(table, index);
    });
    header.style.cursor = 'pointer';
    header.title = 'Haz clic para ordenar';
  });

  setupTableFilter(table);
  setupPagination(table);
}

function sortTable(table, column) {
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));
  const isNumeric = rows.every(row => !isNaN(row.children[column].textContent.trim()));

  rows.sort((a, b) => {
    const aValue = a.children[column].textContent.trim();
    const bValue = b.children[column].textContent.trim();
    
    if (isNumeric) {
      return parseFloat(aValue) - parseFloat(bValue);
    } else {
      return aValue.localeCompare(bValue, 'es', { sensitivity: 'base' });
    }
  });

  tbody.append(...rows);
}

