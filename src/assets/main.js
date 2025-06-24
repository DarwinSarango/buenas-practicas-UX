// main.js - Mejoras de interacción

document.addEventListener('DOMContentLoaded', function() {
  // Efecto de selección en filas de tabla
  document.querySelectorAll('table tr').forEach(function(row) {
    row.addEventListener('click', function() {
      document.querySelectorAll('table tr').forEach(r => r.classList.remove('selected-row'));
      row.classList.add('selected-row');
    });
  });

  // Animación de botones
  document.querySelectorAll('button, .btn').forEach(function(btn) {
    btn.addEventListener('mousedown', function() {
      btn.style.transform = 'scale(0.97)';
    });
    btn.addEventListener('mouseup', function() {
      btn.style.transform = '';
    });
    btn.addEventListener('mouseleave', function() {
      btn.style.transform = '';
    });
  });
});

// Estilo para la fila seleccionada
document.head.insertAdjacentHTML('beforeend', `<style>.selected-row { background: #c7d2fe !important; }</style>`);
