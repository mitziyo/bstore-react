import { useState } from "react";

interface NavbarProps {
  relative?: boolean;
}

type ExploreTab = "utility" | "company" | "shop" | "blog";

export function Navbar({ relative = false }: NavbarProps) {
  const [exploreTab, setExploreTab] = useState<ExploreTab>("utility");

  return (
    <header className={relative ? "header_area header_relative" : "header_area"}>
      <nav className="navbar navbar-expand-lg menu_one" id="header">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="/img/home-two/logo-dark.svg" alt="logo" />
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="menu_toggle">
              <span className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <span className="hamburger-cross">
                <span></span>
                <span></span>
              </span>
            </span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav menu w_menu ms-auto me-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item dropdown submenu">
                <a
                  className="nav-link dropdown-toggle"
                  href="/shop"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Shop
                </a>

                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <a href="/shop" className="nav-link">
                      Shop
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/cart" className="nav-link">
                      Cart
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/checkout" className="nav-link">
                      Checkout
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/compare" className="nav-link">
                      Compare
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown submenu">
                <a
                  className="nav-link dropdown-toggle"
                  href="/my-account"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dashboard
                </a>

                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <a href="/my-account" className="nav-link">
                      User Profile
                    </a>
                  </li>

                  <li className="nav-item dropdown submenu">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/my-orders"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Orders
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="/my-orders" className="nav-link">
                          Orders
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/order-track" className="nav-link">
                          Order Tracking
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/order-confrmation" className="nav-link">
                          Thank You Page
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="/my-ebook-library" className="nav-link">
                      Ebook Library
                    </a>
                  </li>

                  <li className="nav-item dropdown submenu">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/my-list"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Book List
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="/my-list" className="nav-link">
                          Book List
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/my-list-details" className="nav-link">
                          Book List Details
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/my-list-create" className="nav-link">
                          Create Book List
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/my-address"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Address Book
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="/my-address" className="nav-link">
                          Address Book
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/add-new-address" className="nav-link">
                          Add New Address
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="/my-following-authors" className="nav-link">
                      Following Authors
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/my-rating-reviews" className="nav-link">
                      Rating &amp; Reviews
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/my-wishlist" className="nav-link">
                      Wishlist
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown submenu mega_menu tab-demo">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Explore
                </a>
                <ul className="dropdown-menu sub">
                  <li>
                    <div className="row">
                      <div className="col-lg-5 tabHeader">
                        <ul className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                          <li className={`nav-item${exploreTab === "utility" ? " active" : ""}`}>
                            <a
                              className="nav-link"
                              href="#v-pills-tour"
                              role="tab"
                              aria-controls="v-pills-tour"
                              aria-selected={exploreTab === "utility"}
                              onMouseEnter={() => setExploreTab("utility")}
                              onClick={(e) => e.preventDefault()}
                            >
                              Utility Pages
                            </a>
                          </li>
                          <li className={`nav-item${exploreTab === "company" ? " active" : ""}`}>
                            <a
                              className="nav-link"
                              href="#v-others-menu"
                              role="tab"
                              aria-controls="v-others-menu"
                              aria-selected={exploreTab === "company"}
                              onMouseEnter={() => setExploreTab("company")}
                              onClick={(e) => e.preventDefault()}
                            >
                              Company
                            </a>
                          </li>
                          <li className={`nav-item${exploreTab === "shop" ? " active" : ""}`}>
                            <a
                              className="nav-link"
                              href="#v-pills-doc"
                              role="tab"
                              aria-controls="v-pills-doc"
                              aria-selected={exploreTab === "shop"}
                              onMouseEnter={() => setExploreTab("shop")}
                              onClick={(e) => e.preventDefault()}
                            >
                              Shop Pages
                            </a>
                          </li>
                          <li className={`nav-item${exploreTab === "blog" ? " active" : ""}`}>
                            <a
                              className="nav-link"
                              href="#v-pills-layout"
                              role="tab"
                              aria-controls="v-pills-layout"
                              aria-selected={exploreTab === "blog"}
                              onMouseEnter={() => setExploreTab("blog")}
                              onClick={(e) => e.preventDefault()}
                            >
                              Author
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-7">
                        <div className="tab-content tabContent" id="v-pills-tabContent">
                          <div
                            className={`tab-pane fade${exploreTab === "utility" ? " active show" : ""}`}
                            role="tabpanel"
                            style={{ display: exploreTab === "utility" ? undefined : "none" }}
                          >
                            <div className="d-flex">
                              <ul className="list-unstyled tab_list w_100">
                                <li>
                                  <a href="/registration">Sign Up</a>
                                </li>
                                <li>
                                  <a href="/forgot-password">Forgot Password</a>
                                </li>
                                <li>
                                  <a href="/faq">Faq</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div
                            className={`tab-pane fade${exploreTab === "company" ? " active show" : ""}`}
                            role="tabpanel"
                            style={{ display: exploreTab === "company" ? undefined : "none" }}
                          >
                            <div className="d-flex">
                              <ul className="list-unstyled tab_list w_100">
                                <li>
                                  <a href="/book-listing">Book Listing</a>
                                </li>
                                <li>
                                  <a href="/about">About</a>
                                </li>
                                <li>
                                  <a href="/contact">Contact Us</a>
                                </li>
                                <li>
                                  <a href="/terms-condition">Terms &amp; Services</a>
                                </li>
                                <li>
                                  <a href="/privacy-policy">Privacy Policy</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div
                            className={`tab-pane fade${exploreTab === "shop" ? " active show" : ""}`}
                            role="tabpanel"
                            style={{ display: exploreTab === "shop" ? undefined : "none" }}
                          >
                            <div className="d-flex">
                              <ul className="list-unstyled tab_list">
                                <li>
                                  <a href="/shop-no-sidebar">Shop No Sidebar</a>
                                </li>
                                <li>
                                  <a href="/product-single">Product Details</a>
                                </li>
                                <li>
                                  <a href="/cart-guest">Cart Guest</a>
                                </li>
                              </ul>
                              <ul className="list-unstyled tab_list">
                                <li>
                                  <a href="/checkout-gift">Checkout Gift</a>
                                </li>
                                <li>
                                  <a href="/checkout-login">Checkout Login</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div
                            className={`tab-pane fade${exploreTab === "blog" ? " active show" : ""}`}
                            role="tabpanel"
                            style={{ display: exploreTab === "blog" ? undefined : "none" }}
                          >
                            <div className="d-flex">
                              <ul className="list-unstyled tab_list">
                                <li>
                                  <a href="/author">Author</a>
                                </li>
                                <li>
                                  <a href="/author-single">Author Single</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="alter_nav">
              <ul className="navbar-nav search_cart menu">
                <li className="nav-item search">
                  <a className="nav-link search-btn" href="#">
                    <i className="ti-search"></i>
                  </a>
                  <form action="#" method="get" className="menu-search-form">
                    <div className="input-group">
                      <input type="search" className="form-control" placeholder="Search here.." />
                      <button type="submit">
                        <i className="ti-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </li>
                <li className="nav-item shpping-cart dropdown submenu">
                  <a
                    className="cart-btn nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {" "}
                    <i className="ti-shopping-cart"></i>
                    <span className="num total-cart-count">2</span>
                  </a>
                  <div className="dropdown-menu">
                    <ul className="cart-dropdown list-unstyled">
                      <li className="cart-single-item clearfix">
                        <div className="cart-img">
                          <img src="/img/cart1.jpg" alt="styler" />
                        </div>
                        <div className="cart-content text-left">
                          <p className="cart-title">
                            <a href="#">Pale pink and black buttoned dress</a>
                          </p>
                          <p>
                            <del>$400.00</del> - $350.00
                          </p>
                        </div>
                        <div className="cart-remove">
                          <a href="#" className="action">
                            <span className="ti-close"></span>
                          </a>
                        </div>
                      </li>
                      <li className="cart-single-item clearfix">
                        <div className="cart-img">
                          <img src="/img/cart1.jpg" alt="styler" />
                        </div>
                        <div className="cart-content text-left">
                          <p className="cart-title">
                            <a href="#">Vera bradley lug- gage large duffel</a>
                          </p>
                          <p>$350.00</p>
                        </div>
                        <div className="cart-remove">
                          <a href="#" className="action">
                            <span className="ti-close"></span>
                          </a>
                        </div>
                      </li>
                    </ul>
                    <div className="cart_f">
                      <div className="cart-pricing">
                        <p className="total">
                          Subtotal :
                          <span className="p-total text-end">
                            $<span className="total-cart-amount"></span>
                          </span>
                        </p>
                      </div>
                      <div className="cart-button text-center">
                        <a href="/cart" className="btn btn-cart get_btn pink">
                          View Cart
                        </a>
                        <a href="/checkout" className="btn btn-cart get_btn dark">
                          Checkout
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <a className="bj_theme_btn strock_btn hidden-sm hidden-xs" href="/login">
              <i className="fa-regular fa-user"></i>Login
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
