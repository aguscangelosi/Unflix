document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formularioContraseña');
    const nuevaContrasena = document.getElementById('nuevaContraseña');
    const repetirContrasena = document.getElementById('repetirContrasena');
    const botonEnviar = document.getElementById('botonEnviar');
    const errorMessages = document.querySelectorAll('.error-message');

    const validateInputs = () => {
        let allValid = true;

        const nuevaContrasenaValue = nuevaContrasena.value.trim();
        const repetirContrasenaValue = repetirContrasena.value.trim();

        if (nuevaContrasenaValue === '') {
            errorMessages[0].textContent = 'Este campo no puede estar vacío';
            allValid = false;
        } else {
            errorMessages[0].textContent = '';
        }

        if (repetirContrasenaValue === '') {
            errorMessages[1].textContent = 'Este campo no puede estar vacío';
            allValid = false;
        } else if (repetirContrasenaValue !== nuevaContrasenaValue) {
            errorMessages[1].textContent = 'Las contraseñas no coinciden';
            allValid = false;
        } else {
            errorMessages[1].textContent = '';
        }

        botonEnviar.disabled = !allValid;
    };

    nuevaContrasena.addEventListener('blur', validateInputs);
    repetirContrasena.addEventListener('blur', validateInputs);

    form.addEventListener('submit', (event) => {
        validateInputs();
        if (botonEnviar.disabled) {
            event.preventDefault();
        } else {
            window.location.href = "perfil.html";
        }
    });

    validateInputs(); // Initial validation to set the button state on page load
});