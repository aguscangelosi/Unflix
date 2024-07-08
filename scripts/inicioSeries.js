const series = [
    {
        img: "../imagenes/img16.jpg",
        href: "detallesSerie1.html",
        class: "imgPelicula",
        titulo: "squid game",
        categoria: "accion"
    },
    {
        img: "../imagenes/img17.jpg",
        href: "detallesSerie2.html",
        class: "imgPelicula",
        titulo: "the last of us",
        categoria: "terror"
    },
    {
        img: "../imagenes/img18.jpg",
        href: "detallesSerie3.html",
        class: "imgPelicula",
        titulo: "utopia",
        categoria: "terror"
    },
    {
        img: "../imagenes/img19.jpg",
        href: "detallesSerie4.html",
        class: "imgPelicula",
        titulo: "the witcher",
        categoria: "aventura"
    },
    {
        img: "../imagenes/img20.jpg",
        href: "detallesSerie5.html",
        class: "imgPelicula",
        titulo: "dark",
        categoria: "terror"
    },
    {
        img: "../imagenes/img21.jpg",
        href: "detallesSerie6.html",
        class: "imgPelicula",
        titulo: "entrevista con el vampiro",
        categoria: "drama"
    },
    {
        img: "../imagenes/img22.jpg",
        href: "detallesSerie7.html",
        class: "imgPelicula",
        titulo: "the last kingdom",
        categoria: "aventura"
    },
    {
        img: "../imagenes/img23.jpg",
        href: "detallesSerie8.html",
        class: "imgPelicula",
        titulo: "loki",
        categoria: "accion"
    },
    {
        img: "../imagenes/img24.jpg",
        href: "detallesSerie9.html",
        class: "imgPelicula",
        titulo: "the walking dead",
        categoria: "aventura"
    },
    {
        img: "../imagenes/img25.jpg",
        href: "detallesSerie10.html",
        class: "imgPelicula",
        titulo: "romancero",
        categoria: "terror"
    },
    {
        img: "../imagenes/img26.jpg",
        href: "detallesSerie11.html",
        class: "imgPelicula",
        titulo: "breaking bad",
        categoria: "drama"
    },
    {
        img: "../imagenes/img27.jpg",
        href: "detallesSerie12.html",
        class: "imgPelicula",
        titulo: "fbi",
        categoria: "accion"
    },
    {
        img: "../imagenes/img28.jpg",
        href: "detallesSerie13.html",
        class: "imgPelicula",
        titulo: "obi wan",
        categoria: "aventura"
    },
    {
        img: "../imagenes/img29.jpg",
        href: "detallesSerie14.html",
        class: "imgPelicula",
        titulo: "game of thrones",
        categoria: "aventura"
    },
    {
        img: "../imagenes/img30.jpg",
        href: "detallesSerie15.html",
        class: "imgPelicula",
        titulo: "mrs. davis",
        categoria: "comedia"
    }
];

const divSeries = document.querySelector("#divSeries");
const filtroDeBusqueda = document.querySelector("#filtroDeBusqueda");


const mostrarSeries = (arraySeries) => {
    divSeries.innerHTML = "";

    arraySeries.forEach((serie) => {
        const contenido = document.createElement("div");
        contenido.innerHTML = `<a href = "${serie.href}"><img src= "${serie.img}"></a>`
        divSeries.append(contenido);
    });
}

mostrarSeries(series);

const manejarBusqueda = () => {
    const valor = filtroDeBusqueda.value.toLowerCase();
    const seriesFiltradas = series.filter((serie) => serie.titulo.toLowerCase().startsWith(valor));
    mostrarSeries(seriesFiltradas);
}

filtroDeBusqueda.addEventListener("keyup", manejarBusqueda);

//filtro lista

const filtroLista = document.querySelector(".categorias");

const manejarFiltro = () => {
    const categoria = filtroLista.value;
    let seriesFiltradas;
    if (categoria === "todas") {
        seriesFiltradas = series;
    } else {
        seriesFiltradas = series.filter((serie) => serie.categoria === categoria);
    }
    mostrarSeries(seriesFiltradas);
}

filtroLista.addEventListener("change", manejarFiltro);