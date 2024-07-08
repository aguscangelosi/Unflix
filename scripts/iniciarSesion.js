const inputNombreUsuario = document.querySelector("#nombreDeUsuario");
const inputPassword = document.querySelector("#password");
const botonEnviar = document.querySelector("#botonEnviar");
const formulario = document.querySelector("#formulario"); // Cambiado a #formulario



const validarCampoVacio = (campo) => {
    const valorCampo = campo.value.trim() // Eliminar espacios en blanco al principio y al final

    if (valorCampo.length === 0) {
        campo.nextElementSibling.innerHTML = "<p>Este campo es obligatorio</p>";
        campo.nextElementSibling.classList.add("mensajeDeError");
        return false; // Retorna falso si el campo está vacío
    } else {
        campo.nextElementSibling.innerHTML = "";
        campo.nextElementSibling.classList.remove("mensajeDeError");
        return true; // Retorna verdadero si el campo no está vacío
    }
};

const validarNombreDeUsuario = (campo) => {

    const valorCampo = campo.value.trim();
    const regExp = new RegExp(/[a-zA-Z]/);


    if (valorCampo.length > 0) {
        if (!regExp.test(valorCampo)) {
            campo.nextElementSibling.innerHTML = "El nombre de usuario solo puede contener letras"
            campo.nextElementSibling.classList.add("mensajeDeError");
            return false;
        } else {
            campo.nextElementSibling.innerHTML = "";
            campo.nextElementSibling.classList.remove("mensajeDeError");
            return true;
        }
    } else {
        return true;
    }

}

inputNombreUsuario.addEventListener("blur", (e) => validarCampoVacio(e.target));
inputNombreUsuario.addEventListener("blur", (e) => validarNombreDeUsuario(e.target));
inputPassword.addEventListener("blur", (e) => validarCampoVacio(e.target));





formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita el envío del formulario por defecto

    // Validar todos los campos
    const nombreUsuarioValido = validarCampoVacio(inputNombreUsuario);
    const caracteresUsusarioValido = validarNombreDeUsuario(inputNombreUsuario);
    const passwordValido = validarCampoVacio(inputPassword);

    // Si todos los campos son válidos, redirigir a inicio.html
    if (nombreUsuarioValido && passwordValido && caracteresUsusarioValido) {
        localStorage.setItem("nombreUsuario", inputNombreUsuario.value);

        window.location.href = "pages/inicio.html";
    }
});