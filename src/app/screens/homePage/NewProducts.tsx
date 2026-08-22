import { useState } from "react";

interface NewProduct {
  id: string;
  name: string;
  img: string;
  price: number;
  rating: number;
  author: string;
  tags: string[];
}

const PRODUCTS: NewProduct[] = [
  { id: "n1", name: "A Storytelling Workbook", img: "/img/home-two/product-filter/n_pr_img1.jpg", price: 25, rating: 1221, author: "SERO GLAN", tags: ["bio", "kid"] },
  { id: "n2", name: "The Psychology of..", img: "/img/home-two/product-filter/n_pr_img2.jpg", price: 25, rating: 1221, author: "Morgan Housel", tags: ["bio", "drama"] },
  { id: "n3", name: "Your Next Five Moves", img: "/img/home-two/product-filter/n_pr_img3.jpg", price: 25, rating: 1221, author: "Patrick Bet-David", tags: ["cook", "romance"] },
  { id: "n4", name: "The Ruthless ..", img: "/img/home-two/product-filter/n_pr_img4.jpg", price: 55, rating: 1221, author: "John Mark Comer", tags: ["cook", "romance", "drama"] },
  { id: "n5", name: "There was a Country", img: "/img/home-two/product-filter/n_pr_img5.jpg", price: 15, rating: 1220, author: "Patrick Bet-David", tags: ["cook", "romance", "kid"] },
  { id: "n6", name: "The Burden is Light", img: "/img/home-two/product-filter/n_pr_img6.jpg", price: 55, rating: 1221, author: "Jon Tyson", tags: ["cook", "romance"] },
];

const FILTERS = [
  { label: "All", value: "*" },
  { label: "BIOGRAPHY", value: "bio" },
  { label: "COOKBOOKS", value: "cook" },
  { label: "DRAMA", value: "drama" },
  { label: "FOR KID", value: "kid" },
  { label: "ROMANCE", value: "romance" },
];

export function NewProducts() {
  const [activeFilter, setActiveFilter] = useState("*");
  const visibleProducts = activeFilter === "*" ? PRODUCTS : PRODUCTS.filter((p) => p.tags.includes(activeFilter));

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
              <div className="row">
                {visibleProducts.map((product) => (
                  <div className="col-xl-4 col-lg-6 col-sm-6 projects_item" key={product.id}>
                    <div className="best_product_item best_product_item_two">
                      <div className="img">
                        <a href="#">
                          <img src={product.img} alt="book" />
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
                          data-name={product.name}
                          data-img={product.img}
                          data-price={product.price}
                        >
                          <i className="icon_cart_alt"></i>Add to Cart
                        </button>
                      </div>
                      <div className="bj_new_pr_content">
                        <a href="/product-single">
                          <h4 className="bj_new_pr_title">{product.name}</h4>
                        </a>
                        <div className="writer_name">
                          By - <a href="/author-single">{product.author} </a>
                        </div>
                        <div className="bj_pr_meta d-flex">
                          <div className="book_price">${product.price}</div>
                          <div className="ratting">
                            <img src="/img/home/raiting.png" alt="" /> {product.rating}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
