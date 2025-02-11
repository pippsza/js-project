import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from 'axios';

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    speed: 1000, // Тривалість анімації у мілісекундах (1 секунда)
    breakpoints: {
      320: {
        slidesPerView: 1, // Мобільні пристрої (320px і більше)
      },
      768: {
        slidesPerView: 2, // Планшети (768px і більше)
      },
      1440: {
        slidesPerView: 4, // Десктоп (1440px і більше)
      },
    },
  });

  function updateButtonState() {
    const prevButton = document.getElementById('custom-prev');
    const nextButton = document.getElementById('custom-next');

    prevButton.disabled = swiper.isBeginning;
    nextButton.disabled = swiper.isEnd;
  }

  function setEqualHeight() {
    const reviewItems = document.querySelectorAll('.swiper-slide');
    let maxHeight = 0;

    reviewItems.forEach(item => {
      item.style.height = 'auto'; // Скинути висоту для перевірки фактичної висоти
      const itemHeight = item.offsetHeight;
      if (itemHeight > maxHeight) {
        maxHeight = itemHeight;
      }
    });

    reviewItems.forEach(item => {
      item.style.height = `${maxHeight}px`;
    });
  }

  swiper.on('init', function () {
    updateButtonState();
    setEqualHeight();
  });

  swiper.on('reachEnd', function () {
    updateButtonState();
  });

  swiper.on('reachBeginning', function () {
    updateButtonState();
  });

  swiper.on('slideChange', function () {
    updateButtonState();
  });

  swiper.on('resize', function () {
    setEqualHeight(); // Перевстановити висоту при зміні розміру вікна
  });

  document.getElementById('custom-prev').addEventListener('click', function () {
    if (!swiper.isBeginning) {
      swiper.slidePrev();
    }
  });

  document.getElementById('custom-next').addEventListener('click', function () {
    if (!swiper.isEnd) {
      swiper.slideNext();
    }
  });

  axios
    .get('https://portfolio-js.b.goit.study/api/reviews')
    .then(response => {
      const reviewsList = document.querySelector('.swiper-wrapper');
      const reviews = response.data;

      if (reviews.length > 0) {
        reviews.forEach(review => {
          const reviewItem = document.createElement('li');
          reviewItem.classList.add('swiper-slide');
          reviewItem.innerHTML = `
            <div class="review-content">
              <img src="${review.avatar_url}" alt="${review.author}'s avatar" class="review-avatar"/>
              <h3 class="review-author">${review.author}</h3>
              <p class="review-text">${review.review}</p>
            </div>
          `;
          reviewsList.appendChild(reviewItem);
        });
      } else {
        reviewsList.innerHTML = '<li class="swiper-slide">Not found</li>';
      }

      swiper.update();
      setEqualHeight(); // Встановити рівну висоту після завантаження відгуків
      updateButtonState();
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'An error occurred: ' + error.message,
      });
      const reviewsList = document.querySelector('.swiper-wrapper');
      reviewsList.innerHTML = '<li class="swiper-slide">Not found</li>';
    });
});
