document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('formulario-contacto');

  formulario.addEventListener('submit', function (event) {
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

function toggleMenu() {
  document.getElementById('main-nav').classList.toggle('active');
}
document.addEventListener('DOMContentLoaded', () => {
  const modelos = document.querySelectorAll('model-viewer');

  modelos.forEach(modelo => {
    modelo.addEventListener('load', () => {
      const materialColor = '#007BFF'; // Azul por ejemplo

      const model = modelo.model;
      if (model) {
        const materials = model.materials;
        materials.forEach(material => {
          material.pbrMetallicRoughness.setBaseColorFactor([0, 0.5, 1, 1]); // RGB + alpha
          material.metallicFactor = 0.3;
          material.roughnessFactor = 0.3;
        });
      }
    });
  });
});

const input = document.getElementById("qrText");
const canvas = document.getElementById("qrCanvas");
const ctx = canvas.getContext("2d");

input.addEventListener("input", () => {
  const text = input.value;
  if (!text) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return;
  }

  QRCode.toCanvas(document.createElement("canvas"), text, {
    errorCorrectionLevel: 'H', // para soportar logo en el centro
    width: 300,
    margin: 1
  }, (err, tempCanvas) => {
    if (err) return console.error(err);

    // Dibujar el QR en el canvas real
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(tempCanvas, 0, 0);

    // Cargar logo
    const logo = new Image();
    logo.src = 'logo.png'; // Asegúrate que el archivo logo.png esté en tu carpeta
    logo.onload = () => {
      const logoSize = 60;
      const x = (canvas.width - logoSize) / 2;
      const y = (canvas.height - logoSize) / 2;

      // Fondo blanco para mayor contraste (opcional)
      ctx.fillStyle = "#fff";
      ctx.fillRect(x - 6, y - 6, logoSize + 12, logoSize + 12);

      // Dibujar el logo encima del QR
      ctx.drawImage(logo, x, y, logoSize, logoSize);
    };
  });
});