import { useState } from "react";
import "../../../scss/compare/compare.scss";

interface CompareBook {
  id: string;
  image: string;
  title: string;
  author: string;
  price: string;
  rating: number;
  reviews: string;
  format: string;
  pages: string;
  language: string;
  published: string;
  genre: string;
}

const INITIAL_BOOKS: CompareBook[] = [
  {
    id: "b1",
    image: "/img/home/tab_book1.png",
    title: "The Midnight Library",
    author: "Matt Haig",
    price: "$15.99",
    rating: 5,
    reviews: "4.9",
    format: "Hardcover, eBook, Audio",
    pages: "304 pages",
    language: "English",
    published: "August 2020",
    genre: "Fiction, Fantasy",
  },
  {
    id: "b2",
    image: "/img/home/tab_book2.png",
    title: "Atomic Habits",
    author: "James Clear",
    price: "$18.99",
    rating: 4.5,
    reviews: "4.7",
    format: "Paperback, eBook",
    pages: "320 pages",
    language: "English",
    published: "October 2018",
    genre: "Self-Help, Psychology",
  },
  {
    id: "b3",
    image: "/img/home/tab_book3.png",
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: "$12.99",
    rating: 5,
    reviews: "4.8",
    format: "Hardcover, Paperback, eBook",
    pages: "208 pages",
    language: "English",
    published: "May 1993",
    genre: "Fiction, Adventure",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <>
      {[1, 2, 3, 4, 5].map((n) => {
        const icon = n <= Math.floor(rating) ? "fa-solid fa-star" : n - rating === 0.5 ? "fa-solid fa-star-half-stroke" : "fa-regular fa-star";
        return <i className={icon} key={n}></i>;
      })}
    </>
  );
}

export function ComparePage() {
  const [books, setBooks] = useState(INITIAL_BOOKS);

  return (
    <>
      <section className="bj_breadcrumb_area text-center banner_animation_03" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="bg_one" style={{ background: "no-repeat center 0/cover url(/img/breadcrumb/breadcrumb_banner_bg.png)" }}></div>
        <div className="container">
          <h2 className="title wow fadeInUp">Compare Books</h2>
          <ol className="breadcrumb justify-content-center wow fadeInUp">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li className="active">Compare</li>
          </ol>
        </div>
      </section>

      <section className="sec_padding" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <div className="compare-table table-responsive wow fadeInUp">
            <table className="table mb-0">
              <thead>
                <tr>
                  <th className="feature-name">Features</th>
                  {books.map((book) => (
                    <th key={book.id}>
                      <img src={book.image} className="compare-book-img" alt={book.title} />
                      <div className="compare-book-title">{book.title}</div>
                      <div className="compare-book-author">{book.author}</div>
                      <button className="compare-btn-remove mt-2" onClick={() => setBooks((bs) => bs.filter((b) => b.id !== book.id))}>
                        <i className="ti-close"></i> Remove
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="feature-name">
                    <i className="fa-solid fa-dollar-sign me-2"></i>Price
                  </td>
                  {books.map((book) => (
                    <td key={book.id}>
                      <span className="compare-price">{book.price}</span>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="feature-name">
                    <i className="fa-solid fa-star me-2"></i>Rating
                  </td>
                  {books.map((book) => (
                    <td className="compare-rating" key={book.id}>
                      <Stars rating={book.rating} /> <span>({book.reviews})</span>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="feature-name">
                    <i className="fa-solid fa-book me-2"></i>Format
                  </td>
                  {books.map((book) => (
                    <td key={book.id}>{book.format}</td>
                  ))}
                </tr>
                <tr>
                  <td className="feature-name">
                    <i className="fa-solid fa-file-lines me-2"></i>Pages
                  </td>
                  {books.map((book) => (
                    <td key={book.id}>{book.pages}</td>
                  ))}
                </tr>
                <tr>
                  <td className="feature-name">
                    <i className="fa-solid fa-language me-2"></i>Language
                  </td>
                  {books.map((book) => (
                    <td key={book.id}>{book.language}</td>
                  ))}
                </tr>
                <tr>
                  <td className="feature-name">
                    <i className="fa-solid fa-calendar me-2"></i>Published
                  </td>
                  {books.map((book) => (
                    <td key={book.id}>{book.published}</td>
                  ))}
                </tr>
                <tr>
                  <td className="feature-name">
                    <i className="fa-solid fa-tags me-2"></i>Genre
                  </td>
                  {books.map((book) => (
                    <td key={book.id}>{book.genre}</td>
                  ))}
                </tr>
                <tr>
                  <td className="feature-name">
                    <i className="fa-solid fa-cart-shopping me-2"></i>Action
                  </td>
                  {books.map((book) => (
                    <td key={book.id}>
                      <a href="/checkout" className="bj_theme_btn">
                        Buy Now
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-center mt-4">
            <a href="/shop" className="bj_theme_btn strock_btn">
              Continue Shopping
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
