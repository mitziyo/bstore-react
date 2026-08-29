export function GuestCheckoutSidebar() {
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
              <span>$73.96</span>
            </div>
            <div className="checkout_item">
              <span>
                Shipping{" "}
                <button
                  type="button"
                  className="tooltip-btn"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Minimum delivery charge will start from $5.99. However, delivery charges will vary depending on the number, price, weight and location of your product."
                >
                  <i className="icon_info_alt"></i>
                </button>
              </span>
              <span>$5.99</span>
            </div>
            <div className="checkout_item">
              <span>Total</span>
              <span>$79.95</span>
            </div>
            <div className="checkout_item strong">
              <span>Payable Total</span>
              <span>$79.95</span>
            </div>
          </div>
        </div>

        <div className="cart_proceed_checkout mt-3">
          <a href="/checkout-gift" className="bj_theme_btn strock_btn w-100">
            Order as Gift
          </a>
          <a href="/checkout-login" className="bj_theme_btn w-100 border-0 mt-2">
            Proceed to Checkout <i className="arrow_right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
