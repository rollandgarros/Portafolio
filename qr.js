const qrTextInput = document.getElementById("qr-text");
const logoUpload = document.getElementById("logo-upload");
const logoPreview = document.getElementById("logo-preview");
const qrContainer = document.getElementById("qr-contenedor");

let qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    type: "canvas",
    data: "",
    image: "",
    dotsOptions: {
        color: "#000",
        type: "rounded",
    },
    backgroundOptions: {
        color: "#fff",
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 10,
        imageSize: 0.3,
    },
});

qrCode.append(qrContainer);

// Actualiza el QR cada vez que se escribe algo
qrTextInput.addEventListener("input", () => {
    qrCode.update({ data: qrTextInput.value });
});

// Cuando se carga un logo nuevo
logoUpload.addEventListener("change", () => {
    const file = logoUpload.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const imageDataUrl = e.target.result;
        qrCode.update({ image: imageDataUrl });
    };
    reader.readAsDataURL(file);
});

function descargarQR() {
    qrCode.download({
        name: "qr_con_logo",
        extension: "png",
    });
}
