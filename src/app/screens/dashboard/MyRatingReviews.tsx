import { useState } from "react";

interface PendingReview {
  id: string;
  image: string;
  title: string;
  author: string;
  purchasedOn: string;
}

interface CompletedReview {
  id: string;
  image: string;
  title: string;
  author: string;
  rating: number;
  text: string;
  reviewedOn: string;
}

const PENDING_REVIEWS: PendingReview[] = [
  { id: "p1", image: "/img/cart/best_book1.jpg", title: "The Midnight Whispers", author: "John Doe", purchasedOn: "Purchased on Dec 15, 2024" },
  { id: "p2", image: "/img/cart/best_book2.jpg", title: "The Light We Can't See", author: "Sarah Johnson", purchasedOn: "Purchased on Dec 10, 2024" },
  { id: "p3", image: "/img/cart/best_book3.jpg", title: "Rich People Problems", author: "Alex Chen", purchasedOn: "Purchased on Dec 5, 2024" },
];

const COMPLETED_REVIEWS: CompletedReview[] = [
  {
    id: "r1",
    image: "/img/cart/best_book4.jpg",
    title: "Tales of the Dragon",
    author: "John Doe",
    rating: 5,
    text: "This book is absolutely amazing! The story kept me on the edge of my seat from beginning to end. Highly recommend to anyone who loves fantasy.",
    reviewedOn: "Reviewed on Dec 20, 2024",
  },
  {
    id: "r2",
    image: "/img/cart/best_book5.jpg",
    title: "Mystery Island",
    author: "Jane Smith",
    rating: 4,
    text: "A great mystery novel with unexpected twists. The characters were well-developed and the plot kept me guessing until the very end.",
    reviewedOn: "Reviewed on Dec 18, 2024",
  },
  {
    id: "r3",
    image: "/img/cart/best_book6.jpg",
    title: "The Adventure Begins",
    author: "Michael Brown",
    rating: 4.5,
    text: "Perfect for adventure lovers! The world-building is exceptional and the pacing keeps you hooked throughout.",
    reviewedOn: "Reviewed on Dec 12, 2024",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="review-card__stars">
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

export function MyRatingReviews() {
  const [activeTab, setActiveTab] = useState<"pending" | "reviewed">("pending");

  return (
    <div className="dashboard-card">
      <div className="dashboard-card__header">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
          <div>
            <h3 className="dashboard-card__title">My Rating & Reviews</h3>
            <p className="dashboard-card__subtitle">Share your thoughts about books you've purchased</p>
          </div>
        </div>
      </div>

      <div className="dashboard-card__body">
        <div className="review-tabs">
          <ul className="review-tabs__nav">
            <li className="review-tabs__item">
              <button
                className={`review-tabs__btn${activeTab === "pending" ? " active" : ""}`}
                onClick={() => setActiveTab("pending")}
                type="button"
              >
                <i className="fa-regular fa-clock"></i>
                Pending Review
                <span className="review-tabs__count">{PENDING_REVIEWS.length}</span>
              </button>
            </li>
            <li className="review-tabs__item">
              <button
                className={`review-tabs__btn${activeTab === "reviewed" ? " active" : ""}`}
                onClick={() => setActiveTab("reviewed")}
                type="button"
              >
                <i className="fa-solid fa-check-circle"></i>
                Reviewed
                <span className="review-tabs__count">{COMPLETED_REVIEWS.length}</span>
              </button>
            </li>
          </ul>

          {activeTab === "pending" ? (
            <div className="review-list">
              {PENDING_REVIEWS.map((review) => (
                <div className="review-card review-card--pending" key={review.id}>
                  <div className="review-card__book">
                    <img src={review.image} alt={review.title} />
                  </div>
                  <div className="review-card__content">
                    <div className="review-card__info">
                      <h5 className="review-card__title">
                        <a href="/product-single">{review.title}</a>
                      </h5>
                      <p className="review-card__author">
                        by <a href="#">{review.author}</a>
                      </p>
                      <p className="review-card__date">
                        <i className="fa-regular fa-calendar"></i>
                        {review.purchasedOn}
                      </p>
                    </div>
                    <div className="review-card__action">
                      <a href="/product-single#product_review" className="review-card__btn">
                        <i className="fa-regular fa-pen-to-square"></i>
                        Write a Review
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="review-list">
              {COMPLETED_REVIEWS.map((review) => (
                <div className="review-card" key={review.id}>
                  <div className="review-card__book">
                    <img src={review.image} alt={review.title} />
                  </div>
                  <div className="review-card__content">
                    <div className="review-card__header">
                      <div className="review-card__info">
                        <h5 className="review-card__title">
                          <a href="/product-single">{review.title}</a>
                        </h5>
                        <p className="review-card__author">
                          by <a href="#">{review.author}</a>
                        </p>
                      </div>
                      <div className="review-card__rating">
                        <Stars rating={review.rating} />
                        <span className="review-card__score">{review.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    <p className="review-card__text">{review.text}</p>
                    <div className="review-card__footer">
                      <span className="review-card__date">
                        <i className="fa-regular fa-clock"></i>
                        {review.reviewedOn}
                      </span>
                      <a href="/product-single#product_review" className="review-card__edit">
                        <i className="fa-regular fa-pen-to-square"></i>
                        Edit
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
