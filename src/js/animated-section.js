document.addEventListener("DOMContentLoaded", function () {
    const coversSection = document.querySelector('.covers-content'); 
    const coversList = document.querySelector('.covers-list'); 

    function isElementInViewport(el) {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        console.log("Координати секції:", rect);
    console.log("Висота вікна браузера:", window.innerHeight);
    
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    console.log("Результат перевірки (чи у viewport?):", isVisible);
    
    return isVisible;
       
    }

     function checkScroll() {
        if (isElementInViewport(coversSection)) {
            if (!coversList.classList.contains('.covers-list')) {
                coversList.classList.add('.covers-list');
                console.log("cover у viewport анімація не запущена");
            }
           
        } else {
            if (coversList.classList.contains('.covers-list')) {
                coversList.classList.remove('.covers-list');
                console.log("cover у viewport анімація запущена");
            }
        }
    }

    checkScroll();
    window.addEventListener('coversAnimation', checkScroll);
});