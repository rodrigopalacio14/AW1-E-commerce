const USUARIO_LOGUEADO = "usuarioLogueado";

function estaLogueado() {
    return localStorage.getItem(USUARIO_LOGUEADO) === "true";
}

function iniciarSesion() {
    localStorage.setItem(USUARIO_LOGUEADO, "true");
}

function cerrarSesion() {
    localStorage.removeItem(USUARIO_LOGUEADO);
}

function obtenerBasePath() {
    return window.location.pathname.includes("/pages/") ? "../" : "./";
}

function protegerPagina() {
    if (!estaLogueado()) {
        window.location.href = `${obtenerBasePath()}pages/login.html`;
    }
}
