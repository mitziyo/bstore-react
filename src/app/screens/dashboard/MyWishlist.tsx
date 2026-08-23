interface WishlistItem {
  id: string;
  image: string;
  sale?: string;
  badge?: { label: string; variant?: "new" };
  category: string;
  rating: number;
  reviews: number;
  title: string;
  author: string;
  desc: string;
  formatIcon: string;
  format: string;
  stock: { label: string; variant: "available" | "low" };
  price: string;
  original?: string;
  save?: string;
}

const WISHLIST_ITEMS: WishlistItem[] = [
  {
    id: "w1",
    image: "/img/cart/best_book1.jpg",
    sale: "-33%",
    category: "Fiction",
    rating: 4.8,
    reviews: 12,
    title: "The Midnight Whispers: A Journey Through Time",
    author: "Muaz BK",
    desc: "A captivating story that takes you on an unforgettable journey through the mysteries of time and space...",
    formatIcon: "fa-solid fa-book",
    format: "Hardcover",
    stock: { label: "In Stock", variant: "available" },
    price: "$19.99",
    original: "$29.99",
    save: "Save $10",
  },
  {
    id: "w2",
    image: "/img/cart/best_book2.jpg",
    sale: "-25%",
    badge: { label: "Bestseller" },
    category: "Adventure",
    rating: 4.9,
    reviews: 28,
    title: "Tales of the Dragon: Epic Fantasy Series",
    author: "Sarah Johnson",
    desc: "Enter a world of magic, dragons, and ancient prophecies in this thrilling adventure series...",
    formatIcon: "fa-solid fa-tablet-screen-button",
    format: "eBook",
    stock: { label: "Available Now", variant: "available" },
    price: "$24.99",
    original: "$32.99",
    save: "Save $8",
  },
  {
    id: "w3",
    image: "/img/cart/best_book3.jpg",
    badge: { label: "New Release", variant: "new" },
    category: "Mystery",
    rating: 4.5,
    reviews: 8,
    title: "Mystery Island: Secrets Unveiled",
    author: "Alex Chen",
    desc: "Discover the hidden secrets of a remote island where nothing is as it seems...",
    formatIcon: "fa-solid fa-headphones",
    format: "Audiobook",
    stock: { label: "Only 3 left", variant: "low" },
    price: "$18.99",
  },
];

export function MyWishlist() {
  return (
    <div className="dashboard-card">
      <div className="dashboard-card__header">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
          <div>
            <h3 className="dashboard-card__title">My Wishlist</h3>
            <p className="dashboard-card__subtitle">You have {WISHLIST_ITEMS.length} items saved for later</p>
          </div>
          <span className="dashboard-card__count">
            <i className="fa-solid fa-heart"></i>
            {WISHLIST_ITEMS.length} Items
          </span>
        </div>
      </div>

      <div className="dashboard-card__body">
        <div className="wishlist-list">
          {WISHLIST_ITEMS.map((item) => (
            <div className="wish-card" key={item.id}>
              <div className="wish-card__image">
                <img src={item.image} alt={item.title} />
                {item.sale && <span className="wish-card__sale">{item.sale}</span>}
                {item.badge && (
                  <span className={`wish-card__badge${item.badge.variant === "new" ? " wish-card__badge--new" : ""}`}>
                    {item.badge.label}
                  </span>
                )}
              </div>
              <div className="wish-card__details">
                <div className="wish-card__top">
                  <span className="wish-card__category">{item.category}</span>
                  <div className="wish-card__rating">
                    <i className="fa-solid fa-star"></i>
                    <span>{item.rating}</span>
                    <span className="wish-card__reviews">({item.reviews} reviews)</span>
                  </div>
                </div>
                <h4 className="wish-card__title">
                  <a href="/product-single">{item.title}</a>
                </h4>
                <p className="wish-card__author">
                  by <a href="#">{item.author}</a>
                </p>
                <p className="wish-card__desc">{item.desc}</p>
                <div className="wish-card__meta">
                  <span className="wish-card__format">
                    <i className={item.formatIcon}></i> {item.format}
                  </span>
                  <span className={`wish-card__stock wish-card__stock--${item.stock.variant}`}>
                    <i className={item.stock.variant === "available" ? "fa-solid fa-circle-check" : "fa-solid fa-clock"}></i>{" "}
                    {item.stock.label}
                  </span>
                </div>
              </div>
              <div className="wish-card__actions">
                <div className="wish-card__pricing">
                  <span className="wish-card__price">{item.price}</span>
                  {item.original && <span className="wish-card__original">{item.original}</span>}
                  {item.save && <span className="wish-card__save">{item.save}</span>}
                </div>
                <button className="wish-card__btn wish-card__btn--cart">
                  <i className="fa-solid fa-cart-plus"></i>
                  Add to Cart
                </button>
                <button className="wish-card__btn wish-card__btn--remove">
                  <i className="fa-regular fa-trash-can"></i>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
