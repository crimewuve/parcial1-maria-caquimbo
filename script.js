let contador;

function solicitarServicio() {
    contador++
    alert("Servicios solicitados: " + contador)
}

function registrar() {
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById('telefono').value.trim();
    const intereses = document.querySelectorAll('input[name="intereses"]:checked');

    const nombreRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonoRegex = /^\d{10}$/;

    if (!nombreRegex.test(nombres)) {
        alert("Ingrese un nombre válido (solo letras y espacios).");
        return;  
    }
    if (!emailRegex.test(email)) {
        alert("Correo inválido")
        return
    }
    if (!telefonoRegex.test(telefono)) {
        alert("Ingrese un teléfono válido (10 dígitos).");
        return;
    }


    alert("Bienvenido " + nombre)
}

document.getElementById("modoBtn").addEventListener("click", function modoOscuro() {
    document.body.classList.toggle("dark")
})