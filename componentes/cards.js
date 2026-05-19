function formatearPrecio(precio) {
    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0
    }).format(precio);
}

function crearCardProducto(producto) {
    const basePath = obtenerBasePath();

    return `
        <div class="col-md-4">
            <article class="card card-producto h-100">
                <img src="${basePath}${producto.imagen}" class="card-img-top imagentarjetas" alt="${producto.titulo}">
                <div class="card-body">
                    <h5 class="card-title">${producto.titulo}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="precio-producto">${formatearPrecio(producto.precio)}</p>

                    <div class="contador-producto" data-producto-id="${producto.id}">
                        <button class="btn btn-katana btn-restar" type="button">-</button>
                        <span class="cantidad-producto">0</span>
                        <button class="btn btn-katana btn-sumar" type="button">+</button>
                    </div>
                </div>
            </article>
        </div>
    `;
}

function activarContadores() {
    const contadores = document.querySelectorAll(".contador-producto");

    contadores.forEach((contador) => {
        const cantidad = contador.querySelector(".cantidad-producto");
        const botonSumar = contador.querySelector(".btn-sumar");
        const botonRestar = contador.querySelector(".btn-restar");

        botonSumar.addEventListener("click", () => {
            cantidad.textContent = Number(cantidad.textContent) + 1;
        });

        botonRestar.addEventListener("click", () => {
            const valorActual = Number(cantidad.textContent);

            if (valorActual > 0) {
                cantidad.textContent = valorActual - 1;
            }
        });
    });
}

function renderizarProductos(listaProductos, selector) {
    const contenedor = document.querySelector(selector);

    if (!contenedor) {
        return;
    }

    contenedor.innerHTML = listaProductos.map(crearCardProducto).join("");
    activarContadores();
}
