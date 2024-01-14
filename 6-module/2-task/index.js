import createElement from "../../assets/lib/create-element.js";
export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = product;
  }

  set elem(product) {
    this.product = createElement(`
    <div class="card">
    <div class="card__top">
        <img src="/assets/images/products/${
          this.product.image
        }" class="card__image" alt="product">
        <span class="card__price">€${this.product.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${this.product.name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
</div>

`);

    let btn = this.product.querySelector(".card__button");

    btn.addEventListener("click", (event) => {
      let btn = event.target.closest("BUTTON");

      if (btn) {
        let myEvent = new CustomEvent("product-add", {
          detail: product.id,
          bubbles: true,
        });

        btn.dispatchEvent(myEvent);
      }
    });

    btn.addEventListener("product-add", (event) => {
      event.detail;
    });
  }
  get elem() {
    return (this.product = this.product);
  }
}
