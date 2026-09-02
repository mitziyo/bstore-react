import { serverApi } from "../../../lib/config";
import type { Product } from "../../../lib/types/product";

const FALLBACK_IMG = "/img/home-two/choice1.png";

function ProductCard({ book }: { book: Product }) {
  const imagePath = book.bookImages[0] ? `${serverApi}/${book.bookImages[0]}` : FALLBACK_IMG;
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="best_product_item best_product_item_two">
        <div className="img">
          <a href="#">
            <img src={imagePath} alt={book.bookName} />
          </a>
          <div className="hover_item">
            <a className="quick_button" href="/my-wishlist" data-bs-toggle="tooltip" data-bs-placement="right" title="Wishlist">
              <i className="icon_heart_alt"></i>
            </a>
          </div>
          <div className="view-badge" data-bs-toggle="tooltip" title="Views">
            <i className="fa-regular fa-eye"></i>
            {book.bookViews.toLocaleString()}
          </div>
          <button
            type="button"
            className="bj_theme_btn add-to-cart-automated"
            data-name={book.bookName}
            data-img={imagePath}
            data-price={book.bookPrice}
          >
            <i className="icon_cart_alt"></i>Add to Cart
          </button>
        </div>
        <div className="bj_new_pr_content">
          <a href="/product-single">
            <h4 className="bj_new_pr_title">{book.bookName}</h4>
          </a>
          <div className="bj_pr_meta d-flex">
            <div className="book_price">${book.bookPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const TABS = [
  { id: "pills-best", tabId: "pills-best-tab", label: "Most Viewed", active: true },
  { id: "pills-new", tabId: "pills-new-tab", label: "Newest", active: false },
];

export function BestSelling({ mostViewed, newest }: { mostViewed: Product[]; newest: Product[] }) {
  const tabBooks: Record<string, Product[]> = { "pills-best": mostViewed, "pills-new": newest };

  return (
    <section className="best_selling_pr_area_two" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="section_title wow fadeInUp" data-wow-delay="0.2s">
          <h2 className="title">People's Choice</h2>
        </div>
        <div className="best_pr_tab_inner d-flex justify-content-between">
          <ul className="nav nav-pills best_pr_tab_two d-flex justify-content-center" id="pills-tab" role="tablist">
            {TABS.map((tab) => (
              <li role="presentation" className="nav-item" key={tab.id}>
                <a
                  className={`nav-link px-0${tab.active ? " active" : ""}`}
                  id={tab.tabId}
                  data-bs-toggle="pill"
                  data-bs-target={`#${tab.id}`}
                  role="tab"
                  aria-selected={tab.active}
                >
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="/shop" className="bj_theme_btn_two style_two">
            View All <i className="arrow_right"></i>
          </a>
        </div>
        <div className="tab-content" id="pills-tabContent">
          {TABS.map((tab) => (
            <div
              className={`tab-pane fade explore-menu${tab.active ? " show active" : ""}`}
              id={tab.id}
              role="tabpanel"
              aria-labelledby={tab.tabId}
              key={tab.id}
            >
              {tabBooks[tab.id].length === 0 ? (
                <p className="text-center">No books available yet.</p>
              ) : (
                <div className="row">
                  {tabBooks[tab.id].map((book) => (
                    <ProductCard book={book} key={book._id} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
