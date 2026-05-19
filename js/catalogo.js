const esPaginaInterna = window.location.pathname.includes("/pages/");

if (esPaginaInterna) {
    protegerPagina();
}

const grillaProductos = document.querySelector("#productos");

if (grillaProductos) {
    const categoria = grillaProductos.dataset.categoria;
    let productosFiltrados = productos;

    if (categoria === "destacados") {
        productosFiltrados = productos.filter((producto) => producto.destacado);
    } else if (categoria) {
        productosFiltrados = productos.filter((producto) => producto.categoria === categoria);
    }

    renderizarProductos(productosFiltrados, "#productos");
}
