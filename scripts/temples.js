// Hamburger menu toggle logic
const mainNav = document.querySelector('.navigation');
const hamburgerButton = document.querySelector('#menu');

hamburgerButton.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    hamburgerButton.classList.toggle('open');
});

// Dynamic Footer Year & Last Modified Date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;