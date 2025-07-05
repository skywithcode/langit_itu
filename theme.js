document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const faviconTag = document.getElementById("faviconTag");
  const toggleBtn = document.getElementById("darkToggle");

  function updateFavicon(mode) {
    const path =
      mode === "dark" ? "../favicon-dark.png" : "../favicon-light.png";
    faviconTag.setAttribute("href", path);
  }

  function setTheme(mode) {
    html.classList.remove("dark-mode", "light-mode");
    html.classList.add(`${mode}-mode`);
    localStorage.setItem("theme", mode);
    updateFavicon(mode);
    toggleBtn.textContent = mode === "dark" ? "🌙" : "🌞";
  }

  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
  setTheme(initialTheme);

  toggleBtn.onclick = () => {
    const current = html.classList.contains("dark-mode") ? "dark" : "light";
    const newTheme = current === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      const newTheme = e.matches ? "dark" : "light";
      setTheme(newTheme);
    });
});
