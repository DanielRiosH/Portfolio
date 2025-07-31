// Animación al hacer scroll
document.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach((section) => {
        if (section.getBoundingClientRect().top < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
});

// Botón de cambio de tema
document.getElementById("modoOscuroBtn").addEventListener("click", function () {
    document.body.classList.toggle("modoOscuro");

    const isEnglish = document.documentElement.lang === "en";
    this.textContent = isEnglish
        ? document.body.classList.contains("modoOscuro") ? "Light Mode" : "Dark Mode"
        : document.body.classList.contains("modoOscuro") ? "Modo Claro" : "Modo Oscuro";
});

// Cambio de idioma usando hash 
document.getElementById("toggleLanguage").addEventListener("click", () => {
    const currentLang = document.documentElement.lang;
    if (currentLang === "en") {
        window.location.href = "./index.html"; // español
    } else {
        window.location.href = "./indexIngles.html"; // inglés
    }
});

// Actualiza el idioma y fondo del botón según lang del HTML
function updateButtonBackground() {
    const button = document.getElementById("toggleLanguage");
    const themeButton = document.getElementById("modoOscuroBtn");

    const isEnglish = document.documentElement.lang === "en";

    if (isEnglish) {
        button.classList.add("banderaEs");
        button.classList.remove("banderaEn");
        button.textContent = "ES";
        button.style.color = "white";
        themeButton.textContent = document.body.classList.contains("modoOscuro") ? "Light Mode" : "Dark Mode";
    } else {
        button.classList.add("banderaEn");
        button.classList.remove("banderaEs");
        button.textContent = "EN";
        button.style.color = "black";
        themeButton.textContent = document.body.classList.contains("modoOscuro") ? "Modo Claro" : "Modo Oscuro";
    }
}

updateButtonBackground();
