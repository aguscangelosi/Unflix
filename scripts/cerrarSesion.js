const botonCerrarSesion = document.querySelector(".botonCerrarSesion");

botonCerrarSesion.addEventListener("click", (e) => {
    localStorage.clear();
});