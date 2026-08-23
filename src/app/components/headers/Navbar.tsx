interface NavbarProps {
  relative?: boolean;
}

export function Navbar({ relative = false }: NavbarProps) {
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
                        <a href="/shop-no-sidebar" className="nav-link">
                          Shop No Sidebar
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/product-single" className="nav-link">
                          Product Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/cart"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Cart
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="/cart" className="nav-link">
                          Cart
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/cart-guest" className="nav-link">
                          Cart Guest
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/checkout"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Checkout
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="/checkout" className="nav-link">
                          Checkout
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/checkout-login" className="nav-link">
                          Checkout Login
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/checkout-gift" className="nav-link">
                          Checkout Gift
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown submenu">
                <a
                  className="nav-link dropdown-toggle"
                  href="/compare"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Compare
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <a href="/compare" className="nav-link">
                      Compare
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/deals-offers" className="nav-link">
                      Deals Offers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/new-arrivals" className="nav-link">
                      New Arrivals
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
                        <ul
                          className="nav flex-column nav-pills"
                          id="v-pills-tab"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          <li className="nav-item active">
                            <a
                              className="nav-link"
                              id="v-pills-tour-tab"
                              data-bs-toggle="pill"
                              href="#v-pills-tour"
                              role="tab"
                              aria-controls="v-pills-tour"
                              aria-selected="false"
                            >
                              Utility Pages
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="v-others-menu-tab"
                              data-bs-toggle="pill"
                              href="#v-others-menu"
                              role="tab"
                              aria-controls="v-others-menu"
                              aria-selected="false"
                            >
                              Company
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="v-pills-doc-tab"
                              data-bs-toggle="pill"
                              href="#v-pills-doc"
                              role="tab"
                              aria-controls="v-pills-doc"
                              aria-selected="true"
                            >
                              Shop Pages
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="v-pills-code-tab"
                              data-bs-toggle="pill"
                              href="#v-pills-code"
                              role="tab"
                              aria-controls="v-pills-code"
                              aria-selected="false"
                            >
                              Dashboard
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="v-pills-layout-tab"
                              data-bs-toggle="pill"
                              href="#v-pills-layout"
                              role="tab"
                              aria-controls="v-pills-layout"
                              aria-selected="false"
                            >
                              Blog &amp; Author
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-7">
                        <div className="tab-content tabContent" id="v-pills-tabContent">
                          <div
                            className="tab-pane fade active show"
                            id="v-pills-tour"
                            role="tabpanel"
                            aria-labelledby="v-pills-tour-tab"
                          >
                            <div className="d-flex">
                              <ul className="list-unstyled tab_list w_100">
                                <li>
                                  <a href="/login">Sign In</a>
                                </li>
                                <li>
                                  <a href="/registration">Sign Up</a>
                                </li>
                                <li>
                                  <a href="/forgot-password">Forgot Password</a>
                                </li>
                                <li>
                                  <a href="/typography">Typography</a>
                                </li>
                                <li>
                                  <a href="/faq">Faq</a>
                                </li>
                                <li>
                                  <a href="/page-banner-style-2">Banner style 02</a>
                                </li>
                                <li>
                                  <a href="/page-banner-style-3">Banner style 03</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="v-others-menu" role="tabpanel" aria-labelledby="v-others-menu-tab">
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
                          <div className="tab-pane fade" id="v-pills-doc" role="tabpanel" aria-labelledby="v-pills-doc-tab">
                            <div className="d-flex">
                              <ul className="list-unstyled tab_list">
                                <li>
                                  <a href="/shop">Shop</a>
                                </li>
                                <li>
                                  <a href="/shop-no-sidebar">Shop No Sidebar</a>
                                </li>
                                <li>
                                  <a href="/product-single">Product Details</a>
                                </li>
                                <li>
                                  <a href="/cart">Cart</a>
                                </li>
                                <li>
                                  <a href="/cart-guest">Cart Guest</a>
                                </li>
                              </ul>
                              <ul className="list-unstyled tab_list">
                                <li>
                                  <a href="/checkout">Checkout</a>
                                </li>
                                <li>
                                  <a href="/checkout-gift">Checkout Gift</a>
                                </li>
                                <li>
                                  <a href="/checkout-login">Checkout Login</a>
                                </li>

                                <li>
                                  <a href="/my-wishlist">Wishlist</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="v-pills-code" role="tabpanel" aria-labelledby="v-pills-code-tab">
                            <div className="d-flex">
                              <ul className="list-unstyled tab_list">
                                <li>
                                  <a href="/my-account">User Profile</a>
                                </li>
                                <li>
                                  <a href="/my-orders">Orders</a>
                                </li>
                                <li>
                                  <a href="/order-track">Order Tracking</a>
                                </li>
                                <li>
                                  <a href="/order-confrmation">Thank You Page</a>
                                </li>
                                <li>
                                  <a href="/my-ebook-library">Ebook Library</a>
                                </li>
                                <li>
                                  <a href="/my-following-authors">Following Authors</a>
                                </li>
                                <li>
                                  <a href="/my-rating-reviews">Rating &amp; Authors</a>
                                </li>
                              </ul>
                              <ul className="list-unstyled tab_list">
                                <li>
                                  <a href="/my-list">Book List</a>
                                </li>
                                <li>
                                  <a href="/my-list-details">Book List Details</a>
                                </li>
                                <li>
                                  <a href="/my-list-create">Create Book List</a>
                                </li>
                                <li>
                                  <a href="/my-address">Address Book</a>
                                </li>
                                <li>
                                  <a href="/add-new-address">Add New Address</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="v-pills-layout" role="tabpanel" aria-labelledby="v-pills-layout-tab">
                            <div className="d-flex">
                              <ul className="list-unstyled tab_list">
                                <li>
                                  <a href="/blog-grid">Blog Grid</a>
                                </li>
                                <li>
                                  <a href="/blog-extend-grid">Extended Grid</a>
                                </li>
                                <li>
                                  <a href="/blog-list">Blog List</a>
                                </li>
                                <li>
                                  <a href="/blog-details">Blog Details</a>
                                </li>
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
              <li className="nav-item dropdown submenu">
                <a
                  className="nav-link dropdown-toggle"
                  href="/blog-list"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Blog
                </a>

                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <a href="/blog-grid" className="nav-link">
                      Blog Grid
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/blog-extend-grid" className="nav-link">
                      Extended Grid
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/blog-list" className="nav-link">
                      Blog List
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/blog-details" className="nav-link">
                      Blog Details
                    </a>
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
