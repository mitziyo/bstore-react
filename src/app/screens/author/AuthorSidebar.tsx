import { useState } from "react";

const LETTERS = ["All", "A", "B", "C", "E", "H", "K", "M", "S", "T"];

const CATEGORIES = ["Biography", "Cookbooks", "Drama", "For Kid", "Romance", "Uncategorized"];

export function AuthorSidebar() {
  const [activeLetter, setActiveLetter] = useState("All");

  return (
    <div className="author_sidebar">
      <div className="widget search_widget">
        <h2 className="widget_title">Search</h2>
        <form className="search_form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Search for books" className="form-control" />
          <button type="submit" className="search_btn">
            <i className="ti-search"></i>
          </button>
        </form>
      </div>
      <div className="widget filter_widget">
        <h2 className="widget_title">Filter</h2>
        <ul className="list-unstyled">
          {LETTERS.map((letter) => (
            <li key={letter} className={activeLetter === letter ? "active" : undefined}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLetter(letter);
                }}
              >
                {letter}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="widget category_widget">
        <h2 className="widget_title">Category</h2>
        <ul className="list-unstyled">
          {CATEGORIES.map((category) => (
            <li key={category}>
              <a href="#">{category}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
