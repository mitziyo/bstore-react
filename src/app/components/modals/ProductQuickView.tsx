import "../../../scss/modal.scss";

export function ProductQuickView() {
  return (
    <div className="modal fade product-quickview-modal" id="productQuickView" tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <button type="button" className="close-btn" data-bs-dismiss="modal" aria-label="Close">
            <i className="icon_close"></i>
          </button>
          <div className="bj_book_single">
            <div className="bj_book_img flip">
              <div className="front">
                <img className="img-fluid" src="/img/home-two/best_book1.jpg" alt="" />
              </div>
              <div className="back">
                <img className="img-fluid" src="/img/home-two/best_book2.jpg" alt="" />
              </div>
              <div className="pr_ribbon">
                <span className="product-badge">New</span>
              </div>
            </div>
            <div className="bj_book_details">
              <h2>A Storytelling Workbook</h2>
              <ul className="list-unstyled book_meta">
                <li>
                  By:<a href="/author-single">Phillip Siphron</a>
                </li>
                <li>
                  Category:<a href="/shop-sidebar">Drama</a>
                </li>
                <li>
                  Tag:<a href="/shop-sidebar">Best Sellers</a>
                </li>
              </ul>
              <div className="ratting review">
                <div className="star-rating">
                  <span>4.9</span>
                </div>
                <a href="#product_review" className="woocommerce-review-link">
                  <span className="count"> 50 </span>Reviews
                </a>
              </div>
              <div className="price">$10</div>
              <p>
                Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit aut fugit, sed quia consequuntur.
              </p>
              <ul className="product_meta list-unstyled">
                <li>
                  <span>Publisher:</span>Avery
                </li>
                <li>
                  <span>Publication date:</span>July 20, 2024
                </li>
                <li>
                  <span>Print length:</span>320 pages
                </li>
                <li>
                  <span>ISBN:</span>3288365629
                </li>
                <li>
                  <span>Language:</span>English
                </li>
              </ul>
              <div className="product_sidbar">
                <div className="product-qty">
                  Qty:
                  <div className="cart_quantity">
                    <button className="quantity_btn minus">
                      <i className="icon_minus-06"></i>
                    </button>
                    <input type="number" min={1} max={99} step={1} defaultValue={1} />
                    <button className="quantity_btn plus">
                      <i className="icon_plus"></i>
                    </button>
                  </div>
                </div>

                <div className="single_product_price_variation mb-3">
                  <label className="variation_single">
                    <input className="variation_single_input" name="variation_single" type="radio" defaultChecked />
                    <span className="price-details">
                      <span className="price-type">Handcover</span>
                      <span className="price-cost">$10</span>
                    </span>
                  </label>
                  <label className="variation_single">
                    <input className="variation_single_input" name="variation_single" type="radio" />
                    <span className="price-details">
                      <span className="price-type">eBook</span>
                      <span className="price-cost">$20</span>
                    </span>
                  </label>
                  <label className="variation_single">
                    <input className="variation_single_input" name="variation_single" type="radio" />
                    <span className="price-details">
                      <span className="price-type">Print</span>
                      <span className="price-cost">$30</span>
                    </span>
                  </label>
                </div>
                <div className="d-flex flex-column gap-2">
                  <a href="/checkout" className="bj_theme_btn">
                    {" "}
                    Buy Now
                  </a>
                  <button
                    className="bj_theme_btn add-to-cart-automated"
                    type="button"
                    data-name="A Storytelling Workbook"
                    data-price="10"
                    data-img="/img/home-two/best_book1.jpg"
                    data-mrp="15"
                  >
                    <i className="icon_cart_alt"></i>Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
