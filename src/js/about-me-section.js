import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

document.addEventListener("DOMContentLoaded", function () {
    // Ініціалізація акордеону
    new Accordion("#accordion-container", {
        duration: 300,
        showMultiple: false,
        openOnInit: [0],
    });

    // Ініціалізація Swiper
    const swiper = new Swiper(".skills-swiper", {
        slidesPerView: "auto",
        spaceBetween: 16,
        loop: false,
        centeredSlides: false,
        navigation: {
            nextEl: ".swiper-button-next",
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        simulateTouch: true,
        touchRatio: 1,
        grabCursor: true,
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
        on: {
            slideChange: function () {
                updateNavigationButton(this);
            },
        },
    });

    function updateNavigationButton(swiper) {
        const nextButton = document.querySelector(".swiper-button-next");

        if (swiper.isEnd) {
            nextButton.classList.add("disabled");
            nextButton.setAttribute("disabled", "true");
        } else {
            nextButton.classList.remove("disabled");
            nextButton.removeAttribute("disabled");
        }
    }

    // Початковий стан кнопки
    updateNavigationButton(swiper);
});
