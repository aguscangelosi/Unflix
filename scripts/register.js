const inputNombre = document.querySelector("#nombre");
const inputApellido = document.querySelector("#apellido");
const inputEmail = document.querySelector("#email");
const inputTelefono = document.querySelector("#telefono");
const inputPassword = document.querySelector("#contraseña");
const inputRepPassword = document.querySelector("#repContraseña");
const inputNumeroTarjeta = document.querySelector("#numeroTarjeta");
const inputCvv = document.querySelector("#cvv");
const inputCbu = document.querySelector("#cbu");
const inputNumeroCupon = document.createElement("input"); // Nuevo campo para el número de cupón
const botonRegistrarse = document.querySelector("#botonRegistrarse");
const formulario = document.querySelector("form");
const radiosMetodoPago = document.querySelectorAll('input[name="metodoPago"]');
const infoTarjetaCredito = document.querySelector("#infoTarjetaCredito");
const infoCuponPago = document.querySelector("#infoCuponPago");
const infoTransferenciaBancaria = document.querySelector("#infoTransferenciaBancaria");

inputNumeroCupon.setAttribute("type", "text");
inputNumeroCupon.setAttribute("id", "numeroCupon");
inputNumeroCupon.setAttribute("name", "numeroCupon");
inputNumeroCupon.setAttribute("placeholder", "Ingrese el número del cupón");
inputNumeroCupon.style.display = "none"; // Oculto inicialmente

const validarCampoVacio = (campo) => {
    const valorCampo = campo.value.trim();

    if (valorCampo.length === 0) {
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
    const valorCampo = campo.value.trim();
    const regExp = new RegExp(/^(?:\+?(\d{1,3}))?[-.\s]?((\(\d{1,4}\))|\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,4})(?:[-.\s]?(\d{1,9}))?$/);

    if (valorCampo > 0) {
        if (!regExp.test(valorCampo)) {
            campo.nextElementSibling.innerHTML = "<p>Número de teléfono no válido</p>";
            campo.nextElementSibling.classList.add("mensajeDeError");
            return false;
        } else {
            campo.nextElementSibling.innerHTML = "";
            campo.nextElementSibling.classList.remove("mensajeDeError");
            return true;
        }
    }
};

const validarEmail = (campo) => {
    const valorCampo = campo.value.trim();
    const regExp = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

    if (valorCampo.length > 0) {
        if (!regExp.test(valorCampo)) {
            campo.nextElementSibling.innerHTML = "<p>Formato de email no válido</p>";
            campo.nextElementSibling.classList.add("mensajeDeError");
            return false;
        } else {
            campo.nextElementSibling.innerHTML = "";
            campo.nextElementSibling.classList.remove("mensajeDeError");
            return true;
        }
    }
    return true;
};

const validarContrasenasIguales = () => {
    if (inputPassword.value != inputRepPassword.value) {
        inputRepPassword.nextElementSibling.innerHTML = "<p>Las contraseñas no coinciden</p>";
        inputRepPassword.nextElementSibling.classList.add("mensajeDeError");
        return false;
    } else {
        inputRepPassword.nextElementSibling.innerHTML = "";
        inputRepPassword.nextElementSibling.classList.remove("mensajeDeError");
        return true;
    }
};

const validarNumerosClaveTarjeta = (campo) => {
    const valorCampo = campo.value.trim();
    const regExp = new RegExp(/^[1-9]{3}$/);

    if (valorCampo.length > 0) {
        if (!regExp.test(valorCampo)) {
            campo.nextElementSibling.innerHTML = "<p>Solo se admiten tres números distintos a cero</p>";
            campo.nextElementSibling.classList.add("mensajeDeError");
            return false;
        } else {
            campo.nextElementSibling.innerHTML = "";
            campo.nextElementSibling.classList.remove("mensajeDeError");
            return true;
        }
    }
    return true;
};

const validarNumeroTarjeta = (campo) => {
    const valorCampo = campo.value.trim();
    const regExp = new RegExp(/^\d{16,19}$/);

    if (valorCampo.length > 0) {
        if (!regExp.test(valorCampo)) {
            campo.nextElementSibling.innerHTML = "<p>Número inválido</p>";
            campo.nextElementSibling.classList.add("mensajeDeError");
            return false;
        } else {
            campo.nextElementSibling.innerHTML = "";
            campo.nextElementSibling.classList.remove("mensajeDeError");
            return true;
        }
    }
    return true;
};

const validarCbu = (campo) => {
    const valorCampo = campo.value.trim();
    const regExp = new RegExp(/^\d{22}$/);

    if (valorCampo.length > 0) {
        if (!regExp.test(valorCampo)) {
            campo.nextElementSibling.innerHTML = "<p>CBU inválido</p>";
            campo.nextElementSibling.classList.add("mensajeDeError");
            return false;
        } else {
            campo.nextElementSibling.innerHTML = "";
            campo.nextElementSibling.classList.remove("mensajeDeError");
            return true;
        }
    }
    return true;
};

