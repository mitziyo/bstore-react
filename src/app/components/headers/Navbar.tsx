import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGlobals } from "../../hooks/useGlobals";

interface NavbarProps {
  relative?: boolean;
}

type ExploreTab = "utility" | "company" | "shop" | "blog";

const SHOP_PATHS = ["/shop", "/cart", "/deals-offers", "/new-arrivals"];
const DASHBOARD_PATHS = [
  "/my-account",
  "/my-orders",
  "/order-track",
  "/order-confrmation",
  "/my-ebook-library",
  "/my-list",
  "/my-list-details",
  "/my-list-create",
  "/my-address",
  "/add-new-address",
  "/my-following-authors",
  "/my-rating-reviews",
  "/my-wishlist",
];

export function Navbar({ relative = false }: NavbarProps) {
  const { pathname } = useLocation();
  const { basket } = useGlobals();
  const [exploreTab, setExploreTab] = useState<ExploreTab>("utility");
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <header className={relative ? "header_area header_relative" : "header_area"}>
      <nav className="navbar navbar-expand-lg menu_one" id="header">
        <div className="container">
          <Link className="navbar-brand logo-lockup" to="/">
            <img src="/icons/logo-icon.png" alt="" />
            <span>LightBooks</span>
          </Link>
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
              <li className={`nav-item${pathname === "/" ? " active" : ""}`}>
                <Link className="nav-link" to="/">
                  HOME
                </Link>
              </li>
              <li className={`nav-item dropdown submenu${SHOP_PATHS.includes(pathname) ? " active" : ""}`}>
                <Link
                  className="nav-link dropdown-toggle"
                  to="/shop"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Shop
                </Link>

                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link to="/shop" className="nav-link">
                      Shop
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/cart" className="nav-link">
                      Cart
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/deals-offers" className="nav-link">
                      Deals Offers
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/new-arrivals" className="nav-link">
                      New Arrivals
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={`nav-item dropdown submenu${DASHBOARD_PATHS.includes(pathname) ? " active" : ""}`}>
                <Link
                  className="nav-link dropdown-toggle"
                  to="/my-account"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dashboard
                </Link>

                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link to="/my-account" className="nav-link">
                      User Profile
                    </Link>
                  </li>

                  <li className="nav-item dropdown submenu">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/my-orders"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Orders
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link to="/my-orders" className="nav-link">
                          Orders
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/order-track" className="nav-link">
                          Order Tracking
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/order-confrmation" className="nav-link">
                          Thank You Page
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link to="/my-ebook-library" className="nav-link">
                      Ebook Library
                    </Link>
                  </li>

                  <li className="nav-item dropdown submenu">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/my-list"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Book List
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link to="/my-list" className="nav-link">
                          Book List
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/my-list-details" className="nav-link">
                          Book List Details
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/my-list-create" className="nav-link">
                          Create Book List
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/my-address"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Address Book
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link to="/my-address" className="nav-link">
                          Address Book
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/add-new-address" className="nav-link">
                          Add New Address
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link to="/my-following-authors" className="nav-link">
                      Following Authors
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/my-rating-reviews" className="nav-link">
                      Rating &amp; Reviews
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/my-wishlist" className="nav-link">
                      Wishlist
                    </Link>
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
                                  <Link to="/registration">Sign Up</Link>
                                </li>
                                <li>
                                  <Link to="/forgot-password">Forgot Password</Link>
                                </li>
                                <li>
                                  <Link to="/faq">Faq</Link>
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
                                  <Link to="/about">About</Link>
                                </li>
                                <li>
                                  <Link to="/contact">Contact Us</Link>
                                </li>
                                <li>
                                  <Link to="/terms-condition">Terms &amp; Services</Link>
                                </li>
                                <li>
                                  <Link to="/privacy-policy">Privacy Policy</Link>
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
                                  <Link to="/shop-no-sidebar">Shop No Sidebar</Link>
                                </li>
                                <li>
                                  <Link to="/shop">Product Details</Link>
                                </li>
                                <li>
                                  <Link to="/cart-guest">Cart Guest</Link>
                                </li>
                              </ul>
                              <ul className="list-unstyled tab_list">
                                <li>
                                  <Link to="/checkout-gift">Checkout Gift</Link>
                                </li>
                                <li>
                                  <Link to="/checkout-login">Checkout Login</Link>
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
                                  <Link to="/author">Author</Link>
                                </li>
                                <li>
                                  <Link to="/author-single">Author Single</Link>
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
                <li className={`nav-item search${searchOpen ? " open" : ""}`}>
                  <a
                    className="nav-link search-btn"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (!searchOpen) {
                        setTimeout(() => searchInputRef.current?.focus(), 500);
                      }
                      setSearchOpen(!searchOpen);
                    }}
                  >
                    <i className="ti-search"></i>
                  </a>
                  <form action="#" method="get" className="menu-search-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="input-group">
                      <input ref={searchInputRef} type="search" className="form-control" placeholder="Search here.." />
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
                    <span className="num total-cart-count">{basket.cartItems.length}</span>
                  </a>
                  <div className="dropdown-menu">
                    {basket.cartItems.length === 0 ? (
                      <p className="text-center mb-0 p-3">Your cart is empty.</p>
                    ) : (
                      <>
                        <ul className="cart-dropdown list-unstyled">
                          {basket.cartItems.map((item) => (
                            <li className="cart-single-item clearfix" key={item._id}>
                              <div className="cart-img">
                                <img src={item.image} alt={item.title} />
                              </div>
                              <div className="cart-content text-left">
                                <p className="cart-title">
                                  <Link to={`/book/${item._id}`}>{item.title}</Link>
                                </p>
                                <p>
                                  {item.quantity} x ${item.price}
                                </p>
                              </div>
                              <div className="cart-remove">
                                <a
                                  href="#"
                                  className="action"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    basket.onDelete(item);
                                  }}
                                >
                                  <span className="ti-close"></span>
                                </a>
                              </div>
                            </li>
                          ))}
                        </ul>
                        <div className="cart_f">
                          <div className="cart-pricing">
                            <p className="total">
                              Subtotal :
                              <span className="p-total text-end">
                                ${basket.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}
                              </span>
                            </p>
                          </div>
                          <div className="cart-button text-center">
                            <Link to="/cart" className="btn btn-cart get_btn pink">
                              View Cart
                            </Link>
                            <Link to="/checkout" className="btn btn-cart get_btn dark">
                              Checkout
                            </Link>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </li>
              </ul>
            </div>
            <Link className="bj_theme_btn strock_btn hidden-sm hidden-xs" to="/login">
              <i className="fa-regular fa-user"></i>Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
