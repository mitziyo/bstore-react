import { useState } from "react";
import { Link } from "react-router-dom";
import { serverApi } from "../../../lib/config";
import { BookGenre } from "../../../lib/enums/product.enum";
import type { Product } from "../../../lib/types/product";

const FALLBACK_IMG = "/img/home-two/product-filter/n_pr_img1.jpg";

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

export function NewProducts({ books }: { books: Product[] }) {
  const [activeFilter, setActiveFilter] = useState<string>("*");
  const visibleBooks = activeFilter === "*" ? books : books.filter((b) => b.bookGenre === activeFilter);

  return (
    <section className="bj_new_product_area_three sec_padding_three" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="section_title text-center wow fadeInUp" data-wow-delay="0.2s">
          <h2 className="title">Our Newest Arrivals</h2>
        </div>
        <div className="portfolio_filter d-flex justify-content-center wow fadeInUp" data-wow-delay="0.4s">
          {FILTERS.map((filter) => (
            <div
              key={filter.value}
              className={`work_portfolio_item${activeFilter === filter.value ? " active" : ""}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </div>
          ))}
        </div>
        <div className="row flex-row-reverse">
          <div className="col-lg-8 wow fadeInRight" data-wow-delay="0.4s">
            <div className="projects_gallery_one">
              {visibleBooks.length === 0 ? (
                <p className="text-center">No books available yet.</p>
              ) : (
                <div className="row">
                  {visibleBooks.map((book) => {
                    const imagePath = book.bookImages[0] ? `${serverApi}/${book.bookImages[0]}` : FALLBACK_IMG;
                    return (
                      <div className="col-xl-4 col-lg-6 col-sm-6 projects_item" key={book._id}>
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
                            <Link to={`/book/${book._id}`}>
                              <h4 className="bj_new_pr_title">{book.bookName}</h4>
                            </Link>
                            <div className="bj_pr_meta d-flex">
                              <div className="book_price">${book.bookPrice}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="promotion_add text-center wow fadeInLeft" data-wow-delay="0.2s">
              <a href="#">
                <img src="/img/home-two/product-filter/extra_promo_img.jpg" alt="" />
              </a>
              <h3>Get Extra</h3>
              <h2>
                Slae <span>-25%</span>
              </h2>
              <h5>ON ORDER OVER $100</h5>
              <a href="/shop" className="bj_theme_btn">
                View More <i className="arrow_right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
