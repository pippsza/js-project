import Accordion from 'accordion-js';
import Swiper from 'swiper';



// акордеон
document.addEventListener('DOMContentLoaded', function () {
  new Accordion('#accordion-container', {
    duration: 2000,
    showMultiple: false,
    openOnInit: [0],
  });

  const swiperContainer = document.querySelector('.about-slider');
  const scrollButton = document.querySelector('.swiper-button-next');

  if (!swiperContainer) {
    console.error('не знайдено');
    return;
  }

  const swiper = new Swiper(swiperContainer, {
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
      delay: 2000,
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
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 6,
      },
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
    document.querySelectorAll('.swiper-slide').forEach(slide => {
      slide.classList.remove('active');
    });

    const activeSlide = swiper.slides[swiper.activeIndex];
    if (activeSlide) {
      activeSlide.classList.add('active');
    }
  });
});
