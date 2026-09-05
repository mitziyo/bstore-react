import { Link } from "react-router-dom";
import { useGlobals } from "../../hooks/useGlobals";
import type { CartItem } from "../../../lib/types/search";

export function CartItems() {
  const { basket } = useGlobals();

  return (
    <div className="col-lg-8">
      <div className="bj_cart_content_header">
        <div className="form-check cart_total_select">
          <label className="form-check-label">{basket.cartItems.length} Items</label>
        </div>
      </div>
      {basket.cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="cart_item_wrapper">
          {basket.cartItems.map((item: CartItem) => (
            <div className="single_cart_item" key={item._id}>
              <div className="cart_item_image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="cart_item_content">
                <Link to={`/book/${item._id}`} className="book_name">
                  {item.title}
                </Link>
                <div className="cart_action">
                  <button className="cart_remove" onClick={() => basket.onDelete(item)}>
                    <i className="ti-trash"></i>
                  </button>
                </div>
              </div>
              <div className="cart_quantity">
                <button className="quantity_btn minus" onClick={() => basket.onRemove(item)}>
                  <i className="icon_minus-06"></i>
                </button>
                <input type="number" min={1} max={99} step={1} value={item.quantity} readOnly />
                <button
                  className="quantity_btn plus"
                  onClick={() => basket.onAdd({ ...item, quantity: 1 })}
                >
                  <i className="icon_plus"></i>
                </button>
              </div>
              <div className="cart_item_price">
                <div className="cart_item_price_discount">${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
