export function initTheme() {
  const stored = localStorage.getItem("theme");

  if (stored === "dark") {
    document.documentElement.classList.add("dark");
    return;
  }

  if (stored === "light") {
    document.documentElement.classList.remove("dark");
    return;
  }

  // follow system preference
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark");
  }
}
