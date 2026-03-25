// URL de tu Web App de Google Apps Script (la reemplazarás más adelante)
const WEB_APP_URL = "AQUÍ_TU_URL_DEL_WEB_APP";

document.getElementById("formReserva").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    const data = {
        nombre: formData.get("nombre"),
        telefono: formData.get("telefono"),
        servicio: formData.get("servicio"),
        fecha: formData.get("fecha"),
        hora: formData.get("hora"),
        comentarios: formData.get("comentarios")
    };

    try {
        await fetch(WEB_APP_URL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        });

        window.location.href = "confirmacion.html"; // REDIRECCIÓN

    } catch (err) {
        alert("Hubo un error al enviar la reservación.");
        console.log(err);
    }
});
