import "../../../scss/shopNoSidebar/shopNoSidebar.scss";
import { Breadcrumb } from "../shop/Breadcrumb";

interface ShopProduct {
  name: string;
  img: string;
  price: number;
  mrp: number;
  rating: number;
}

const PRODUCTS: ShopProduct[] = [
  { name: "A Storytelling Workbook", img: "/img/author_book1.jpg", price: 25, mrp: 120, rating: 4.9 },
  { name: "The Ruthless ..", img: "/img/author_book2.jpg", price: 25, mrp: 120, rating: 4.9 },
  { name: "The Psychology of..", img: "/img/author_book3.jpg", price: 25, mrp: 120, rating: 4.9 },
  { name: "Your Next Five Moves", img: "/img/author_book4.jpg", price: 25, mrp: 120, rating: 4.9 },
];

const GRID_SIZE = 12;

export function ShopNoSidebarPage() {
  return (
    <>
      <Breadcrumb label="Shop No Sidebar" />
      <section className="bj_shop_area sec_padding" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <form role="search" method="get" className="pr_search_form pr_search_form_two input-group" action="#">
                <input type="text" name="s" className="form-control search-field" id="search" placeholder="Serach  off book store.." />
                <div className="search-fileter">
                  <div className="form-check form-check-inline mr-30">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="title" value="option1" />
                    <label className="form-check-label" htmlFor="title">
                      Title
                    </label>
                  </div>
                  <div className="form-check form-check-inline mr-30">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="writer" value="option2" />
                    <label className="form-check-label" htmlFor="writer">
                      Writer
                    </label>
                  </div>
                  <div className="form-check form-check-inline mr-30">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="category" value="option3" />
                    <label className="form-check-label" htmlFor="category">
                      Category
                    </label>
                  </div>
                </div>
                <button type="submit">
                  <i className="ti-search"></i>
                </button>
              </form>
              <div className="shop_top d-flex align-items-center justify-content-between">
                <div className="shop_menu_left">500 Books</div>
                <div className="shop_menu_right d-flex align-items-center justify-content-end">
                  <div className="filter_widget pb-0 me-3">
                    <h3 className="shop_sidebar_title mb-0">
                      <a href="#">
                        <img src="/img/shop/filter.svg" alt="" />
                      </a>
                      Filter
                    </h3>
                  </div>
                  Sort by
                  <form className="woocommerce-ordering" method="get">
                    <select name="orderby" className="orderby selectpickers" defaultValue="menu_order">
                      <option value="menu_order">Default sorting</option>
                      <option value="popularity">Sort by popularity</option>
                      <option value="rating">Sort by average rating</option>
                      <option value="date">Sort by latest</option>
                      <option value="price">Sort by price: low to high</option>
                      <option value="price-desc">Sort by price: high to low</option>
                    </select>
                  </form>
                </div>
              </div>
              <div className="row">
                {Array.from({ length: GRID_SIZE }, (_, i) => PRODUCTS[i % PRODUCTS.length]).map((product, i) => (
                  <div className="col-lg-3 col-sm-6 projects_item" key={i}>
                    <div className="best_product_item best_product_item_two shop_product">
                      <div className="img">
                        <a href="#">
                          <img src={product.img} alt="book" />
                        </a>
                        <div className="pr_ribbon">
                          <span className="product-badge">New</span>
                          <div className="ratting">
                            <img src="/img/star-1.png" alt="" />
                            {product.rating}
                          </div>
                        </div>
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
                          data-name={product.name}
                          data-img={product.img}
                          data-price={product.price}
                          data-mrp={product.mrp}
                        >
                          <i className="icon_cart_alt"></i>Add To Cart
                        </button>
                      </div>
                      <div className="bj_new_pr_content">
                        <a href="/product-single">
                          <h4 className="bj_new_pr_title">{product.name}</h4>
                        </a>
                        <div className="bj_pr_meta d-flex">
                          <div className="book_price">
                            <del>{product.mrp}</del>${product.price}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <nav aria-label="Shop pagination">
                  <ul className="pagination pagi-content">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="ti-angle-left"></i>Prev
                      </a>
                    </li>
                    <li className="page-item active" aria-current="page">
                      <span className="page-link">1</span>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        ...
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        5
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
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
