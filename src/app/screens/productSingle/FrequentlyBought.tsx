import { useState } from "react";

interface BoughtTogetherItem {
  id: string;
  image: string;
  title: string;
  date: string;
  pages: string;
  rating: string;
  original: number;
  price: number;
}

const ITEMS: BoughtTogetherItem[] = [
  { id: "fbt-box-1", image: "/img/home/book5.jpg", title: "The Sun And The Star", date: "Dec 2019", pages: "77 pages", rating: "4.7", original: 24, price: 12 },
  { id: "fbt-box-2", image: "/img/home/book6.jpg", title: "The Most Fun", date: "Oct 2024", pages: "55 pages", rating: "4.7", original: 20, price: 10 },
  { id: "fbt-box-3", image: "/img/home/book7.jpg", title: "The Magic and Fear", date: "Jan 2010", pages: "27 pages", rating: "4.7", original: 16, price: 8 },
];

export function FrequentlyBought() {
  const [selected, setSelected] = useState<Record<string, boolean>>(
    Object.fromEntries(ITEMS.map((item) => [item.id, true])),
  );

  function toggle(id: string) {
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  const selectedItems = ITEMS.filter((item) => selected[item.id]);
  const totalPrice = selectedItems.reduce((sum, item) => sum + item.price, 0);
  const totalOriginal = selectedItems.reduce((sum, item) => sum + item.original, 0);
  const totalSaved = totalOriginal - totalPrice;

  return (
    <section className="bj_frequently_bought_area sec_padding pt-0 product-single-page" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="section_title text-center">
          <h2 className="title_two">Frequently Bought Together</h2>
          <p>Get Special Promo All Books Are 50% Off Now!</p>
        </div>
        <div className="row gy-xl-0 gy-4">
          {ITEMS.map((item) => (
            <div className="col-xl-3 col-lg-4 col-sm-6" key={item.id}>
              <div className="bj_new_pr_item mb-0">
                <label className="select-box" htmlFor={item.id}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={item.id}
                    checked={selected[item.id]}
                    onChange={() => toggle(item.id)}
                  />
                </label>
                <a href="#" className="img">
                  <img src={item.image} alt={item.title} />
                </a>
                <div className="bj_new_pr_content">
                  <a href="/product-single">
                    <h4 className="bj_new_pr_title">{item.title}</h4>
                  </a>
                  <div className="bj_pr_meta d-flex">
                    <div className="norm_text">{item.date}</div>
                    <div className="norm_text">{item.pages}</div>
                    <div className="ratting">
                      <i className="fas fa-star"></i> <span>{item.rating}</span>
                    </div>
                  </div>
                  <div className="product_varaiation">
                    <select>
                      <option>eBook</option>
                      <option>paperback</option>
                    </select>
                    <div className="book_price mt-2">
                      <del className="me-2">${item.original}</del> ${item.price}
                    </div>
                  </div>
                  <button type="button" className="bj_theme_btn strock_btn add-to-cart-automated" data-name={item.title} data-price={item.price} data-img={item.image}>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="col-xl-3 col-lg-12 col-sm-6">
            <div className="added_cart_total">
              <h4 className="mt-auto">Total</h4>
              <div className="price">${totalPrice}</div>
              <del>${totalOriginal}</del>
              <div>${totalSaved.toFixed(2)} saved</div>
              <a href="#" className="bj_theme_btn w-100 mt-auto">
                Add selected to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
