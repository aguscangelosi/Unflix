const input = document.querySelector("#inputCorreo");
const formulario = document.querySelector(".formulario");
const botonEnviar = document.querySelector("#botonEnviar");

const validarCampoVacio = (campo) => {
    const valor = campo.value.trim();

    if (valor.length === 0) {
        campo.nextElementSibling.innerHTML = "<p>Este campo es obligatorio</p>";
        campo.nextElementSibling.classList.add("mensajeDeError");
        return false;
    } else {
        campo.nextElementSibling.innerHTML = "";
        campo.nextElementSibling.classList.remove("mensajeDeError");
        return true;
    }
};

const validarTelefono = (campo) => {
    const valor = campo.value.trim();
    const regExp = /^(?:\+?(\d{1,3}))?[-.\s]?((\(\d{1,4}\))|\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,4})(?:[-.\s]?(\d{1,9}))?$/;

    if (valor.length > 0 && !regExp.test(valor)) {
        campo.nextElementSibling.innerHTML = "<p>Número de teléfono no válido</p>";
        campo.nextElementSibling.classList.add("mensajeDeError");
        return false;
    } else {
        campo.nextElementSibling.innerHTML = "";
        campo.nextElementSibling.classList.remove("mensajeDeError");
        return true;
    }
};

const validarFormulario = () => {
    const campoVacioValidado = validarCampoVacio(input);
    const telefonoValidado = validarTelefono(input);

    if (campoVacioValidado && telefonoValidado) {
        botonEnviar.disabled = false;
        botonEnviar.classList.remove("botonEnviarDesactivado");
    } else {
        botonEnviar.disabled = true;
        botonEnviar.classList.add("botonEnviarDesactivado");
    }
};

input.addEventListener("blur", validarFormulario);
input.addEventListener("input", validarFormulario);

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const campoVacioValidado = validarCampoVacio(input);
    const telefonoValidado = validarTelefono(input);

    if (campoVacioValidado && telefonoValidado) {
        const telefono = input.value;
        botonEnviar.nextElementSibling.innerHTML = `<p>Mensaje de recuperación enviado a ${telefono}</p>`;
        botonEnviar.nextElementSibling.classList.add("mensajeCorrecto");
    }
});

// Llamar a validarFormulario al inicio por si el campo ya tiene un valor al cargar la página
validarFormulario();