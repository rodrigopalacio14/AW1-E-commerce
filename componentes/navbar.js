function crearNavbar() {
    const contenedorNavbar = document.querySelector("#navbar");

    if (!contenedorNavbar) {
        return;
    }

    const basePath = obtenerBasePath();
    const linksPaginas = paginas.map((pagina) => {
        return `
            <li class="nav-item">
                <a class="nav-link" href="${basePath}${pagina.direccion}">${pagina.titulo}</a>
            </li>
        `;
    }).join("");
    const accionesUsuario = estaLogueado()
        ? `
            <li class="nav-item">
                <button class="btn btn-link nav-link" id="btn-logout" type="button">Cerrar sesion</button>
            </li>
        `
        : `
            <li class="nav-item">
                <a class="nav-link" href="${basePath}pages/login.html">Iniciar Sesion</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="${basePath}pages/registro.html">Registrarse</a>
            </li>
        `;

    contenedorNavbar.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="${basePath}index.html">Tres Katanas</a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuTresKatanas">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="menuTresKatanas">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        ${linksPaginas}
                    </ul>

                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                        <li class="nav-item me-3">
                            <a class="nav-link carrito-nav" href="#">Carrito</a>
                        </li>

                        ${accionesUsuario}
                    </ul>
                </div>
            </div>
        </nav>
    `;

    const botonLogout = document.querySelector("#btn-logout");

    if (botonLogout) {
        botonLogout.addEventListener("click", () => {
            cerrarSesion();
            window.location.href = `${basePath}pages/login.html`;
        });
    }
}

crearNavbar();
