export function BestBooks() {
  return (
    <section className="best-books-section" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <div className="section-header section-header--inline">
          <div className="section-header__left">
            <span className="section-header__badge wow fadeInDown" data-wow-delay="0.1s">
              <i className="fa-solid fa-fire-flame-curved"></i>
              Trending Now
            </span>
            <h2 className="section-header__title wow fadeInUp" data-wow-delay="0.2s">
              Books of the Month
            </h2>
          </div>
          <a href="/shop" className="section-header__link wow fadeInRight" data-wow-delay="0.3s">
            View All Books
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="best-book-card wow fadeInUp" data-wow-delay="0.2s">
              <div className="best-book-card__image">
                <img src="/img/home-two/best_book1.jpg" alt="The Art of Fashion" />
                <span className="best-book-card__badge">Bestseller</span>
                <button className="best-book-card__wishlist" data-bs-toggle="tooltip" title="Add to Wishlist">
                  <i className="fa-regular fa-heart"></i>
                </button>
              </div>
              <div className="best-book-card__content">
                <div className="best-book-card__meta">
                  <span className="category">Fiction</span>
                  <div className="rating">
                    <i className="fa-solid fa-star"></i>
                    <span>4.9</span>
                    <span className="reviews">(1,221)</span>
                  </div>
                </div>
                <h3 className="best-book-card__title">
                  <a href="/product-single">The Art of Fashion</a>
                </h3>
                <p className="best-book-card__author">
                  by <a href="/author-single">Sero Glan</a>
                </p>

                <ul className="best-book-card__features">
                  <li>
                    <i className="fa-solid fa-check"></i> Ages 12+
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Published 2024
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 320 Pages
                  </li>
                </ul>

                <div className="best-book-card__footer">
                  <div className="price">
                    <span className="current">$125</span>
                    <span className="original">$150</span>
                  </div>
                  <button
                    className="add-cart-btn add-to-cart-automated"
                    data-name="The Art of Fashion"
                    data-img="/img/home-two/best_book1.jpg"
                    data-price="125"
                    data-mrp="150"
                  >
                    <i className="fa-solid fa-cart-plus"></i>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="best-book-card wow fadeInUp" data-wow-delay="0.3s">
              <div className="best-book-card__image">
                <img src="/img/home-two/best_book2.jpg" alt="Creative Minds" />
                <span className="best-book-card__badge best-book-card__badge--new">New</span>
                <button className="best-book-card__wishlist" data-bs-toggle="tooltip" title="Add to Wishlist">
                  <i className="fa-regular fa-heart"></i>
                </button>
              </div>
              <div className="best-book-card__content">
                <div className="best-book-card__meta">
                  <span className="category">Non-Fiction</span>
                  <div className="rating">
                    <i className="fa-solid fa-star"></i>
                    <span>4.8</span>
                    <span className="reviews">(1,456)</span>
                  </div>
                </div>
                <h3 className="best-book-card__title">
                  <a href="/product-single">Creative Minds</a>
                </h3>
                <p className="best-book-card__author">
                  by <a href="/author-single">Maria Johnson</a>
                </p>

                <ul className="best-book-card__features">
                  <li>
                    <i className="fa-solid fa-check"></i> All Ages
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Published 2024
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 256 Pages
                  </li>
                </ul>

                <div className="best-book-card__footer">
                  <div className="price">
                    <span className="current">$105</span>
                    <span className="original">$130</span>
                  </div>
                  <a href="/product-single" className="view-btn">
                    View Details
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
