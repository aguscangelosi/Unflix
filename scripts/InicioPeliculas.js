


const peliculas = [
    {
        img: "../imagenes/img1.jpg",
        id: "pelicula1",
        href: "detallesPelicula1.html",
        class: "imgPelicula",
        titulo: "joker",
        categoria: "drama"
    },
    {
        img: "../imagenes/img2.jpg",
        id: "pelicula2",
        href: "detallesPelicula2.html",
        class: "imgPelicula",
        titulo: "spiderman",
        categoria: "accion"
    },
    {
        img: "../imagenes/img3.jpg",
        id: "pelicula3",
        href: "detallesPelicula3.html",
        class: "imgPelicula",
        titulo: "guardianes de la galaxia",
        categoria: "accion"
    },
    {
        img: "../imagenes/img4.jpg",
        id: "pelicula4",
        href: "detallesPelicula4.html",
        class: "imgPelicula",
        titulo: "piratas del caribe",
        categoria: "aventura"
    },
    {
        img: "../imagenes/img5.jpg",
        id: "pelicula5",
        href: "detallesPelicula5.html",
        class: "imgPelicula",
        titulo: "fantastic beasts",
        categoria: "aventura"
    },
    {
        img: "../imagenes/img6.jpg",
        id: "pelicula6",
        href: "detallesPelicula6.html",
        class: "imgPelicula",
        titulo: "bebe reno",
        categoria: "drama"
    },
    {
        img: "../imagenes/img7.jpg",
        id: "pelicula7",
        href: "detallesPelicula7.html",
        class: "imgPelicula",
        titulo: "godzilla vs kong",
        categoria: "accion"
    },
    {
        img: "../imagenes/img8.jpg",
        id: "pelicula8",
        href: "detallesPelicula8.html",
        class: "imgPelicula",
        titulo: "oppenheimer",
        categoria: "drama"
    },
    {
        img: "../imagenes/img9.jpg",
        id: "pelicula9",
        href: "detallesPelicula9.html",
        class: "imgPelicula",
        titulo: "barbie",
        categoria: "comedia"
    },
    {
        img: "../imagenes/img10.jpg",
        id: "pelicula10",
        href: "detallesPelicula10.html",
        class: "imgPelicula",
        titulo: "tintin",
        categoria: "aventura"
    },
    {
        img: "../imagenes/img11.jpg",
        id: "pelicula11",
        href: "detallesPelicula11.html",
        class: "imgPelicula",
        titulo: "midsommar",
        categoria: "terror"
    },
    {
        img: "../imagenes/img12.jpg",
        id: "pelicula12",
        href: "detallesPelicula12.html",
        class: "imgPelicula",
        titulo: "fight club",
        categoria: "drama"
    },
    {
        img: "../imagenes/img13.jpg",
        id: "pelicula13",
        href: "detallesPelicula13.html",
        class: "imgPelicula",
        titulo: "coraline",
        categoria: "terror"
    },
    {
        img: "../imagenes/img14.jpg",
        id: "pelicula14",
        href: "detallesPelicula14.html",
        class: "imgPelicula",
        titulo: "beau is afraid",
        categoria: "terror"
    },
    {
        img: "../imagenes/img15.jpg",
        id: "pelicula15",
        href: "detallesPelicula15.html",
        class: "imgPelicula",
        titulo: "hereditary",
        categoria: "terror"
    }
];

const divPeliculas = document.querySelector("#divPeliculas");
const filtroDeBusqueda = document.querySelector("#filtroDeBusqueda");

const mostrarPeliculas = (arrayPeliculas) => {

    divPeliculas.innerHTML = "";

    arrayPeliculas.forEach((pelicula) => {
        const contenido = document.createElement("div");

        contenido.innerHTML = `<a href="${pelicula.href}"><img src="${pelicula.img}"></a>`

        divPeliculas.append(contenido);
    })
};
mostrarPeliculas(peliculas);


const manejarBusqueda = () => {

    const valor = filtroDeBusqueda.value.toLowerCase();
    const pelicuasFiltradas = peliculas.filter((pelicula) => pelicula.titulo.toLowerCase().startsWith(valor)) //Array
    mostrarPeliculas(pelicuasFiltradas);
}

filtroDeBusqueda.addEventListener("keyup", manejarBusqueda);



//filtro lista

const filtroLista = document.querySelector(".categorias");

const manejarFiltro = () => {
    const categoria = filtroLista.value;
    let peliculasFiltradas;
    if (categoria === "todas") {
        peliculasFiltradas = peliculas;
    } else {
        peliculasFiltradas = peliculas.filter((pelicula) => pelicula.categoria === categoria);
    }
    mostrarPeliculas(peliculasFiltradas);
}

filtroLista.addEventListener("change", manejarFiltro);
