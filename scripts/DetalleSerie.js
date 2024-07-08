const capitulos = {
    temporada1: 10,
    temporada2: 8,
    temporada3: 12
};

document.getElementById('selectTemporadas').addEventListener('change', function () {
    const temporadaSeleccionada = this.value;
    const cantidadCapitulos = capitulos[temporadaSeleccionada];
    const divCapitulos = document.querySelector('.divCapitulos');

    divCapitulos.innerHTML = '';

    if (cantidadCapitulos) {
        for (let i = 1; i <= cantidadCapitulos; i++) {
            const boton = document.createElement('button');
            boton.textContent = `Capítulo ${i}`;
            boton.classList.add("capituloSerie");
            divCapitulos.appendChild(boton);
        }
    }
});

document.getElementById('selectTemporadas').dispatchEvent(new Event('change'));