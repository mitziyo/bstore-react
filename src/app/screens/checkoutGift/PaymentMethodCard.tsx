interface PaymentMethodCardProps {
  footerAlignClass?: string;
}

export function PaymentMethodCard({ footerAlignClass = "text-end" }: PaymentMethodCardProps) {
  return (
    <div className="bj_checkout_content payment_method_wrapper mt-4">
      <div className="content_header">
        Payment Method
        <span>(Please select a payment method)</span>
      </div>
      <div className="content_body">
        <div className="porduct_payment_method_wrapper">
          <div className="field_title">Cash On Delivery</div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-check">
                <label className="form-check-label" htmlFor="cod_payment">
                  <input className="form-check-input" type="radio" name="check_payment_method" id="cod_payment" />
                  <img src="/img/cart/cod.webp" alt="" />
                  <span>Cash On Delivery</span>
                </label>
              </div>
            </div>
          </div>
          <hr />

          <div className="field_title mt-3">Mobile Wallet</div>
          <div className="row gy-lg-0 gy-2">
            <div className="col-lg-4">
              <div className="form-check">
                <label className="form-check-label" htmlFor="mobile_wallet_payment">
                  <input className="form-check-input" type="radio" name="check_payment_method" id="mobile_wallet_payment" />
                  <img src="/img/cart/Skrill.png" alt="" />
                </label>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-check">
                <label className="form-check-label" htmlFor="mobile_wallet_payment_2">
                  <input className="form-check-input" type="radio" name="check_payment_method" id="mobile_wallet_payment_2" />
                  <img src="/img/cart/Stripe.png" alt="" />
                </label>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-check">
                <label className="form-check-label" htmlFor="mobile_wallet_payment_3">
                  <input className="form-check-input" type="radio" name="check_payment_method" id="mobile_wallet_payment_3" />
                  <img src="/img/cart/Bitpay.png" alt="" />
                </label>
              </div>
            </div>
          </div>
          <hr />
          <div className="field_title mt-3">Debit/Credit Card</div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-check">
                <label className="form-check-label" htmlFor="debit_card_payment">
                  <input className="form-check-input" type="radio" name="check_payment_method" id="debit_card_payment" />
                  <img src="/img/cart/rok-ssl-card-icon-sslNew.webp" alt="" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className={`payment_method_footer ${footerAlignClass}`}>
        <a href="#" className="bj_theme_btn">
          Confirm Order <span className="price ms-1">1,585 Tk</span>
        </a>
      </div>
    </div>
  );
}
