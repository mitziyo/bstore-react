export function OrderSummarySidebar() {
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
              <span>Subtotal (3 items)</span>
              <span>$59.97</span>
            </div>
            <div className="summary-row">
              <span>
                Shipping
                <button type="button" className="info-tooltip" data-bs-toggle="tooltip" title="Shipping varies by location">
                  <i className="fa-solid fa-circle-info"></i>
                </button>
              </span>
              <span>$5.00</span>
            </div>
            <div className="summary-row">
              <span>Tax</span>
              <span>$4.50</span>
            </div>
            <div className="summary-row summary-row--discount">
              <span>
                <i className="fa-solid fa-tag"></i>
                Promo Applied
              </span>
              <span>-$15.00</span>
            </div>
            <div className="summary-row summary-row--total">
              <span>Total</span>
              <span>$54.47</span>
            </div>
          </div>
        </div>

        <div className="checkout-promo">
          <button className="promo-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#promoCollapse">
            <span>
              <i className="fa-solid fa-percent"></i>
              Have a promo code?
            </span>
            <i className="fa-solid fa-chevron-down promo-toggle__arrow"></i>
          </button>
          <div className="collapse" id="promoCollapse">
            <div className="promo-form">
              <input type="text" className="form-control" placeholder="Enter code" />
              <button className="promo-apply">Apply</button>
            </div>
          </div>
          <div className="promo-success">
            <i className="fa-solid fa-circle-check"></i>
            <span>
              <strong>SAVE15</strong> applied — You're saving $15.00!
            </span>
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

        <div className="payment-icons">
          <span>We Accept:</span>
          <div className="payment-icons__list">
            <i className="fa-brands fa-cc-visa"></i>
            <i className="fa-brands fa-cc-mastercard"></i>
            <i className="fa-brands fa-cc-amex"></i>
            <i className="fa-brands fa-cc-paypal"></i>
            <i className="fa-brands fa-cc-stripe"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
