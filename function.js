// Function to toggle the theme
function toggleTheme() {
    var themeLink = document.getElementById("theme-link");
    // Check the current theme preference in local storage
    var currentTheme = localStorage.getItem("theme") || "light";
    // Toggle the theme by changing the href attribute of the link element
    if (currentTheme === "light") {
        themeLink.href = "style.css";
        localStorage.setItem("theme", "dark"); // Set dark theme preference
    }
    else {
        themeLink.href = "light.css";
        localStorage.setItem("theme", "light"); // Set light theme preference
    }
    // Notify all other pages about the theme change
    var allPages = document.querySelectorAll('[data-theme="changeable"]');
    allPages.forEach(function (page) {
        if (page instanceof HTMLIFrameElement) {
            page.contentWindow.postMessage({ theme: currentTheme }, "*");
        }
    });
}
var themeToggleBtn = document.getElementById("theme-toggle");
if (themeToggleBtn)
    themeToggleBtn.addEventListener("click", toggleTheme);
window.addEventListener("load", function () {
    var themeLink = document.getElementById("theme-link");
    var body = document.body;
    var currentTheme = localStorage.getItem("theme") || "light";
    if (currentTheme === "light") {
        themeLink.href = "light.css";
        body.classList.add("light-theme");
    }
    else {
        themeLink.href = "style.css";
    }
});
