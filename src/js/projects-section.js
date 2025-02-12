import '/main';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', () => {
  const sliderWrapper = document.querySelector('.slide-prj');
  const slides = document.querySelectorAll('.project');
  const nextButton = document.querySelector('.button-next-prj');
  const prevButton = document.querySelector('.button-prev-prj');
  const projectLinks = document.querySelectorAll('.see-project');

  let currentSlide = 0;
  const totalSlides = slides.length;

  const updateSliderPosition = () => {
    sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
  };

  const updateButtons = () => {
    if (currentSlide === 0) {
      prevButton.disabled = true;
      prevButton.setAttribute('tabindex', '-1');
    } else {
      prevButton.disabled = false;
      prevButton.removeAttribute('tabindex');
    }

    if (currentSlide === totalSlides - 1) {
      nextButton.disabled = true;
      nextButton.setAttribute('tabindex', '-1');
    } else {
      nextButton.disabled = false;
      nextButton.removeAttribute('tabindex');
    }
  };

  const updateLinks = () => {
    projectLinks.forEach((link, index) => {
      if (index === currentSlide) {
        link.setAttribute('tabindex', '0');
      } else {
        link.setAttribute('tabindex', '-1');
      }
    });
  };

  nextButton.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      updateSliderPosition();
      updateButtons();
      updateLinks();
    }
  });

  prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateSliderPosition();
      updateButtons();
      updateLinks();
    }
  });

  updateSliderPosition();
  updateButtons();
  updateLinks();
});
