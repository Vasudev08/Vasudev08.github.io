// Function to toggle the theme
function toggleTheme() {
  const themeLink = document.getElementById("theme-link") as HTMLLinkElement;

  // Check the current theme preference in local storage
  const currentTheme = localStorage.getItem("theme") || "light";

  // Toggle the theme by changing the href attribute of the link element
  if (currentTheme === "light") {
    themeLink.href = "style.css";
    localStorage.setItem("theme", "dark"); // Set dark theme preference
  } else {
    themeLink.href = "light.css";
    localStorage.setItem("theme", "light"); // Set light theme preference
  }

  // Notify all other pages about the theme change
  const allPages = document.querySelectorAll('[data-theme="changeable"]');
  allPages.forEach((page) => {
    if (page instanceof HTMLIFrameElement) {
      page.contentWindow.postMessage({ theme: currentTheme }, "*");
    }
  });
}

const themeToggleBtn = document.getElementById(
  "theme-toggle"
) as HTMLButtonElement | null;
if (themeToggleBtn) themeToggleBtn.addEventListener("click", toggleTheme);

window.addEventListener("load", () => {
  const themeLink = document.getElementById("theme-link") as HTMLLinkElement;
  const body = document.body;
  const currentTheme = localStorage.getItem("theme") || "light";

  if (currentTheme === "light") {
    themeLink.href = "light.css";
    body.classList.add("light-theme");
  } else {
    themeLink.href = "style.css";
  }
});
