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
      
      const btnArrowRight = this.elem.querySelector('.carousel__arrow_right'); 
      const btnArrowLeft = this.elem.querySelector('.carousel__arrow_left'); 
      const carouselInner = this.elem.querySelector('.carousel__inner'); 
      
      let carouselSlides = this.elem.querySelectorAll('.carousel__slide'); 
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
          let innerWidth = carouselInner.offsetWidth; 
          carouselInner.style.transform = `translateX(-${innerWidth * slideClick}px)`;
          slideClick++;
          arrowHide(slideClick);
        },
    
        slideL() {
          if (slideClick === 1) {
            return;
          };
          slideClick--;
          let innerWidth = carouselInner.offsetWidth; 
          carouselInner.style.transform = `translateX(${ innerWidth - innerWidth * slideClick}px)`;
          arrowHide(slideClick);
        }
      }

      this.elem.addEventListener('click', (event) => {
        let arrowR = event.target.closest('.carousel__arrow_right');
        let arrowL = event.target.closest('.carousel__arrow_left');
      
        if (arrowR) slider.slideR();
        if (arrowL) slider.slideL();
      });
    
  }

  eventListener() {
      
      this.elem.addEventListener('product-add', (event) => {
        
      });

      this.elem.addEventListener('click', (event) => {
        let target = event.target.closest('.carousel__button');

        if (target) {
          let id = target.closest('[data-id]').dataset.id;
          let productAddEvent = new CustomEvent("product-add", {
            detail: id,
            bubbles: true
          });

          this.elem.dispatchEvent(productAddEvent)
        }
      });
  }
}



