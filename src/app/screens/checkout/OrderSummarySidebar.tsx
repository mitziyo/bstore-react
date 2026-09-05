import { useGlobals } from "../../hooks/useGlobals";

export function OrderSummarySidebar({ subtotal, delivery, total }: { subtotal: number; delivery: number; total: number }) {
  const { basket } = useGlobals();

  return (
    <div className="col-lg-5">
      <div className="checkout-sidebar">
        <div className="order-summary">
          <div className="order-summary__header">
            <h4>
              <i className="fa-solid fa-receipt"></i>
              Order Summary
            </h4>
          </div>
          <div className="order-summary__body">
            <div className="summary-row">
              <span>Subtotal ({basket.cartItems.length} items)</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery</span>
              <span>{delivery === 0 ? "Free" : `$${delivery.toFixed(2)}`}</span>
            </div>
            <div className="summary-row summary-row--total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="secure-checkout">
          <div className="secure-checkout__icons">
            <i className="fa-solid fa-shield-halved"></i>
            <i className="fa-solid fa-lock"></i>
          </div>
          <div className="secure-checkout__content">
            <strong>100% Secure Checkout</strong>
            <p>Your payment information is encrypted and secure</p>
          </div>
        </div>
      </div>
    </div>
  );
}
