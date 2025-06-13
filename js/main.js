// Animación al hacer scroll //
document.addEventListener("scroll", function() {
    document.querySelectorAll("section").forEach((section) => {
        if (section.getBoundingClientRect().top < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
});

// Botón de cambio del tema //
document.getElementById("modoOscuroBtn").addEventListener("click", function () {
    document.body.classList.toggle("modoOscuro");

    // Cambiar el texto del botón según el idioma y el modo seleccionado
    if (document.body.classList.contains("modoOscuro")) {
        this.textContent = window.location.pathname.includes("indexIngles.html") ? "Light Mode" : "Modo Claro";
    } else {
        this.textContent = window.location.pathname.includes("indexIngles.html") ? "Dark Mode" : "Modo Oscuro";
    }
});

// Cambia el idioma //
document.getElementById("toggleLanguage").addEventListener("click", () => {
    // Verifica en qué página está y redirige a la otra versión
    if (window.location.pathname.includes("indexIngles.html")) {
        window.location.href = "index.html"; // Cambia a español
    } else {
        window.location.href = "indexIngles.html"; // Cambia a inglés
    }
});

// Actualizar el fondo del botón según el idioma actual
function updateButtonBackground() {
    const button = document.getElementById("toggleLanguage");
    const themeButton = document.getElementById("modoOscuroBtn");

    if (window.location.pathname.includes("indexIngles.html")) {
        button.classList.add("banderaEs");
        button.classList.remove("banderaEn");
        button.textContent = "ES";
        button.style.color = "white";
        themeButton.textContent = document.body.classList.contains("modoOscuro") ? "Light Mode" : "Dark Mode"; // Traducción del botón de tema
    } else {
        button.classList.add("banderaEn");
        button.classList.remove("banderaEs");
        button.textContent = "EN";
        button.style.color = "black";
        themeButton.textContent = document.body.classList.contains("modoOscuro") ? "Modo Claro" : "Modo Oscuro"; // Traducción del botón de tema
    }
}

// Llamar a la función al cargar la página
updateButtonBackground();