const validarNumeroCupon = (campo) => {
    const valorCampo = campo.value.trim();

    if (valorCampo.length === 0) {
        campo.nextElementSibling.innerHTML = "<p>Número de cupón es obligatorio</p>";
        campo.nextElementSibling.classList.add("mensajeDeError");
        return false;
    } else {
        campo.nextElementSibling.innerHTML = "";
        campo.nextElementSibling.classList.remove("mensajeDeError");
        return true;
    }
};

const validarMetodoPagoSeleccionado = () => {
    for (const radio of radiosMetodoPago) {
        if (radio.checked) {
            return true;
        }
    }
    return false;
};

inputNombre.addEventListener("blur", (e) => validarCampoVacio(e.target));
inputApellido.addEventListener("blur", (e) => validarCampoVacio(e.target));
inputEmail.addEventListener("blur", (e) => validarCampoVacio(e.target));
inputEmail.addEventListener("blur", (e) => validarEmail(e.target));
inputTelefono.addEventListener("blur", (e) => validarTelefono(e.target));
inputTelefono.addEventListener("blur", (e) => validarCampoVacio(e.target));
inputPassword.addEventListener("blur", (e) => validarCampoVacio(e.target));
inputRepPassword.addEventListener("blur", (e) => validarCampoVacio(e.target));
inputRepPassword.addEventListener("blur", validarContrasenasIguales);
inputNumeroTarjeta.addEventListener("blur", (e) => validarCampoVacio(e.target));
inputNumeroTarjeta.addEventListener("blur", (e) => validarNumeroTarjeta(e.target));
inputCvv.addEventListener("blur", (e) => validarCampoVacio(e.target));
inputCvv.addEventListener("blur", (e) => validarNumerosClaveTarjeta(e.target));
inputCbu.addEventListener("blur", (e) => validarCampoVacio(e.target));
inputCbu.addEventListener("blur", (e) => validarCbu(e.target));
inputNumeroCupon.addEventListener("blur", (e) => validarNumeroCupon(e.target)); // Validar número de cupón

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let nombreValido = validarCampoVacio(inputNombre);
    let apellidoValido = validarCampoVacio(inputApellido);
    let emailValido = validarCampoVacio(inputEmail) && validarEmail(inputEmail);
    let telefonoValido = validarCampoVacio(inputTelefono) && validarTelefono(inputTelefono);
    let passwordValido = validarCampoVacio(inputPassword);
    let repPasswordValido = validarCampoVacio(inputRepPassword) && validarContrasenasIguales();
    let numeroTarjetaValido = validarCampoVacio(inputNumeroTarjeta) && validarNumeroTarjeta(inputNumeroTarjeta);
    let cvvValido = validarCampoVacio(inputCvv) && validarNumerosClaveTarjeta(inputCvv);
    let cbuValido = validarCampoVacio(inputCbu) && validarCbu(inputCbu);
    let numeroCuponValido = validarNumeroCupon(inputNumeroCupon); // Validar número de cupón
    let metodoPagoSeleccionado = validarMetodoPagoSeleccionado();

    if (nombreValido && apellidoValido && emailValido && telefonoValido && passwordValido && repPasswordValido && metodoPagoSeleccionado) {
        if (document.querySelector("#tarjetaCredito").checked) {
            if (numeroTarjetaValido && cvvValido) {
                window.location.href = "../index.html";
            }
        } else if (document.querySelector("#transferenciaBancaria").checked) {
            if (cbuValido) {
                window.location.href = "../index.html";
            }
        } else if (document.querySelector("#cuponPago").checked) {
            if (numeroCuponValido) { // Verificar el número de cupón
                window.location.href = "../index.html";
            }
        }
    }
});

for (const radio of radiosMetodoPago) {
    radio.addEventListener("change", (e) => {
        infoTarjetaCredito.style.display = "none";
        infoCuponPago.style.display = "none";
        infoTransferenciaBancaria.style.display = "none";
        inputNumeroCupon.style.display = "none"; // Ocultar el campo de cupón

        if (e.target.value === "tarjetaCredito") {
            infoTarjetaCredito.style.display = "block";
        } else if (e.target.value === "cuponPago") {
            infoCuponPago.style.display = "block";
            infoCuponPago.appendChild(inputNumeroCupon); // Agregar el campo de número de cupón
            inputNumeroCupon.style.display = "block"; // Mostrar el campo de número de cupón
        } else if (e.target.value === "transferenciaBancaria") {
            infoTransferenciaBancaria.style.display = "block";
        }
    });
}