import { useState } from "react";

interface AuthorBook {
  id: string;
  name: string;
  img: string;
  price: number;
  rating: number;
  views: number;
  author: string;
  tags: string[];
}

const BOOKS: AuthorBook[] = [
  { id: "a1", name: "A Storytelling Workbook", img: "/img/author_book1.jpg", price: 25, rating: 1221, views: 1221, author: "MUAZ BK", tags: ["bio", "kid"] },
  { id: "a2", name: "The Psychology of..", img: "/img/author_book2.jpg", price: 25, rating: 1221, views: 946, author: "Morgan Housel", tags: ["bio", "drama"] },
  { id: "a3", name: "Your Next Five Moves", img: "/img/author_book3.jpg", price: 25, rating: 1221, views: 1780, author: "Patrick Bet-David", tags: ["cook", "romance"] },
  { id: "a4", name: "The Ruthless ..", img: "/img/author_book4.jpg", price: 55, rating: 1221, views: 632, author: "John Mark Comer", tags: ["cook", "romance", "drama"] },
];

const FILTERS = [
  { label: "All", value: "*" },
  { label: "BIOGRAPHY", value: "bio" },
  { label: "COOKBOOKS", value: "cook" },
  { label: "DRAMA", value: "drama" },
  { label: "FOR KID", value: "kid" },
  { label: "ROMANCE", value: "romance" },
];

export function AuthorBooks() {
  const [activeFilter, setActiveFilter] = useState("*");
  const visibleBooks = activeFilter === "*" ? BOOKS : BOOKS.filter((book) => book.tags.includes(activeFilter));

  return (
    <section className="bj_new_product_area_four sec_padding">
      <div className="container">
        <div className="section_title text-center">
          <h2 className="title">Author books</h2>
        </div>
        <div className="portfolio_filter d-flex justify-content-center">
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
        <div className="projects_gallery_one">
          <div className="row">
            {visibleBooks.map((book) => (
              <div className="col-lg-3 col-md-4 col-sm-6 projects_item" key={book.id}>
                <div className="best_product_item best_product_item_two">
                  <div className="img">
                    <a href="/product-single">
                      <img src={book.img} alt="book" />
                    </a>
                    <div className="hover_item">
                      <a className="quick_button" href="/my-wishlist" data-bs-toggle="tooltip" data-bs-placement="right" title="Wishlist">
                        <i className="icon_heart_alt"></i>
                      </a>
                      <span data-bs-toggle="tooltip" data-bs-placement="right" title="Quickview">
                        <button className="quick_button" data-bs-toggle="modal" data-bs-target="#productQuickView">
                          <i className="arrow_move"></i>
                        </button>
                      </span>
                    </div>
                    <div className="view-badge" data-bs-toggle="tooltip" title="Views">
                      <i className="fa-regular fa-eye"></i>
                      {book.views.toLocaleString()}
                    </div>
                    <button
                      type="button"
                      className="bj_theme_btn add-to-cart-automated"
                      data-name={book.name}
                      data-img={book.img}
                      data-price={book.price}
                    >
                      <i className="icon_cart_alt"></i> Add to Cart
                    </button>
                  </div>
                  <div className="bj_new_pr_content">
                    <a href="/product-single">
                      <h4 className="bj_new_pr_title">{book.name}</h4>
                    </a>
                    <div className="writer_name">
                      By - <a href="/author-single"> {book.author} </a>
                    </div>
                    <div className="bj_pr_meta d-flex">
                      <div className="book_price">${book.price}</div>
                      <div className="ratting">
                        <img src="/img/home/raiting.png" alt="" />
                        {book.rating}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
