import { Link, useLocation } from "react-router-dom";
import "../../../scss/cart/cart.scss";
import "../../../scss/orderConfirmation/orderConfirmation.scss";
import type { Order } from "../../../lib/types/order";

interface RecommendedProduct {
  id: string;
  image: string;
  title: string;
  author: string;
  authorHref: string;
  price: string;
  original?: string;
  rating: number;
  reviews: number;
  badge?: { label: string; variant: "sale" | "new" | "bestseller" };
}

const RECOMMENDED_PRODUCTS: RecommendedProduct[] = [
  {
    id: "p1",
    image: "/img/home/choice-4.png",
    title: "Echoes of Eternity",
    author: "Rick Riordan",
    authorHref: "/author-single",
    price: "$20.00",
    original: "$25.00",
    rating: 5,
    reviews: 252,
    badge: { label: "-20%", variant: "sale" },
  },
  {
    id: "p2",
    image: "/img/home/choice-2.png",
    title: "I Must Betray You",
    author: "Rick Riordan",
    authorHref: "/author-single",
    price: "$25.00",
    rating: 4,
    reviews: 189,
    badge: { label: "New", variant: "new" },
  },
  {
    id: "p3",
    image: "/img/home/choice-3.png",
    title: "How To Babysit A Grandpa",
    author: "Jean Reagan",
    authorHref: "/author-single",
    price: "$18.00",
    original: "$24.00",
    rating: 5,
    reviews: 412,
    badge: { label: "Bestseller", variant: "bestseller" },
  },
  {
    id: "p4",
    image: "/img/home/choice-1.png",
    title: "Surprisingly Sarah",
    author: "Terri Libenson",
    authorHref: "/author-single",
    price: "$22.00",
    rating: 4.5,
    reviews: 328,
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="product-card__stars">
      {[1, 2, 3, 4, 5].map((n) => {
        const icon =
          n <= Math.floor(rating)
            ? "fa-solid fa-star"
            : n - rating === 0.5
              ? "fa-solid fa-star-half-stroke"
              : "fa-regular fa-star";
        return <i className={icon} key={n}></i>;
      })}
    </div>
  );
}

export function OrderConfirmation() {
  const location = useLocation();
  const order = (location.state as { order?: Order } | null)?.order;
  const subtotal = order ? order.orderTotal - order.orderDelivery : 0;

  return (
    <>
      <section className="bj_account_dashboard pb-0" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="account_dashboard_content account_order_confirmation mt-4 me-lg-2">
                <div className="content_body">
                  <div className="thanksgiving_title">
                    <div>
                      <div className="icon">
                        <i className="fas fa-check"></i>
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-2">Thank you for your order</h4>
                      {order && (
                        <div className="ordr_number">
                          Order Number: <span className="copy_number_widget">{order._id}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="order_information">
                    <p className="mb-4">Your payment was accepted and your order has been placed.</p>
                  </div>
                  <div className="d-flex flex-column flex-sm-row justify-content-end gap-3">
                    <Link to="/shop" className="bj_theme_btn strock_btn">
                      Continue shopping
                    </Link>
                    <Link to="/my-orders" className="bj_theme_btn">
                      View My Orders
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {order && (
              <div className="col-lg-4">
                <div className="cart_checkout_summary mt-4 ms-lg-2">
                  <div className="cart_checkout_header">
                    <h5>Order Summary</h5>
                  </div>
                  <div className="cart_checkout_body">
                    <div className="checkout_item">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="checkout_item">
                      <span>Delivery</span>
                      <span>{order.orderDelivery === 0 ? "Free" : `$${order.orderDelivery.toFixed(2)}`}</span>
                    </div>
                    <div className="checkout_item strong">
                      <span>Total</span>
                      <span>${order.orderTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="popular-products sec_padding" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <div className="section-header text-center wow fadeInUp" data-wow-delay="0.2s">
            <span className="section-header__badge">
              <i className="fa-solid fa-fire"></i>
              Recommended For You
            </span>
            <h2 className="section-header__title">Popular Products You May Like</h2>
            <p className="section-header__desc">Discover your next favorite read from our curated selection</p>
          </div>

          <div className="products-grid">
            {RECOMMENDED_PRODUCTS.map((product, i) => (
              <div className="product-card wow fadeInUp" data-wow-delay={`${(i + 1) * 0.1}s`} key={product.id}>
                <div className="product-card__image">
                  {product.badge && (
                    <span className={`product-card__badge product-card__badge--${product.badge.variant}`}>
                      {product.badge.label}
                    </span>
                  )}
                  <a href="/product-single">
                    <img src={product.image} alt={product.title} />
                  </a>
                  <div className="product-card__actions">
                    <button className="product-card__action" title="Quick View">
                      <i className="fa-regular fa-eye"></i>
                    </button>
                    <button className="product-card__action" title="Add to Wishlist">
                      <i className="fa-regular fa-heart"></i>
                    </button>
                    <button className="product-card__action" title="Add to Cart">
                      <i className="fa-solid fa-cart-plus"></i>
                    </button>
                  </div>
                </div>
                <div className="product-card__content">
                  <div className="product-card__rating">
                    <Stars rating={product.rating} />
                    <span className="product-card__reviews">({product.reviews})</span>
                  </div>
                  <h4 className="product-card__title">
                    <a href="/product-single">{product.title}</a>
                  </h4>
                  <p className="product-card__author">
                    by <a href={product.authorHref}>{product.author}</a>
                  </p>
                  <div className="product-card__footer">
                    <div className="product-card__price">
                      <span className="product-card__price-current">{product.price}</span>
                      {product.original && <span className="product-card__price-original">{product.original}</span>}
                    </div>
                    <a href="/checkout" className="product-card__buy">
                      <i className="fa-solid fa-bag-shopping"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5 wow fadeInUp" data-wow-delay="0.5s">
            <a href="/shop" className="view-all-btn">
              <span>View All Products</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
