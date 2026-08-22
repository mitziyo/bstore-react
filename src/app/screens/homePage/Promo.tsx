export function Promo() {
  return (
    <section className="promo-section" style={{ padding: 80, backgroundColor: "#f8fafc" }}>
      <div className="container">
        <div className="promo-features">
          <div className="promo-feature wow fadeInUp" data-wow-delay="0.2s">
            <div className="promo-feature__icon">
              <i className="fa-solid fa-truck-fast"></i>
            </div>
            <div className="promo-feature__content">
              <h5>Free Shipping</h5>
              <p>On all orders in the USA</p>
            </div>
          </div>
          <div className="promo-feature wow fadeInUp" data-wow-delay="0.3s">
            <div className="promo-feature__icon">
              <i className="fa-solid fa-book-open"></i>
            </div>
            <div className="promo-feature__content">
              <h5>7M+ Books</h5>
              <p>Largest collection available</p>
            </div>
          </div>
          <div className="promo-feature wow fadeInUp" data-wow-delay="0.4s">
            <div className="promo-feature__icon">
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="promo-feature__content">
              <h5>120K+ Reviews</h5>
              <p>Trusted by readers worldwide</p>
            </div>
          </div>
          <div className="promo-feature wow fadeInUp" data-wow-delay="0.5s">
            <div className="promo-feature__icon">
              <i className="fa-solid fa-headset"></i>
            </div>
            <div className="promo-feature__content">
              <h5>24/7 Support</h5>
              <p>Dedicated customer service</p>
            </div>
          </div>
        </div>

        <div className="promo-cards">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="promo-card promo-card--blue wow fadeInUp" data-wow-delay="0.2s">
                <div className="promo-card__badge">New</div>
                <div className="promo-card__content">
                  <span className="promo-card__label">Just Arrived</span>
                  <h3 className="promo-card__title">New Releases</h3>
                  <p className="promo-card__text">Discover the latest bestsellers and new arrivals</p>
                  <a href="/shop" className="promo-card__btn">
                    Shop Now
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
                <div className="promo-card__image">
                  <img src="/img/home-two/NBKJ.png" alt="New Release Book" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="promo-card promo-card--orange wow fadeInUp" data-wow-delay="0.3s">
                <div className="promo-card__badge">Pre-Order</div>
                <div className="promo-card__content">
                  <span className="promo-card__label">Coming Soon</span>
                  <h3 className="promo-card__title">Pre-Order Now</h3>
                  <p className="promo-card__text">Be the first to get upcoming releases</p>
                  <a href="/shop" className="promo-card__btn">
                    Reserve Now
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
                <div className="promo-card__image">
                  <img src="/img/home-two/mo.png" alt="Pre-Order Book" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="promo-card promo-card--pink wow fadeInUp" data-wow-delay="0.4s">
                <div className="promo-card__badge">
                  <i className="fa-solid fa-fire"></i> Hot
                </div>
                <div className="promo-card__content">
                  <span className="promo-card__label">Most Popular</span>
                  <h3 className="promo-card__title">Top Rated</h3>
                  <p className="promo-card__text">Explore our highest-rated books</p>
                  <a href="/shop" className="promo-card__btn">
                    Browse Top
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
                <div className="promo-card__image">
                  <img src="/img/home-two/top.png" alt="Top Rated Book" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
