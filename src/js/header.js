// Відстеження події кліку на меню(випадаючий список) для планшетних і десктопних пристроїв

const dropdownMenu = document.querySelector(".dropdown-content");
const buttonMenu = document.querySelector(".dropdown-btn");
buttonMenu.addEventListener('click', () => {
    if(dropdownMenu.classList.contains('show')) {
        dropdownMenu.classList.remove('show');
    } else {
        dropdownMenu.classList.add('show');
    }
});
// Відстеження події кліку на мобільне меню(клік на бургер та іконка закриття) для мобільних пристроїв

const burgerBtnMenu = document.querySelector(".burger-btn");
const closeButtonMobMenu = document.querySelector(".close-btn-mob-menu");
const modalMobMenu = document.querySelector(".mobile-menu");
const linksModalMenu = document.querySelectorAll(".menu-item-link");

function toggleMenu() {
        modalMobMenu.classList.toggle("is-open");
    }

burgerBtnMenu.addEventListener('click', toggleMenu);
closeButtonMobMenu.addEventListener('click', toggleMenu);

linksModalMenu.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
        toggleMenu(); 
    });
});