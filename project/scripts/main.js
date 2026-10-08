// Function 1: Navigation Toggle & Dynamic Year
document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initFooterYear();
});

function initNavigation() {
    const hamburgerBtn = document.querySelector("#hamburger-btn");
    const primaryNav = document.querySelector("#primary-nav");

    if (hamburgerBtn && primaryNav) {
        hamburgerBtn.addEventListener("click", () => {
            primaryNav.classList.toggle("open");
            hamburgerBtn.textContent = primaryNav.classList.contains("open") ? "✖" : "☰";
        });
    }
}

function initFooterYear() {
    const yearSpan = document.querySelector("#current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}
