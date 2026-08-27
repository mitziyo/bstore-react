export function HeroBanner() {
  return (
    <section className="hero-banner" style={{ backgroundColor: "#E8F4EA" }}>
      <div className="hero-banner__shapes">
        <div className="shape shape--1" data-parallax='{"y": -40}'></div>
        <div className="shape shape--2" data-parallax='{"y": 30}'></div>
        <div className="shape shape--3" data-parallax='{"x": 20}'></div>
        <img
          className="shape shape--zigzag wow fadeInUp"
          data-wow-delay="0.8s"
          src="/img/home-two/zigzag2.png"
          alt=""
        />
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-banner__content">
              <span className="hero-banner__badge wow fadeInDown" data-wow-delay="0.2s">
                <i className="fa-solid fa-book-open"></i>
                #1 Online Bookstore
              </span>
              <h1 className="hero-banner__title wow fadeInUp" data-wow-delay="0.3s">
                Discover Your Next <span>Favorite</span> Book
              </h1>
              <p className="hero-banner__text wow fadeInUp" data-wow-delay="0.4s">
                From bestselling fiction to educational resources, explore thousands of books at unbeatable prices.
                Start your reading journey today.
              </p>

              <div className="hero-banner__search wow fadeInUp" data-wow-delay="0.5s">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search by title, author, or ISBN..." />
                <button type="submit">Search</button>
              </div>

              <div className="hero-banner__buttons wow fadeInUp" data-wow-delay="0.6s">
                <a href="/shop" className="btn-primary-hero">
                  <i className="fa-solid fa-shopping-bag"></i>
                  Browse Books
                </a>
                <a
                  href="#categories"
                  className="btn-secondary-hero"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <i className="fa-solid fa-compass"></i>
                  Explore Categories
                </a>
              </div>

              <div className="hero-banner__trust wow fadeInUp" data-wow-delay="0.7s">
                <div className="trust-item">
                  <i className="fa-solid fa-truck-fast"></i>
                  <span>Free Shipping</span>
                </div>
                <div className="trust-item">
                  <i className="fa-solid fa-shield-halved"></i>
                  <span>Secure Payment</span>
                </div>
                <div className="trust-item">
                  <i className="fa-solid fa-rotate-left"></i>
                  <span>Easy Returns</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-banner__image">
              <div className="hero-banner__books">
                <img
                  className="book book--main wow fadeInUp"
                  data-wow-delay="0.4s"
                  src="/img/home-two/banner_book1.png"
                  alt="Featured Book"
                />
                <img
                  className="book book--secondary wow fadeInUp"
                  data-wow-delay="0.6s"
                  src="/img/home-two/banner_book2.png"
                  alt="Featured Book"
                />
              </div>
              <div className="hero-banner__stat hero-banner__stat--1 wow fadeInRight" data-wow-delay="0.8s">
                <div className="stat-icon">
                  <i className="fa-solid fa-users"></i>
                </div>
                <div className="stat-info">
                  <strong>50K+</strong>
                  <span>Happy Readers</span>
                </div>
              </div>
              <div className="hero-banner__stat hero-banner__stat--2 wow fadeInLeft" data-wow-delay="0.9s">
                <div className="stat-icon">
                  <i className="fa-solid fa-book"></i>
                </div>
                <div className="stat-info">
                  <strong>10K+</strong>
                  <span>Books Available</span>
                </div>
              </div>
              <img className="zigzag-decor" src="/img/home-two/zigzag.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
