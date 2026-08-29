interface CartLine {
  id: string;
  img: string;
  name: string;
  author: string;
  priceDiscount: string;
  priceMrp: string;
}

const CART_ITEMS: CartLine[] = [
  { id: "c1", img: "/img/cart/best_book1.jpg", name: "The light we can't see", author: "Anthony Doerr", priceDiscount: "$24.99", priceMrp: "$34.99" },
  { id: "c2", img: "/img/cart/best_book2.jpg", name: "The light we can't see", author: "Anthony Doerr", priceDiscount: "$19.99", priceMrp: "$27.99" },
  { id: "c3", img: "/img/cart/best_book3.jpg", name: "The light we can't see", author: "Anthony Doerr", priceDiscount: "$15.99", priceMrp: "$22.99" },
  { id: "c4", img: "/img/cart/best_book4.jpg", name: "The light we can't see", author: "Anthony Doerr", priceDiscount: "$12.99", priceMrp: "$18.99" },
];

export function CartItems() {
  return (
    <div className="col-lg-8">
      <div className="bj_cart_content_header">
        <div className="form-check cart_total_select">
          <input className="form-check-input" type="checkbox" defaultChecked id="cart_total_select_check" />
          <label className="form-check-label" htmlFor="cart_total_select_check">
            Select All ({CART_ITEMS.length} Items)
          </label>
        </div>
        <div>
          <span>Muaz</span>, your total: <span className="cart_total_mrp">$104.96</span>{" "}
          <span className="cart_total_price">$73.96</span>
        </div>
      </div>
      <div className="cart_item_wrapper">
        {CART_ITEMS.map((item) => (
          <div className="single_cart_item" key={item.id}>
            <div className="cart_item_select">
              <input className="form-check-input" type="checkbox" defaultChecked />
            </div>
            <div className="cart_item_image">
              <img src={item.img} alt="cart" />
            </div>
            <div className="cart_item_content">
              <a href="/product-single" className="book_name">
                {item.name}
              </a>
              <div className="author_name"> {item.author}</div>
              <div className="cart_action">
                <button className="cart_remove">
                  <i className="ti-trash"></i>
                </button>
                <button className="cart_wishlist">
                  <i className="fa-regular fa-heart"></i>
                  Wishlist
                </button>
              </div>
              <div className="book_available">Only 3 copies available</div>
            </div>
            <div className="cart_quantity">
              <button className="quantity_btn minus">
                <i className="icon_minus-06"></i>
              </button>
              <input type="number" min={1} max={99} step={1} defaultValue={1} />
              <button className="quantity_btn plus">
                <i className="icon_plus"></i>
              </button>
            </div>
            <div className="cart_item_price">
              <div className="cart_item_price_discount">{item.priceDiscount}</div>
              <div className="cart_item_price_mrp">{item.priceMrp}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-happy-return-parent mb-0">
        <div className="cart-happy-return">
          <img src="/img/cart/happy-return-new.webp" alt="" />
          <p>7 Days Happy Return</p>
        </div>
        <div className="cart-happy-return">
          <img src="/img/cart/earn-points.svg" alt="" />
          <p>Purchase and Earn Point</p>
        </div>
      </div>
    </div>
  );
}
