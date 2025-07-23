document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('formulario-contacto');

  formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensajeForm').value;

    // Mostrar mensaje de confirmación
    alert(`Gracias ${nombre} por tu mensaje. Te contactaremos en ${email} pronto.`);

    // Limpiar el formulario
    formulario.reset();
  });
});
