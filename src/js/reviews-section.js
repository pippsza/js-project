document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 3,
      },
    },
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
              <p class="review-author">${review.author}</p>
              <p class="review-text">${review.review}</p> 
            </div>
          `;
          reviewsList.appendChild(reviewItem);
        });
      } else {
        reviewsList.innerHTML = '<li class="swiper-slide">Not found</li>';
      }
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
