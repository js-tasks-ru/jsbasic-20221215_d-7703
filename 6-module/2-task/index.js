import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.id = product.id,
    this.elem = createElement(`
      <div class="card">
        <div class="card__top">
            <img src="/assets/images/products/${product.image}" class="card__image" alt="product">
            <span class="card__price">€${product.price.toFixed(2)}</span>
        </div>
        <div class="card__body">
            <div class="card__title">${product.name}</div>
            <button type="button" class="card__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
        </div>
      </div>
    `);
    
    this.addEventListeners();
  }

  addEventListeners() {
    let producAddEvent = new CustomEvent("product-add", {
      detail: this.id,
      bubbles: true
    });

    this.elem.addEventListener('product-add', (event) => {
      console.log('добавлено в корзину: ', event.detail);
    });

    this.elem.addEventListener('click', (event) => {
      let target = event.target.closest('.card__button');

      if (target) {
         this.elem.dispatchEvent(producAddEvent);
      }
    });
  };
}