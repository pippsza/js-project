const header = document.querySelector('.page-header');
const linksModalMenu = document.querySelectorAll('.mobile-item-link');
const burgerBtnMenu = document.querySelector('.burger-btn');
const closeButtonMobMenu = document.querySelector('.close-btn-mob-menu');
const modalMobMenu = document.querySelector('.mobile-menu');
const orderBtnMenu = document.querySelector('.btn-order-mobile-menu');
const dropdownMenu = document.querySelector('.dropdown-content');
const buttonMenu = document.querySelector('.dropdown-btn');
const linksHeaderMenu = document.querySelectorAll('.menu-item-link');

// Відстежуємо подію скролу
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Відстеження події кліку на меню (випадаючий список)
buttonMenu.addEventListener('click', () => {
  const isOpen = dropdownMenu.classList.contains('show');
  dropdownMenu.classList.toggle('show');
  document.body.classList.toggle('no-scroll', !isOpen);
});

// Закриття випадаючого меню при кліку на посилання
linksHeaderMenu.forEach(link => {
  link.addEventListener('click', () => {
    dropdownMenu.classList.remove('show');
    document.body.classList.remove('no-scroll');
  });
});

// Функція відкриття/закриття мобільного меню
function toggleMenu() {
  const isOpen = modalMobMenu.classList.contains('is-open');
  document.body.classList.toggle('no-scroll', !isOpen);
  modalMobMenu.classList.toggle('is-open');
}

burgerBtnMenu.addEventListener('click', toggleMenu);
closeButtonMobMenu.addEventListener('click', toggleMenu);

// Закриття мобільного меню при кліку на посилання
linksModalMenu.forEach(link => {
  link.addEventListener('click', () => {
    modalMobMenu.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  });
});

// Закриття мобільного меню при кліку на кнопку "Замовити"
orderBtnMenu.addEventListener('click', () => {
  modalMobMenu.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
});
