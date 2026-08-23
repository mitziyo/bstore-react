import "../../../scss/dashboard/dashboard.scss";
import "../../../scss/myListDetails/myListDetails.scss";
import { DashboardSidebar } from "./DashboardSidebar";

interface ListBook {
  id: string;
  image: string;
  title: string;
  author: string;
  price: number;
  rating: number;
}

const LIST_BOOKS: ListBook[] = [
  { id: "b1", image: "/img/home-two/choice2.png", title: "Enemy – Jake Gyllenhaal", author: "SERO GLAN", price: 25, rating: 1221 },
  { id: "b2", image: "/img/home-two/choice3.jpg", title: "Enemy – Jake Gyllenhaal", author: "SERO GLAN", price: 25, rating: 1221 },
  { id: "b3", image: "/img/home-two/choice4.jpg", title: "Enemy – Jake Gyllenhaal", author: "SERO GLAN", price: 25, rating: 1221 },
];

export function MyListDetails() {
  return (
    <section className="bj_account_dashboard my-list-details" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <DashboardSidebar />
          </div>

          <div className="col-lg-9">
            <div className="account_dashboard_body">
              <div className="account_dashboard_content">
                <div className="account_dashboard_content_header">
                  Fiction Book List
                  <p>Your Total Item: {LIST_BOOKS.length}</p>
                </div>
                <div className="content_body">
                  <div className="my_book_list my_list_details">
                    {LIST_BOOKS.map((book) => (
                      <div className="best_product_item best_product_item_two" key={book.id}>
                        <div className="ribon">20% off</div>
                        <div className="img">
                          <a href="#">
                            <img src={book.image} alt={book.title} />
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
                            <a className="quick_button" href="#" data-bs-toggle="tooltip" data-bs-placement="right" title="Compare">
                              <i className="ti-control-shuffle"></i>
                            </a>
                          </div>
                          <button
                            type="button"
                            className="bj_theme_btn add-to-cart-automated"
                            data-name={book.title}
                            data-price={book.price}
                            data-img={book.image}
                          >
                            Add to Cart
                          </button>
                        </div>
                        <div className="bj_new_pr_content">
                          <a href="/product-single">
                            <h6 className="book_title">{book.title}</h6>
                          </a>
                          <div className="writer_name">
                            By - <a href="/author-single">{book.author}</a>
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
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
