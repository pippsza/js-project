import Accordion from 'accordion-js';
import Swiper from 'swiper';
import 'swiper/css';
import { Keyboard, Navigation, Mousewheel } from 'swiper/modules';

// акордеон
document.addEventListener('DOMContentLoaded', function () {
  new Accordion('.about-experience-list', {
    duration: 900,
    showMultiple: true,
    elementClass: `about-experience-list-element`,
    openOnInit: [0],
    
  });

  const swiperContainer = document.querySelector('.about-slider');
  const scrollButton = document.querySelector('.swiper-button-next');

  if (!swiperContainer) {
    console.error('не знайдено');
    return;
  }

  const swiper = new Swiper(swiperContainer, {
    spaceBetween: 0,
    
    loop: true,
    modules: [Navigation, Keyboard, Mousewheel],
    navigation: {
      nextEl: '.swiper-button-next',
    },
    slidesPerView: 2,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 6,
      },
    },
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 200,
      disableOnInteraction: false,
    },

    observeParents: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
      pageUpDown: false,
    },
    mousewheel: {
      invert: false,
    },
    
  });

  // клавіатура
  document.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') {
      swiper.slideNext();
    } else if (event.key === 'ArrowLeft') {
      swiper.slidePrev();
    }
  });

  //  обробник кліку
  if (scrollButton) {
    scrollButton.addEventListener('click', () => {
      swiper.slideNext();
    });
  } else {
    console.error('не знайдена');
  }

  // прокручування
  swiper.on('slideChange', () => {
    // Видаляємо клас active з усіх слайдів
    document.querySelectorAll('.swiper-slide').forEach(slide => {
      slide.classList.remove('active');
    });
  
    // Додаємо клас active тільки на поточний слайд
    const activeSlide = swiper.slides[swiper.activeIndex];
  
    if (activeSlide) {
      activeSlide.classList.add('active');
    }
  });
});
function updateSlideSize() {
  const slides = document.querySelectorAll('.swiper-slide');
  const cover = document.querySelector('.swiper-slide-cover');
  const screenWidth = window.innerWidth;

  slides.forEach(slide => {
    if (screenWidth <= 375) {
      const width = slide.offsetWidth;
      slide.style.height = width + 'px'; // Висота = ширина
    } else if (screenWidth > 375 && screenWidth <= 767) {
      slide.style.height = '130px'; // Висота 130px
    } else {
      slide.style.height = '200px'; // Висота 200px
    }
  });

  if (cover) {
    const firstSlide = slides[0]; // Беремо перший слайд для розрахунку
    if (screenWidth <= 375) {
      cover.style.height = firstSlide.offsetWidth + 'px'; // Висота як у слайда
    } else if (screenWidth > 375 && screenWidth <= 767) {
      cover.style.height = '130px';
    } else {
      cover.style.height = '200px';
    }
  }
}

// Викликаємо при зміні розміру
window.addEventListener('resize', updateSlideSize);
updateSlideSize();
