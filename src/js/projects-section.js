import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';


document.addEventListener('DOMContentLoaded', () => {
  const sliderWrapper = document.querySelector('.slide-prj');
  const nextButton = document.querySelector('.button-next-prj');
  const prevButton = document.querySelector('.button-prev-prj');
  const projectLinks = document.querySelectorAll('.see-project');

  const swiper = new Swiper('.prj-slider', {

    modules: [Navigation, Keyboard, Mousewheel],
    loop: false,
    navigation: {
      nextEl: '.button-next-prj',
      prevEl: '.button-prev-prj',
    },
    autoplay: {
      delay: 200,
      disableOnInteraction: false,
    },
    mousewheel: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    on: {
      slideChange: () => {
        updateLinks(swiper);
      }
    },
  
  
  });
  const updateSliderPosition = (swiper) => {
    sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
  };

  const updateButtons = () => {
    prevButton.disabled = currentSlide === 0;
    nextButton.disabled = currentSlide === totalSlides - 1;
  };

  const updateLinks = () => {
    projectLinks.forEach((link, index) => {
     if (index === swiper.activeIndex) {
        link.removeAttribute('tabindex');
        link.style.pointerEvents = 'auto';
      } else {
        link.setAttribute('tabindex', '-1');
        link.style.pointerEvents = 'none';
      }
    });
  };
  swiper();
  updateButtons();
  updateLinks();
});