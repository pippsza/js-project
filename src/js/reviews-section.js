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
    speed: 1000,
    breakpoints: {
      320: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1440: { slidesPerView: 4 },
    },
  });

  function updateButtonState() {
    const prevButton = document.getElementById('custom-prev');
    const nextButton = document.getElementById('custom-next');

    prevButton.disabled = swiper.isBeginning;
    nextButton.disabled = swiper.isEnd;
  }

  function setEqualHeight() {
    const reviewItems = document.querySelectorAll('.reviews-slide');
    let maxHeight = 0;

    reviewItems.forEach(item => {
      item.style.height = 'auto';
      maxHeight = Math.max(maxHeight, item.offsetHeight);
    });

    reviewItems.forEach(item => {
      item.style.height = `${maxHeight}px`;
    });
  }

  swiper.on('init', () => {
    updateButtonState();
    setEqualHeight();
  });

  swiper.on('reachEnd', updateButtonState);
  swiper.on('reachBeginning', updateButtonState);
  swiper.on('slideChange', updateButtonState);
  swiper.on('resize', setEqualHeight);

  document.getElementById('custom-prev').addEventListener('click', () => {
    if (!swiper.isBeginning) swiper.slidePrev();
  });

  document.getElementById('custom-next').addEventListener('click', () => {
    if (!swiper.isEnd) swiper.slideNext();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      swiper.slidePrev();
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      swiper.slideNext();
    }
  });

  async function loadReviews() {
    try {
      const response = await axios.get(
        'https://portfolio-js.b.goit.study/api/reviews'
      );
      const reviewsList = document.querySelector('.reviews-wrapper');
      const reviews = response.data;

      if (reviews.length > 0) {
        reviews.forEach(review => {
          const reviewItem = document.createElement('li');
          reviewItem.classList.add('swiper-slide');
          reviewItem.classList.add('reviews-slide');
          reviewItem.innerHTML = `
            <div class="review-content">
              <img src="${review.avatar_url}" alt="${review.author}'s avatar" class="review-avatar"/>
              <p class="review-author">${review.author}</p>
              <p class="review-text">${review.review}</p>
            </div>
          `;
          reviewsList.appendChild(reviewItem);
        });
      } else {
        reviewsList.innerHTML = '<li class="swiper-slide">Not found</li>';
      }

      swiper.update();
      setEqualHeight();
      updateButtonState();
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: 'An error occurred: ' + error.message,
      });
      const reviewsList = document.querySelector('.reviews-wrapper');
      reviewsList.innerHTML = '<li class="swiper-slide">Not found</li>';
    }
  }

  loadReviews();
});
