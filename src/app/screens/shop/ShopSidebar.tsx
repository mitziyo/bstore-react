import { useState } from "react";

const CATEGORIES = [
  { label: "All Categories", count: 500, active: true },
  { label: "Fiction", count: 125 },
  { label: "Drama", count: 98 },
  { label: "Mystery", count: 76 },
  { label: "Novels", count: 64 },
  { label: "Recipe Books", count: 45 },
];

const MORE_CATEGORIES = [
  { label: "Science Fiction", count: 38 },
  { label: "Biography", count: 32 },
];

const AUTHORS = ["Burt Geller", "Candy Carson", "Drew Berrymore", "Karen Perry", "Richard Mann"];

const RATINGS = [
  { value: 5, filled: 5 },
  { value: 4, filled: 4 },
  { value: 3, filled: 3 },
  { value: 2, filled: 2 },
];

export function ShopSidebar() {
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(500);

  return (
    <div className="shop-sidebar">
      <div className="filter-header">
        <h3>
          <i className="fa-solid fa-sliders"></i>
          Filters
        </h3>
        <button className="filter-reset">
          <i className="fa-solid fa-rotate"></i>
          Reset All
        </button>
      </div>

      <div className="filter-widget">
        <h4 className="filter-widget__title">
          <i className="fa-solid fa-layer-group"></i>
          Categories
        </h4>
        <ul className="category-list">
          {CATEGORIES.map((category) => (
            <li
              className={`category-list__item${category.active ? " category-list__item--active" : ""}`}
              key={category.label}
            >
              <a href="#">
                <span>{category.label}</span>
                <span className="count">{category.count}</span>
              </a>
            </li>
          ))}
        </ul>
        <button className="filter-show-more" data-bs-toggle="collapse" data-bs-target="#moreCategories">
          <span>Show more</span>
          <i className="fa-solid fa-chevron-down"></i>
        </button>
        <div className="collapse" id="moreCategories">
          <ul className="category-list category-list--more">
            {MORE_CATEGORIES.map((category) => (
              <li className="category-list__item" key={category.label}>
                <a href="#">
                  <span>{category.label}</span>
                  <span className="count">{category.count}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="filter-widget">
        <h4 className="filter-widget__title">
          <i className="fa-solid fa-pen-fancy"></i>
          Authors
        </h4>
        <div className="filter-checkboxes">
          {AUTHORS.map((author) => (
            <label className="filter-checkbox" key={author}>
              <input type="checkbox" name="author" value={author.toLowerCase()} />
              <span className="filter-checkbox__mark"></span>
              <span className="filter-checkbox__label">{author}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-widget">
        <h4 className="filter-widget__title">
          <i className="fa-solid fa-star"></i>
          Rating
        </h4>
        <div className="filter-checkboxes">
          {RATINGS.map((rating) => (
            <label className="filter-checkbox" key={rating.value}>
              <input type="checkbox" name="rating" value={rating.value} />
              <span className="filter-checkbox__mark"></span>
              <span className="filter-checkbox__stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <i key={i} className={i < rating.filled ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                ))}
                {rating.filled < 5 && <span>&amp; up</span>}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-widget">
        <h4 className="filter-widget__title">
          <i className="fa-solid fa-dollar-sign"></i>
          Price Range
        </h4>
        <div className="price-range">
          <div className="price-range__track">
            <div
              className="price-range__fill"
              style={{ left: `${(priceMin / 500) * 100}%`, right: `${100 - (priceMax / 500) * 100}%` }}
            ></div>
          </div>
          <div className="price-range__inputs">
            <div className="price-range__input">
              <span>$</span>
              <input
                type="number"
                min={0}
                value={priceMin}
                onChange={(e) => setPriceMin(Number(e.target.value))}
              />
            </div>
            <span className="price-range__separator">—</span>
            <div className="price-range__input">
              <span>$</span>
              <input
                type="number"
                max={500}
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
              />
            </div>
          </div>
        </div>
      </div>

      <button className="filter-apply">
        <i className="fa-solid fa-check"></i>
        Apply Filters
      </button>
    </div>
  );
}
