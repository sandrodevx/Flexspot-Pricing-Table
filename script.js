const themeButton = document.querySelector(".toggle-theme");

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    themeButton.textContent = newTheme === "light" ? "Modo Oscuro" : "Modo Claro";
}

themeButton.addEventListener("click", toggleTheme);

// Aplicar el tema guardado
const savedTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", savedTheme);
themeButton.textContent = savedTheme === "light" ? "Modo Oscuro" : "Modo Claro";
