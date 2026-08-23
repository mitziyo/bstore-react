export function CheckoutSidebar() {
  return (
    <div className="col-lg-4">
      <div className="bj_checkout_sidebar">
        <div className="cart_address_select mb-3">
          <div className="widget_title">
            Shipping Address
            <button className="addres_sidebar_cart_trigger">Edit</button>
          </div>
          <div className="short_address">
            <div className="select_address_radio">
              <div></div>
            </div>
            New York, Usa
          </div>
          <div className="acc_info">
            <p>Name: Muaz BK</p>
            <p>Phone: 0123456789,</p>
          </div>
          <div className="location">
            123 Main Street, Apt 4B
            New York, NY 10001
          </div>
        </div>
        <div className="cart_checkout_summary">
          <div className="cart_checkout_header">
            <h5>Checkout Summary</h5>
          </div>
          <div className="cart_checkout_body">
            <div className="checkout_item">
              <span>Subtotal</span>
              <span>1,243 Tk</span>
            </div>
            <div className="checkout_item">
              <span>
                Shipping{" "}
                <button
                  type="button"
                  className="tooltip-btn"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Minimum delivery charge will start from Rs.48. However, delivery charges will vary depending on the number, price, weight and location of your product."
                >
                  <i className="icon_info_alt"></i>
                </button>
              </span>
              <span>57 Tk</span>
            </div>
            <div className="checkout_item">
              <span>Total</span>
              <span>777 Tk</span>
            </div>
            <div className="checkout_item strong">
              <span>Payable Total</span>
              <span>1,243 Tk</span>
            </div>
          </div>
        </div>

        <div className="cart_proceed_checkout mt-3">
          <a href="/checkout-gift" className="bj_theme_btn strock_btn w-100">
            Order as Gift
          </a>
          <a href="/checkout" className="bj_theme_btn w-100 border-0 mt-2">
            Proceed to Checkout <i className="arrow_right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
