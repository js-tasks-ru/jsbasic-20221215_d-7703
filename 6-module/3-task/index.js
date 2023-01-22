import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    
    this.slides = slides.map(({image, price, name, id}) => {
      return `
        <div class="carousel__slide" data-id="${id}">
          <img src="/assets/images/carousel/${image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${price.toFixed(2)}</span>
            <div class="carousel__title">${name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
      `}).join('');
      
    this.elem = createElement(`
      <div class="carousel">

        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>

        <div class="carousel__inner">
          ${this.slides}
        </div>
      </div>
    `);

    this.slideMove();
    this.eventListener();
  }

  slideMove() {
    document.addEventListener('DOMContentLoaded', () => {
      const carousel = document.querySelector('.carousel'); 
      const btnArrowRight = document.querySelector('.carousel__arrow_right'); 
      const btnArrowLeft = document.querySelector('.carousel__arrow_left'); 
      const carouselInner = document.querySelector('.carousel__inner'); 
      let innerWidth = carouselInner.offsetWidth; 
      let carouselSlides = document.querySelectorAll('.carousel__slide'); 
      let slideClick = 1;

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

      arrowHide(slideClick);

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

      carousel.addEventListener('click', (event) => {
        let arrowR = event.target.closest('.carousel__arrow_right');
        let arrowL = event.target.closest('.carousel__arrow_left');
      
        if (arrowR) slider.slideR();
        if (arrowL) slider.slideL();
      });
    });
    
  }

  eventListener() {
    document.addEventListener('DOMContentLoaded', () => {
      const slideList = document.querySelectorAll('.carousel__slide');
      
      let productAddEvent = new CustomEvent("product-add", {
        //detail: ,
        bubbles: true
      });

      this.elem.addEventListener('product-add', (event) => {
        console.log('добавил в корзину: ', event.detail);
      });

      this.elem.addEventListener('click', (event) => {
        let target = event.target.closest('.carousel__button');

        if (target) {
          this.elem.dispatchEvent(productAddEvent)
        }
      });
    });
    


  }
}



