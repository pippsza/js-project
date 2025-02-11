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

// Відстеження події кліку на меню(випадаючий список) для планшетних і десктопних пристроїв

const dropdownMenu = document.querySelector('.dropdown-content');
const buttonMenu = document.querySelector('.dropdown-btn');
const linksHeaderMenu = document.querySelectorAll('.menu-item-link');
buttonMenu.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});
// Закриття меню при кліку на посилання
linksHeaderMenu.forEach(link => {
  link.addEventListener('click', () => {
    dropdownMenu.classList.remove('show');
  });
});

// Відстеження події кліку на мобільне меню(клік на бургер та іконка закриття) для мобільних пристроїв та закриття меню після переходу на секцію

const linksModalMenu = document.querySelectorAll('.mobile-item-link');
const burgerBtnMenu = document.querySelector('.burger-btn');
const closeButtonMobMenu = document.querySelector('.close-btn-mob-menu');
const modalMobMenu = document.querySelector('.mobile-menu');
const orderBtnMenu = document.querySelector('.btn-order-mobile-menu');

function toggleMenu() {
  modalMobMenu.classList.toggle('is-open');
  document.body.classList.toggle('no-scroll');
}
burgerBtnMenu.addEventListener('click', toggleMenu);
closeButtonMobMenu.addEventListener('click', toggleMenu);

// Закриття меню при кліку на посилання
linksModalMenu.forEach(link => {
  link.addEventListener('click', () => {
    modalMobMenu.classList.remove('is-open');
  });
});
orderBtnMenu.addEventListener('click', () => {
  modalMobMenu.classList.remove('is-open');
});
