import { Link } from "react-router-dom";
import { serverApi } from "../../../lib/config";
import type { Product } from "../../../lib/types/product";

const FALLBACK_IMG = "/img/home-two/best_book1.jpg";

export function BestBooks({ books }: { books: Product[] }) {
  return (
    <section className="best-books-section" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <div className="section-header section-header--inline">
          <div className="section-header__left">
            <span className="section-header__badge wow fadeInDown" data-wow-delay="0.1s">
              <i className="fa-solid fa-fire-flame-curved"></i>
              Trending Now
            </span>
            <h2 className="section-header__title wow fadeInUp" data-wow-delay="0.2s">
              Books of the Month
            </h2>
          </div>
          <a href="/shop" className="section-header__link wow fadeInRight" data-wow-delay="0.3s">
            View All Books
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {books.length === 0 ? (
          <p className="text-center">No books available yet.</p>
        ) : (
          <div className="row g-4">
            {books.map((book, index) => {
              const imagePath = book.bookImages[0] ? `${serverApi}/${book.bookImages[0]}` : FALLBACK_IMG;
              return (
                <div className="col-lg-6" key={book._id}>
                  <div className="best-book-card wow fadeInUp" data-wow-delay={`${0.2 + index * 0.1}s`}>
                    <div className="best-book-card__image">
                      <img src={imagePath} alt={book.bookName} />
                      <button className="best-book-card__wishlist" data-bs-toggle="tooltip" title="Add to Wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </button>
                    </div>
                    <div className="best-book-card__content">
                      <div className="best-book-card__meta">
                        <span className="category">{book.bookGenre}</span>
                      </div>
                      <h3 className="best-book-card__title">
                        <Link to={`/book/${book._id}`}>{book.bookName}</Link>
                      </h3>

                      <div className="best-book-card__footer">
                        <div className="price">
                          <span className="current">${book.bookPrice}</span>
                        </div>
                        <button
                          className="add-cart-btn add-to-cart-automated"
                          data-name={book.bookName}
                          data-img={imagePath}
                          data-price={book.bookPrice}
                        >
                          <i className="fa-solid fa-cart-plus"></i>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
