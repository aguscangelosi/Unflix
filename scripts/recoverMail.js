const input = document.querySelector("#inputCorreo");
const botonEnviar = document.querySelector("#botonEnviar");
const formulario = document.querySelector(".formulario");

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

const validarEmail = (campo) => {
    const valor = campo.value.trim();
    const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (valor.length > 0 && !regExp.test(valor)) {
        campo.nextElementSibling.innerHTML = "<p>Dirección de correo no válida</p>";
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
    const emailValidado = validarEmail(input);

    if (campoVacioValidado && emailValidado) {
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
    const emailValidado = validarEmail(input);

    if (campoVacioValidado && emailValidado) {
        const mailInsertado = input.value;
        botonEnviar.nextElementSibling.innerHTML = `<p>Correo de recuperación enviado a ${mailInsertado}</p>`;
        botonEnviar.nextElementSibling.classList.add("mensajeCorrecto");
    }
});

// Llamar a validarFormulario al inicio por si el campo ya tiene un valor al cargar la página
validarFormulario();
