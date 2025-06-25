<!-- Asegúrate de que el HTML tenga los IDs necesarios: modoOscuroBtn, toggleLanguage, y secciones con <section> -->
<script>
// Animación al hacer scroll (se mantiene, es compatible con GitHub Pages)
document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("scroll", function () {
        document.querySelectorAll("section").forEach((section) => {
            if (section.getBoundingClientRect().top < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });
    });

    // Botón de cambio de tema
    const themeButton = document.getElementById("modoOscuroBtn");
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("modoOscuro");
        this.textContent = document.body.classList.contains("modoOscuro") ? "Modo Claro" : "Modo Oscuro";
    });

    // Cambio de idioma sin redirección (cambia texto en la misma página)
    const langButton = document.getElementById("toggleLanguage");
    let idioma = "es"; // idioma por defecto

    langButton.addEventListener("click", () => {
        idioma = idioma === "es" ? "en" : "es";

        // Actualiza los textos según el idioma seleccionado
        if (idioma === "en") {
            langButton.textContent = "ES";
            langButton.classList.add("banderaEs");
            langButton.classList.remove("banderaEn");
            themeButton.textContent = document.body.classList.contains("modoOscuro") ? "Light Mode" : "Dark Mode";
        } else {
            langButton.textContent = "EN";
            langButton.classList.add("banderaEn");
            langButton.classList.remove("banderaEs");
            themeButton.textContent = document.body.classList.contains("modoOscuro") ? "Modo Claro" : "Modo Oscuro";
        }

        // Aquí podrías también actualizar textos del contenido si quieres multilenguaje estático
    });
});
</script>
