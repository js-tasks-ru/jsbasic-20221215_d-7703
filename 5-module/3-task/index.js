function initCarousel() {
  
  const carousel = document.querySelector('.carousel'); // основная обретка карусели
  const btnArrowRight = document.querySelector('.carousel__arrow_right'); // стрелка вправо
  const btnArrowLeft = document.querySelector('.carousel__arrow_left'); // стрелка влево
  const carouselInner = document.querySelector('.carousel__inner'); // обертка слайдов
  let innerWidth = carouselInner.offsetWidth; // вычисление ширины обертки
  let carouselSlides = document.querySelectorAll('.carousel__slide'); // чтобы узнать кол-во слайдов
  let slideClick = 1; // переменная, чтобы знать, сколько слайдов прошло (на каком сейчас слайде)
  

  // функция, которая скрывает стрелки
  function arrowHide(slide) {
    if (carouselSlides.length === 1) {
      btnArrowLeft.style.display = 'none';
      btnArrowRight.style.display = 'none';
    }
    else if (slide === 1) {
      btnArrowLeft.style.display = 'none';
    }
    else if (slide === carouselSlides.length) {
      btnArrowRight.style.display = 'none';
    }
    else if (slide != 1) {
      btnArrowLeft.style.display = '';
      btnArrowRight.style.display = '';
    }
  }

  // запуск функции, чтобы левая стрелка скрылась при открытии страницы
  arrowHide(slideClick);

  // объект слайдер с методами для передвижения слайдов
  let slider = {
    slideR() {
      if (slideClick === carouselSlides.length) {
        return;
      };
      carouselInner.style.transform = `translateX(-${innerWidth * slideClick}px)`;
      slideClick++;
      arrowHide(slideClick);
    },

    slideL() {
      if (slideClick === 1) {
        return;
      };
      slideClick--;
      carouselInner.style.transform = `translateX(${ innerWidth - innerWidth * slideClick}px)`;
      arrowHide(slideClick);
    }
  }

  // вызов переключений
  carousel.addEventListener('click', (event) => {
    let target = event.target.closest('div');
    let arrowR = target.classList.contains('carousel__arrow_right');
    let arrowL = target.classList.contains('carousel__arrow_left');
    
    if (arrowR) slider.slideR();
    if (arrowL) slider.slideL();
  });
  
}
