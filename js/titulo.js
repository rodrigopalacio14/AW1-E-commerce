function obtenerPaginaActual() {
    const rutaActual = window.location.pathname.replace(/\\/g, "/");

    return titulosPaginas.find((pagina) => rutaActual.endsWith(pagina.direccion));
}

function actualizarTituloPagina() {
    const paginaActual = obtenerPaginaActual();

    if (paginaActual) {
        document.title = `Tres Katanas - ${paginaActual.titulo}`;
    }
}

actualizarTituloPagina();
