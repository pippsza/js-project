import '/main';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', () => {
  const sliderWrapper = document.querySelector('.slide-prj');
  const slides = document.querySelectorAll('.prj-swiper-slide');
  const nextButton = document.querySelector('.button-next-prj');
  const prevButton = document.querySelector('.button-prev-prj');
  const projectLinks = document.querySelectorAll('.see-project');

  let currentSlide = 0;
  const totalSlides = slides.length;

  const updateSliderPosition = () => {
    sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
  };

  const updateButtons = () => {
    prevButton.disabled = currentSlide === 0;
    nextButton.disabled = currentSlide === totalSlides - 1;
  };

  const updateLinks = () => {
    projectLinks.forEach((link, index) => {
      link.setAttribute('tabindex', index === currentSlide ? '0' : '-1');
    });
  };

  const goToNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      updateSliderPosition();
      updateButtons();
      updateLinks();
    }
  };

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateSliderPosition();
      updateButtons();
      updateLinks();
    }
  };

  nextButton.addEventListener('click', goToNextSlide);
  prevButton.addEventListener('click', goToPrevSlide);

  document.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') goToNextSlide();
    if (event.key === 'ArrowLeft') goToPrevSlide();
  });

  let startX = 0;
  let isDragging = false;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let endX = 0;

  sliderWrapper.addEventListener('mousedown', event => {
    isDragging = true;
    startX = event.clientX;
    sliderWrapper.style.transition = 'none';
  });

  document.addEventListener('mousemove', event => {
    if (!isDragging) return;
    const currentX = event.clientX;
    const moveX = currentX - startX;
    currentTranslate = prevTranslate + moveX;
    sliderWrapper.style.transform = `translateX(${currentTranslate}px)`;
  });

  document.addEventListener('mouseup', event => {
    if (!isDragging) return;
    isDragging = false;
    sliderWrapper.style.transition = 'transform 0.3s ease-out';

    const moveDistance = event.clientX - startX;
    if (moveDistance < -50 && currentSlide < totalSlides - 1) {
      goToNextSlide();
    } else if (moveDistance > 50 && currentSlide > 0) {
      goToPrevSlide();
    } else {
      updateSliderPosition();
    }
    prevTranslate = -currentSlide * sliderWrapper.clientWidth;
  });

  

  sliderWrapper.addEventListener('touchstart', event => {
    startX = event.touches[0].clientX;
  });

  sliderWrapper.addEventListener('touchmove', event => {
    endX = event.touches[0].clientX;
  });

  sliderWrapper.addEventListener('touchend', () => {
    if (startX > endX + 50) {
      goToNextSlide();
    } else if (startX < endX - 50) {
      goToPrevSlide();
    }
  });

  updateSliderPosition();
  updateButtons();
  updateLinks();
});