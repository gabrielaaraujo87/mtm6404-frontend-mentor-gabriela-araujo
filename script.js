document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.navbar__hamburger');
    const menu = document.querySelector('.navbar__menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});