document.addEventListener('DOMContentLoaded', function () {
    const metodoPagoForm = document.getElementById('metodoPagoForm');

    const tarjetaCredito = document.getElementById('tarjetaCredito');
    const cuponPago = document.getElementById('cuponPago');
    const transferenciaBancaria = document.getElementById('transferenciaBancaria');

    const tarjetaCreditoCampos = document.getElementById('tarjetaCreditoCampos');
    const cuponPagoCampos = document.getElementById('cuponPagoCampos');
    const transferenciaBancariaCampos = document.getElementById('transferenciaBancariaCampos');

    const numeroTarjeta = document.getElementById('numeroTarjeta');
    const cvv = document.getElementById('cvv');
    const pagoFacil = document.getElementById('pagoFacil');
    const rapiPago = document.getElementById('rapiPago');
    const cvu = document.getElementById('cvu');

    tarjetaCredito.addEventListener('change', function () {
        tarjetaCreditoCampos.style.display = 'block';
        cuponPagoCampos.style.display = 'none';
        transferenciaBancariaCampos.style.display = 'none';
    });

    cuponPago.addEventListener('change', function () {
        tarjetaCreditoCampos.style.display = 'none';
        cuponPagoCampos.style.display = 'block';
        transferenciaBancariaCampos.style.display = 'none';
    });

    transferenciaBancaria.addEventListener('change', function () {
        tarjetaCreditoCampos.style.display = 'none';
        cuponPagoCampos.style.display = 'none';
        transferenciaBancariaCampos.style.display = 'block';
    });

    metodoPagoForm.addEventListener('submit', function (event) {
        event.preventDefault();

        let isValid = true;

        if (tarjetaCredito.checked) {
            if (numeroTarjeta.value.trim() === '' || cvv.value.trim() === '') {
                isValid = false;
                alert('Por favor, complete todos los campos de la tarjeta de crédito.');
            }
        } else if (cuponPago.checked) {
            if (!pagoFacil.checked && !rapiPago.checked) {
                isValid = false;
                alert('Por favor, seleccione al menos un método de cupón de pago.');
            }
        } else if (transferenciaBancaria.checked) {
            if (cvu.value.trim() === '') {
                isValid = false;
                alert('Por favor, complete el campo de CVU.');
            }
        } else {
            isValid = false;
            alert('Por favor, seleccione un método de pago.');
        }

        if (isValid) {
            // Redirigir a perfil.html si los datos son válidos
            window.location.href = 'perfil.html';
        }
    });
});