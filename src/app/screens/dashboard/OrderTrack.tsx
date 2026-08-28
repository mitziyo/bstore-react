import { useState } from "react";
import "../../../scss/dashboard/dashboard.scss";
import "../../../scss/orderTrack/orderTrack.scss";

interface TimelineStep {
  icon: string;
  title: string;
  date: string;
  desc: string;
}

const TIMELINE_STEPS: TimelineStep[] = [
  { icon: "fa-solid fa-box-open", title: "Order Delivered", date: "02 Oct 2024, 5:18 PM", desc: "Your order has been successfully delivered to your address." },
  { icon: "fa-solid fa-truck", title: "Out for Delivery", date: "02 Oct 2024, 9:30 AM", desc: "Order handed over to LightBooks (Comilla) courier for delivery." },
  { icon: "fa-solid fa-box", title: "Ready to Ship", date: "01 Oct 2024, 4:45 PM", desc: "Your order is packed and ready for shipment." },
  { icon: "fa-solid fa-clipboard-check", title: "Order Confirmed", date: "01 Oct 2024, 11:20 AM", desc: "Your order has been confirmed and is being prepared." },
  { icon: "fa-solid fa-cart-shopping", title: "Order Placed", date: "01 Oct 2024, 10:05 AM", desc: "Your order has been placed successfully." },
];

interface OrderItem {
  id: string;
  image: string;
  title: string;
  author: string;
  qty: number;
  original: string;
  final: string;
}

const ORDER_ITEMS: OrderItem[] = [
  { id: "i1", image: "/img/cart/best_book1.jpg", title: "House of Mirth", author: "Muaz BK", qty: 1, original: "$29.99", final: "$19.99" },
  { id: "i2", image: "/img/cart/best_book3.jpg", title: "The Alchemist", author: "Muaz BK", qty: 1, original: "$29.99", final: "$19.99" },
  { id: "i3", image: "/img/cart/best_book2.jpg", title: "The Midnight Whispers", author: "Muaz BK", qty: 1, original: "$29.99", final: "$19.99" },
];

function RatingCard() {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  return (
    <div className="rating-card">
      <div className="rating-card__icon">
        <i className="fa-solid fa-thumbs-up"></i>
      </div>
      <h5 className="rating-card__title">How was your experience?</h5>
      <p className="rating-card__text">Your feedback helps us improve our service</p>
      <div className="rating-card__stars">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            className={`rating-card__star${n <= (hovered || rating) ? " active" : ""}`}
            key={n}
            onClick={() => setRating(n)}
            onMouseEnter={() => setHovered(n)}
            onMouseLeave={() => setHovered(0)}
            type="button"
          >
            <i className={n <= (hovered || rating) ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
          </button>
        ))}
      </div>
      <textarea className="rating-card__textarea" placeholder="Share your thoughts about this order..." rows={3}></textarea>
      <button className="rating-card__submit">
        <i className="fa-solid fa-paper-plane"></i>
        Submit Review
      </button>
    </div>
  );
}

function DeliveryCard() {
  return (
    <div className="delivery-card">
      <div className="delivery-card__header">
        <i className="fa-solid fa-location-dot"></i>
        <h5 className="delivery-card__title">Delivery Address</h5>
      </div>
      <div className="delivery-card__body">
        <span className="delivery-card__label">
          <i className="fa-solid fa-house"></i>
          Home
        </span>
        <p className="delivery-card__address">
          23/6 Moulovipara, (OFFICE), Brahmanbaria Municipality, Brahmanbaria Sadar, Brahmanbaria, Bangladesh
        </p>
        <div className="delivery-card__phone">
          <i className="fa-solid fa-phone"></i>
          <span>01323456789</span>
        </div>
      </div>
    </div>
  );
}

export function OrderTrack() {
  return (
    <section className="bj_account_dashboard" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <aside className="order-track-sidebar">
              <RatingCard />
              <DeliveryCard />
            </aside>
          </div>

          <div className="col-xl-9 col-lg-8">
            <div className="dashboard-content">
              <div className="dashboard-card">
                <div className="dashboard-card__header">
                  <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                    <div>
                      <h3 className="dashboard-card__title">Track Your Order</h3>
                      <p className="dashboard-card__subtitle">
                        Order ID: <strong>#87150273205266</strong>
                      </p>
                    </div>
                    <span className="order-status order-status--delivered">
                      <i className="fa-solid fa-circle-check"></i>
                      Delivered
                    </span>
                  </div>
                </div>

                <div className="dashboard-card__body">
                  <div className="order-timeline">
                    {TIMELINE_STEPS.map((step, i) => (
                      <div
                        className={`timeline-step timeline-step--complete${i === 0 ? " timeline-step--active" : ""}${i === TIMELINE_STEPS.length - 1 ? " timeline-step--last" : ""}`}
                        key={step.title}
                      >
                        <div className="timeline-step__indicator">
                          <div className="timeline-step__icon">
                            <i className={step.icon}></i>
                          </div>
                          {i < TIMELINE_STEPS.length - 1 && <div className="timeline-step__line"></div>}
                        </div>
                        <div className="timeline-step__content">
                          <h5 className="timeline-step__title">{step.title}</h5>
                          <span className="timeline-step__date">
                            <i className="fa-regular fa-clock"></i>
                            {step.date}
                          </span>
                          <p className="timeline-step__desc">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="dashboard-card">
                <div className="dashboard-card__header">
                  <h3 className="dashboard-card__title">Order Summary</h3>
                  <p className="dashboard-card__subtitle">{ORDER_ITEMS.length} items in this order</p>
                </div>

                <div className="dashboard-card__body">
                  <div className="order-items">
                    {ORDER_ITEMS.map((item) => (
                      <div className="order-item" key={item.id}>
                        <div className="order-item__image">
                          <img src={item.image} alt={item.title} />
                        </div>
                        <div className="order-item__details">
                          <h5 className="order-item__title">
                            <a href="/product-single">{item.title}</a>
                          </h5>
                          <span className="order-item__author">by {item.author}</span>
                        </div>
                        <div className="order-item__qty">
                          <span className="order-item__qty-label">Qty</span>
                          <span className="order-item__qty-value">{item.qty}</span>
                        </div>
                        <div className="order-item__price">
                          <span className="order-item__price-original">{item.original}</span>
                          <span className="order-item__price-final">{item.final}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="payment-summary">
                    <div className="payment-summary__row">
                      <span>Subtotal (3 items)</span>
                      <span>$59.97</span>
                    </div>
                    <div className="payment-summary__row">
                      <span>Shipping</span>
                      <span>$5.00</span>
                    </div>
                    <div className="payment-summary__row">
                      <span>Discount</span>
                      <span className="text-success">-$10.00</span>
                    </div>
                    <div className="payment-summary__row payment-summary__row--total">
                      <span>Total Paid</span>
                      <span>$54.97</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
