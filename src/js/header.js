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

const header = document.querySelector('.page-header');

// Відстежуємо подію скролу
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    // Клас активується при прокрутці більше 50 пікселів
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Відстеження події кліку на мобільне меню(клік на бургер та іконка закриття) для мобільних пристроїв

const burgerBtnMenu = document.querySelector(".burger-btn");
const closeButtonMobMenu = document.querySelector(".close-btn-mob-menu");
const modalMobMenu = document.querySelector(".mobile-menu");
const linksModalMenu = document.querySelectorAll(".mobile-item-link");

function toggleMenu() {
        modalMobMenu.classList.toggle("is-open");
    }

burgerBtnMenu.addEventListener('click', toggleMenu);
closeButtonMobMenu.addEventListener('click', toggleMenu);

linksModalMenu.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
            const targetId = this.getAttribute("href"); // Отримуємо ID секції
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                // Плавний скрол до секції
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
    });
});