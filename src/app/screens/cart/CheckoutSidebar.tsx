import { Link } from "react-router-dom";
import { useGlobals } from "../../hooks/useGlobals";
import { calculateDelivery } from "../../../lib/config";

export function CheckoutSidebar() {
  const { basket } = useGlobals();
  const subtotal = basket.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = calculateDelivery(subtotal);
  const total = subtotal + delivery;

  return (
    <div className="col-lg-4">
      <div className="bj_checkout_sidebar">
        <div className="cart_checkout_summary">
          <div className="cart_checkout_header">
            <h5>Checkout Summary</h5>
          </div>
          <div className="cart_checkout_body">
            <div className="checkout_item">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="checkout_item">
              <span>Delivery</span>
              <span>{delivery === 0 ? "Free" : `$${delivery.toFixed(2)}`}</span>
            </div>
            <div className="checkout_item strong">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="cart_proceed_checkout mt-3">
          <Link
            to="/checkout"
            className={`bj_theme_btn w-100 border-0 mt-2${basket.cartItems.length === 0 ? " disabled" : ""}`}
            onClick={(e) => {
              if (basket.cartItems.length === 0) e.preventDefault();
            }}
          >
            Proceed to Checkout <i className="arrow_right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
