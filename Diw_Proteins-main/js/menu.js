document.addEventListener("DOMContentLoaded", function() {

    const btn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu-desplegable");

    btn.addEventListener("click", () => {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });

    // Acordeon principal
    const titulos = document.querySelectorAll(".titulo");
    titulos.forEach(titulo => {
        titulo.addEventListener("click", () => {
            titulo.nextElementSibling.style.display =
                titulo.nextElementSibling.style.display === "block" ? "none" : "block";
        });
    });

    // Acordeon secundario
    const subtitulos = document.querySelectorAll(".subtitulo");
    subtitulos.forEach(sub => {
        sub.addEventListener("click", () => {
            sub.nextElementSibling.style.display =
                sub.nextElementSibling.style.display === "block" ? "none" : "block";
        });
    });

});
