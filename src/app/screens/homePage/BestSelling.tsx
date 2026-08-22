interface Product {
  id: string;
  name: string;
  img: string;
  price: number;
  rating: number;
}

const PRODUCTS: Record<string, Product> = {
  enemy: { id: "enemy", name: "Enemy – Jake Gyllenhaal", img: "/img/home-two/choice1.png", price: 25, rating: 1221 },
  knowledge: { id: "knowledge", name: "Knowledge of Earth", img: "/img/home-two/choice2.png", price: 25, rating: 1221 },
  cover: { id: "cover", name: "Book Cover Mockup", img: "/img/home-two/choice3.jpg", price: 35, rating: 1220 },
  business: { id: "business", name: "Create Your Own Business", img: "/img/home-two/choice4.jpg", price: 25, rating: 1221 },
};

const TABS = [
  { id: "pills-best", tabId: "pills-best-tab", label: "Bestseller Books", active: true, products: ["enemy", "knowledge", "cover", "business"] },
  { id: "pills-offer", tabId: "pills-offer-tab", label: "Top Rating Books", active: false, products: ["cover", "business", "enemy", "knowledge"] },
  { id: "pills-featured", tabId: "pills-featured-tab", label: "Featured Books", active: false, products: ["business", "knowledge", "enemy", "cover"] },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
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
            By - <a href="/author-single">SERO GLAN </a>
          </div>
          <div className="bj_pr_meta d-flex">
            <div className="book_price">${product.price}</div>
            <div className="ratting">
              <img src="/img/home/raiting.png" alt="" />
              {product.rating}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BestSelling() {
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
              <div className="row">
                {tab.products.map((productId) => (
                  <ProductCard product={PRODUCTS[productId]} key={productId} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
