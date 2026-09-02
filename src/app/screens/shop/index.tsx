import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../../../scss/shop/shop.scss";
import { Breadcrumb } from "./Breadcrumb";
import { ShopSidebar } from "./ShopSidebar";
import BookService from "../../services/BookService";
import { serverApi } from "../../../lib/config";
import type { Product, ProductInquiry } from "../../../lib/types/product";

const FALLBACK_IMG = "/img/author_book1.jpg";

export function ShopPage() {
  const [searchParams] = useSearchParams();
  const [bookSearch, setBookSearch] = useState<ProductInquiry>({
    page: 1,
    limit: 12,
    order: "createdAt",
    genre: (searchParams.get("genre") as ProductInquiry["genre"]) || undefined,
  });
  const [searchText, setSearchText] = useState("");
  const [books, setBooks] = useState<Product[]>([]);

  useEffect(() => {
    const bookService = new BookService();
    bookService
      .getBooks(bookSearch)
      .then((data) => setBooks(data))
      .catch((err) => console.log(err));
  }, [bookSearch]);

  const orderHandler = (order: string) => {
    setBookSearch({ ...bookSearch, page: 1, order });
  };

  const genreHandler = (genre: string) => {
    setBookSearch({
      ...bookSearch,
      page: 1,
      genre: genre === "*" ? undefined : (genre as ProductInquiry["genre"]),
    });
  };

  const searchHandler = (e: FormEvent) => {
    e.preventDefault();
    setBookSearch({ ...bookSearch, page: 1, search: searchText });
  };

  const paginationHandler = (page: number) => {
    if (page < 1) return;
    setBookSearch({ ...bookSearch, page });
  };

  return (
    <>
      <Breadcrumb />
      <section className="bj_shop_area sec_padding" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <ShopSidebar activeGenre={bookSearch.genre ?? "*"} onGenreChange={genreHandler} />
            </div>
            <div className="col-lg-9">
              <form role="search" className="pr_search_form input-group" onSubmit={searchHandler}>
                <input
                  type="text"
                  name="s"
                  className="form-control search-field"
                  id="search"
                  placeholder="Search our book store.."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <button type="submit">
                  <i className="ti-search"></i>
                </button>
              </form>
              <div className="shop_top d-flex align-items-center justify-content-between">
                <div className="shop_menu_left">{books.length} Books</div>
                <div className="shop_menu_right d-flex align-items-center justify-content-end">
                  Sort by
                  <form className="woocommerce-ordering" onSubmit={(e) => e.preventDefault()}>
                    <select
                      name="orderby"
                      className="orderby selectpickers"
                      value={bookSearch.order}
                      onChange={(e) => orderHandler(e.target.value)}
                    >
                      <option value="createdAt">Sort by latest</option>
                      <option value="bookViews">Sort by popularity</option>
                      <option value="bookPrice">Sort by price</option>
                    </select>
                  </form>
                </div>
              </div>
              <div className="row">
                {books.length === 0 ? (
                  <p className="text-center">No books found.</p>
                ) : (
                  books.map((book) => {
                    const imagePath = book.bookImages[0] ? `${serverApi}/${book.bookImages[0]}` : FALLBACK_IMG;
                    return (
                      <div className="col-xl-3 col-lg-4 col-sm-6 projects_item" key={book._id}>
                        <div className="best_product_item best_product_item_two shop_product">
                          <div className="img">
                            <a href="#">
                              <img src={imagePath} alt={book.bookName} />
                            </a>
                            <div className="hover_item">
                              <a
                                className="quick_button"
                                href="/my-wishlist"
                                data-bs-toggle="tooltip"
                                data-bs-placement="right"
                                title="Wishlist"
                              >
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
                              <i className="icon_cart_alt"></i>Add To Cart
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
                  })
                )}
              </div>
              <div className="text-center">
                <nav aria-label="Shop pagination">
                  <ul className="pagination pagi-content">
                    <li className="page-item">
                      <a
                        className="page-link"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          paginationHandler(bookSearch.page - 1);
                        }}
                      >
                        <i className="ti-angle-left"></i>Prev
                      </a>
                    </li>
                    <li className="page-item active" aria-current="page">
                      <span className="page-link">{bookSearch.page}</span>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          paginationHandler(bookSearch.page + 1);
                        }}
                      >
                        Next<i className="ti-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
