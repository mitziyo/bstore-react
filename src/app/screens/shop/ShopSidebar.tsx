import { useState } from "react";
import { BookGenre } from "../../../lib/enums/product.enum";

const CATEGORIES = [
  { label: "All Categories", value: "*" },
  { label: "Fiction", value: BookGenre.FICTION },
  { label: "Non-Fiction", value: BookGenre.NON_FICTION },
  { label: "Thriller", value: BookGenre.THRILLER },
  { label: "Romance", value: BookGenre.ROMANCE },
  { label: "Children", value: BookGenre.CHILDREN },
  { label: "History", value: BookGenre.HISTORY },
  { label: "Sci-Fi", value: BookGenre.SCI_FI },
];

const AUTHORS = ["Burt Geller", "Candy Carson", "Drew Berrymore", "Karen Perry", "Richard Mann"];

interface ShopSidebarProps {
  activeGenre: string;
  onGenreChange: (genre: string) => void;
  onPriceChange: (min: number, max: number) => void;
}

export function ShopSidebar({ activeGenre, onGenreChange, onPriceChange }: ShopSidebarProps) {
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(500);
  const [categoriesExpanded, setCategoriesExpanded] = useState(false);
  const [authorsExpanded, setAuthorsExpanded] = useState(false);

  return (
    <div className="shop-sidebar">
      <div className="filter-header">
        <h3>
          <i className="fa-solid fa-sliders"></i>
          Filters
        </h3>
        <button
          className="filter-reset"
          onClick={() => {
            onGenreChange("*");
            setPriceMin(0);
            setPriceMax(500);
            onPriceChange(0, 500);
          }}
        >
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
          {CATEGORIES.slice(0, 3).map((category) => (
            <li
              className={`category-list__item${activeGenre === category.value ? " category-list__item--active" : ""}`}
              key={category.value}
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onGenreChange(category.value);
                }}
              >
                <span>{category.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <button className="filter-show-more" onClick={() => setCategoriesExpanded(!categoriesExpanded)} aria-expanded={categoriesExpanded}>
          <span>{categoriesExpanded ? "Show less" : "Show more"}</span>
          <i className="fa-solid fa-chevron-down"></i>
        </button>
        <div className={`collapse${categoriesExpanded ? " show" : ""}`} id="moreCategories">
          <ul className="category-list category-list--more">
            {CATEGORIES.slice(3).map((category) => (
              <li
                className={`category-list__item${activeGenre === category.value ? " category-list__item--active" : ""}`}
                key={category.value}
              >
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onGenreChange(category.value);
                  }}
                >
                  <span>{category.label}</span>
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
          {AUTHORS.slice(0, 3).map((author) => (
            <label className="filter-checkbox" key={author}>
              <input type="checkbox" name="author" value={author.toLowerCase()} />
              <span className="filter-checkbox__mark"></span>
              <span className="filter-checkbox__label">{author}</span>
            </label>
          ))}
        </div>
        <button className="filter-show-more" onClick={() => setAuthorsExpanded(!authorsExpanded)} aria-expanded={authorsExpanded}>
          <span>{authorsExpanded ? "Show less" : "Show more"}</span>
          <i className="fa-solid fa-chevron-down"></i>
        </button>
        <div className={`collapse${authorsExpanded ? " show" : ""}`} id="moreAuthors">
          <div className="filter-checkboxes filter-checkboxes--more">
            {AUTHORS.slice(3).map((author) => (
              <label className="filter-checkbox" key={author}>
                <input type="checkbox" name="author" value={author.toLowerCase()} />
                <span className="filter-checkbox__mark"></span>
                <span className="filter-checkbox__label">{author}</span>
              </label>
            ))}
          </div>
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
            <input
              type="range"
              className="price-range__slider price-range__slider--min"
              min={0}
              max={500}
              value={priceMin}
              onChange={(e) => setPriceMin(Math.min(Number(e.target.value), priceMax))}
            />
            <input
              type="range"
              className="price-range__slider price-range__slider--max"
              min={0}
              max={500}
              value={priceMax}
              onChange={(e) => setPriceMax(Math.max(Number(e.target.value), priceMin))}
            />
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

      <button className="filter-apply" onClick={() => onPriceChange(priceMin, priceMax)}>
        <i className="fa-solid fa-check"></i>
        Apply Filters
      </button>
    </div>
  );
}
