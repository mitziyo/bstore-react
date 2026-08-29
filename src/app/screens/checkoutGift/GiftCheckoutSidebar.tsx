import { useState } from "react";

export function GiftCheckoutSidebar() {
  const [promoOpen, setPromoOpen] = useState(false);

  return (
    <div className="col-lg-4">
      <div className="bj_checkout_sidebar">
        <div className="cart_checkout_summary border-bottom-radius-0">
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
        <div className="checkout_promo_apply">
          <div className="promo_body">
            <a
              className="promo_header"
              role="button"
              onClick={(e) => {
                e.preventDefault();
                setPromoOpen((v) => !v);
              }}
            >
              <h6 className="mb-0">Apply Voucher or Promo Code</h6>
              <i className="fa-solid fa-chevron-down"></i>
            </a>
            {promoOpen && (
              <form className="d-flex align-items-center">
                <input type="text" className="form-control" placeholder="Enter Promo Code" />
                <button className="bj_theme_btn" type="button">
                  Apply
                </button>
              </form>
            )}
          </div>
          <div className="promo-success">You are saving 26%</div>
        </div>
      </div>
    </div>
  );
}
