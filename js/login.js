const formularioLogin = document.querySelector("#formulario-login");

if (formularioLogin) {
    formularioLogin.addEventListener("submit", (evento) => {
        evento.preventDefault();
        iniciarSesion();
        window.location.href = "../index.html";
    });
}
