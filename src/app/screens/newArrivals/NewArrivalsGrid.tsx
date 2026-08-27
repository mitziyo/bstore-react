import { useState } from "react";

const FILTERS = ["All", "Fiction", "Non-Fiction", "Romance", "Thriller", "Self-Help"];

const BOOKS = [
  { title: "The Songbird's Tale", author: "Sarah Mitchell", date: "Added Dec 28, 2024", price: 24.99, rating: 5, ratingLabel: "New", img: "/img/home/tab_book1.png" },
  { title: "Mind Over Matter", author: "Dr. James Wilson", date: "Added Dec 27, 2024", price: 19.99, rating: 4, ratingLabel: "4.2", img: "/img/home/tab_book2.png" },
  { title: "Digital Nomad", author: "Alex Chen", date: "Added Dec 26, 2024", price: 22.99, rating: 5, ratingLabel: "4.7", img: "/img/home/tab_book3.png" },
  { title: "The Last Kingdom", author: "Bernard Cornwell", date: "Added Dec 25, 2024", price: 18.99, rating: 5, ratingLabel: "4.9", img: "/img/home/tab_book1.png" },
  { title: "Love in Paris", author: "Emma Roberts", date: "Added Dec 24, 2024", price: 16.99, rating: 4, ratingLabel: "4.3", img: "/img/home/tab_book2.png" },
  { title: "The Silent Patient", author: "Alex Michaelides", date: "Added Dec 23, 2024", price: 21.99, rating: 5, ratingLabel: "4.8", img: "/img/home/tab_book3.png" },
  { title: "Startup Secrets", author: "Mark Cuban", date: "Added Dec 22, 2024", price: 28.99, rating: 5, ratingLabel: "4.6", img: "/img/home/tab_book1.png" },
  { title: "Mystery Manor", author: "Agatha Black", date: "Added Dec 21, 2024", price: 15.99, rating: 4, ratingLabel: "4.4", img: "/img/home/tab_book2.png" },
];

export function NewArrivalsGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <>
      <ul className="filter-tabs nav justify-content-center wow fadeInUp">
        {FILTERS.map((filter) => (
          <li key={filter}>
            <a
              className={`nav-link${activeFilter === filter ? " active" : ""}`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveFilter(filter);
              }}
            >
              {filter}
            </a>
          </li>
        ))}
      </ul>
      <div className="row">
        {BOOKS.map((book) => (
          <div className="col-lg-3 col-md-6" key={book.title}>
            <div className="book-card wow fadeInUp">
              <span className="new-badge">
                <i className="fa-solid fa-sparkles me-1"></i>New
              </span>
              <div className="img">
                <img src={book.img} alt="Book" />
              </div>
              <div className="content">
                <div className="arrival-date">
                  <i className="fa-regular fa-calendar"></i>
                  {book.date}
                </div>
                <h5 className="title">{book.title}</h5>
                <p className="author">By {book.author}</p>
                <div className="rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i key={i} className={i < book.rating ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                  ))}{" "}
                  ({book.ratingLabel})
                </div>
                <div className="price">${book.price}</div>
                <div className="btn-group">
                  <a href="/checkout" className="bj_theme_btn btn-cart">
                    Add to Cart
                  </a>
                  <a href="/my-wishlist" className="btn-wishlist">
                    <i className="fa-regular fa-heart"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <a href="/shop" className="bj_theme_btn strock_btn">
          Load More
        </a>
      </div>
    </>
  );
}
