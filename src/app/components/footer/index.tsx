export function Footer() {
  return (
    <footer className="footer-modern">
      <div className="footer-modern__bg">
        <div className="footer-modern__shape footer-modern__shape--1"></div>
        <div className="footer-modern__shape footer-modern__shape--2"></div>
        <div className="footer-modern__shape footer-modern__shape--3"></div>
      </div>

      <div className="container">
        <div className="footer-modern__top wow fadeInUp" data-wow-delay="0.1s">
          <div className="footer-modern__brand">
            <a href="/" className="footer-modern__logo">
              <img src="/img/home-two/logo-dark.svg" alt="BookJar Logo" />
            </a>
            <p className="footer-modern__tagline">Discover worlds within pages. Your journey begins here.</p>
          </div>
          <div className="footer-modern__newsletter">
            <div className="footer-modern__newsletter-content">
              <h4>
                <i className="fa-solid fa-paper-plane"></i> Stay Updated
              </h4>
              <p>Get the latest books, exclusive offers, and literary news.</p>
            </div>
            <form className="footer-modern__newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button type="submit" className="btn-subscribe">
                Subscribe <i className="fa-solid fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="footer-modern__main">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-modern__widget wow fadeInUp" data-wow-delay="0.2s">
                <h5 className="footer-modern__widget-title">
                  <i className="fa-solid fa-building"></i> Company
                </h5>
                <ul className="footer-modern__links">
                  <li>
                    <a href="/about">
                      <i className="fa-solid fa-chevron-right"></i> About Us
                    </a>
                  </li>
                  <li>
                    <a href="/contact">
                      <i className="fa-solid fa-chevron-right"></i> Contact
                    </a>
                  </li>
                  <li>
                    <a href="/author">
                      <i className="fa-solid fa-chevron-right"></i> Authors
                    </a>
                  </li>
                  <li>
                    <a href="/faq">
                      <i className="fa-solid fa-chevron-right"></i> FAQs
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-modern__widget wow fadeInUp" data-wow-delay="0.3s">
                <h5 className="footer-modern__widget-title">
                  <i className="fa-solid fa-store"></i> Shop
                </h5>
                <ul className="footer-modern__links">
                  <li>
                    <a href="/shop">
                      <i className="fa-solid fa-chevron-right"></i> Browse Books
                    </a>
                  </li>
                  <li>
                    <a href="/new-arrivals">
                      <i className="fa-solid fa-chevron-right"></i> New Arrivals
                    </a>
                  </li>
                  <li>
                    <a href="/deals-offers">
                      <i className="fa-solid fa-chevron-right"></i> Deals &amp; Offers
                    </a>
                  </li>
                  <li>
                    <a href="/my-wishlist">
                      <i className="fa-solid fa-chevron-right"></i> Wishlist
                    </a>
                  </li>
                  <li>
                    <a href="/cart">
                      <i className="fa-solid fa-chevron-right"></i> Cart
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-modern__widget wow fadeInUp" data-wow-delay="0.4s">
                <h5 className="footer-modern__widget-title">
                  <i className="fa-solid fa-headset"></i> Support
                </h5>
                <ul className="footer-modern__links">
                  <li>
                    <a href="/my-orders">
                      <i className="fa-solid fa-chevron-right"></i> Track Order
                    </a>
                  </li>
                  <li>
                    <a href="/my-account">
                      <i className="fa-solid fa-chevron-right"></i> My Account
                    </a>
                  </li>
                  <li>
                    <a href="/order-track">
                      <i className="fa-solid fa-chevron-right"></i> Returns
                    </a>
                  </li>
                  <li>
                    <a href="/privacy-policy">
                      <i className="fa-solid fa-chevron-right"></i> Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms-condition">
                      <i className="fa-solid fa-chevron-right"></i> Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-modern__widget wow fadeInUp" data-wow-delay="0.5s">
                <h5 className="footer-modern__widget-title">
                  <i className="fa-solid fa-location-dot"></i> Get in Touch
                </h5>
                <div className="footer-modern__contact">
                  <div className="footer-modern__contact-item">
                    <i className="fa-solid fa-phone"></i>
                    <div>
                      <span>Call Us</span>
                      <a href="tel:610383766284">+61 (0) 3 8376 6284</a>
                    </div>
                  </div>
                  <div className="footer-modern__contact-item">
                    <i className="fa-solid fa-envelope"></i>
                    <div>
                      <span>Email Us</span>
                      <a href="mailto:hello@bookjar.com">hello@bookjar.com</a>
                    </div>
                  </div>
                  <div className="footer-modern__contact-item">
                    <i className="fa-solid fa-clock"></i>
                    <div>
                      <span>Hours</span>
                      <p>Mon - Fri: 9AM - 6PM</p>
                    </div>
                  </div>
                </div>
                <div className="footer-modern__social">
                  <a href="#" title="Facebook">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#" title="Twitter">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#" title="Instagram">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#" title="LinkedIn">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="#" title="YouTube">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-modern__bottom wow fadeInUp" data-wow-delay="0.6s">
          <div className="footer-modern__copyright">
            <p>
              © 2026 <strong>BookJar</strong>. All Rights Reserved. Made with <i className="fa-solid fa-heart"></i> for book
              lovers.
            </p>
          </div>
          <div className="footer-modern__trust">
            <div className="footer-modern__trust-item">
              <i className="fa-solid fa-shield-halved"></i>
              <span>Secure Payment</span>
            </div>
            <div className="footer-modern__trust-item">
              <i className="fa-solid fa-truck-fast"></i>
              <span>Fast Delivery</span>
            </div>
            <div className="footer-modern__trust-item">
              <i className="fa-solid fa-rotate-left"></i>
              <span>Easy Returns</span>
            </div>
          </div>
          <div className="footer-modern__payment">
            <img src="/img/home-two/visa.jpg" alt="Visa" />
            <img src="/img/home-two/maestro.jpg" alt="Mastercard" />
            <img src="/img/home-two/discover.jpg" alt="Discover" />
          </div>
        </div>
      </div>
    </footer>
  );
}
