document.getElementById("reservaForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = new FormData(e.target);

    const data = {
        nombre: form.get("nombre"),
        telefono: form.get("telefono"),
        fecha: form.get("fecha"),
        hora: form.get("hora"),
        comentarios: form.get("comentarios")
    };

    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbwy1jQ7o51J5wmlxvtiqizQV90CJ_AUgHLqZ-lsebardqjXI5VD56911NaRkZ_5DZk_/exec", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        });

        const result = await response.json();

        if (result.success) {
            window.location.href = "https://i.postimg.cc/255Sv672/Agendado-Jrs-Barber.png";
        } else {
            document.getElementById("status").innerText = "Hubo un error.";
        }
    } catch (error) {
        document.getElementById("status").innerText = "Error de conexión.";
    }
});
