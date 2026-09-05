import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { serverApi } from "../../../lib/config";
import { BookGenre } from "../../../lib/enums/product.enum";
import { useGlobals } from "../../hooks/useGlobals";
import BookService from "../../services/BookService";
import type { Product } from "../../../lib/types/product";

const FALLBACK_IMG = "/img/home/tab_book1.png";

const FILTERS = [
  { label: "All", value: "*" },
  { label: "Fiction", value: BookGenre.FICTION },
  { label: "Non-Fiction", value: BookGenre.NON_FICTION },
  { label: "Thriller", value: BookGenre.THRILLER },
  { label: "Romance", value: BookGenre.ROMANCE },
  { label: "Children", value: BookGenre.CHILDREN },
  { label: "History", value: BookGenre.HISTORY },
  { label: "Sci-Fi", value: BookGenre.SCI_FI },
];

export function NewArrivalsGrid() {
  const { basket } = useGlobals();
  const [activeFilter, setActiveFilter] = useState<string>("*");
  const [books, setBooks] = useState<Product[]>([]);

  useEffect(() => {
    new BookService()
      .getBooks({ page: 1, limit: 12, order: "createdAt" })
      .then((data) => setBooks(data))
      .catch((err) => console.log(err));
  }, []);

  const visibleBooks = activeFilter === "*" ? books : books.filter((b) => b.bookGenre === activeFilter);

  return (
    <>
      <ul className="filter-tabs nav justify-content-center wow fadeInUp">
        {FILTERS.map((filter) => (
          <li key={filter.value}>
            <a
              className={`nav-link${activeFilter === filter.value ? " active" : ""}`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveFilter(filter.value);
              }}
            >
              {filter.label}
            </a>
          </li>
        ))}
      </ul>
      {visibleBooks.length === 0 ? (
        <p className="text-center">No books found.</p>
      ) : (
        <div className="row">
          {visibleBooks.map((book) => {
            const imagePath = book.bookImages[0] ? `${serverApi}/${book.bookImages[0]}` : FALLBACK_IMG;
            return (
              <div className="col-lg-3 col-md-6" key={book._id}>
                <div className="book-card wow fadeInUp">
                  <span className="new-badge">
                    <i className="fa-solid fa-sparkles me-1"></i>New
                  </span>
                  <div className="img">
                    <img src={imagePath} alt={book.bookName} />
                  </div>
                  <div className="content">
                    <div className="arrival-date">
                      <i className="fa-regular fa-calendar"></i>
                      Added {new Date(book.createdAt).toLocaleDateString()}
                    </div>
                    <h5 className="title">
                      <Link to={`/book/${book._id}`}>{book.bookName}</Link>
                    </h5>
                    <div className="price">${book.bookPrice}</div>
                    <div className="btn-group">
                      <button
                        type="button"
                        className="bj_theme_btn btn-cart"
                        onClick={() =>
                          basket.onAdd({ _id: book._id, quantity: 1, title: book.bookName, price: book.bookPrice, image: imagePath })
                        }
                      >
                        Add to Cart
                      </button>
                      <a href="/my-wishlist" className="btn-wishlist">
                        <i className="fa-regular fa-heart"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="text-center mt-4">
        <a href="/shop" className="bj_theme_btn strock_btn">
          View All in Shop
        </a>
      </div>
    </>
  );
}
