const TRUST_BADGES = [
  { icon: "fa-solid fa-rotate-left", title: "7 Days Return", text: "Easy returns policy" },
  { icon: "fa-solid fa-coins", title: "Earn Points", text: "On every purchase" },
  { icon: "fa-solid fa-shield-halved", title: "Secure Payment", text: "100% protected" },
];

export function CheckoutForm() {
  return (
    <div className="col-lg-7">
      <div className="checkout-steps">
        <div className="checkout-step checkout-step--active">
          <div className="checkout-step__number">1</div>
          <span className="checkout-step__label">Account</span>
        </div>
        <div className="checkout-step__line"></div>
        <div className="checkout-step">
          <div className="checkout-step__number">2</div>
          <span className="checkout-step__label">Shipping</span>
        </div>
        <div className="checkout-step__line"></div>
        <div className="checkout-step">
          <div className="checkout-step__number">3</div>
          <span className="checkout-step__label">Payment</span>
        </div>
      </div>

      <div className="checkout-card">
        <div className="checkout-card__header">
          <div className="checkout-card__icon">
            <i className="fa-regular fa-user"></i>
          </div>
          <div>
            <h3 className="checkout-card__title">Account Details</h3>
            <p className="checkout-card__subtitle">Login or create a new account</p>
          </div>
        </div>
        <div className="checkout-card__body">
          <form className="checkout-form" action="#" method="post">
            <div className="row gy-3">
              <div className="col-md-12">
                <div className="form-floating-group">
                  <input type="email" className="form-floating-group__input" id="login_email" placeholder=" " required />
                  <label className="form-floating-group__label" htmlFor="login_email">
                    Email Address *
                  </label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating-group">
                  <input type="password" className="form-floating-group__input" id="password" placeholder=" " required />
                  <label className="form-floating-group__label" htmlFor="password">
                    Password *
                  </label>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-between align-items-center flex-wrap gap-2">
                <span className="checkout-form__text">
                  New user? <a href="/registration">Create an account</a>
                </span>
                <a href="#" className="checkout-form__link">
                  Forgot password?
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="checkout-card">
        <div className="checkout-card__header">
          <div className="checkout-card__icon">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div>
            <h3 className="checkout-card__title">Shipping Address</h3>
            <p className="checkout-card__subtitle">Where should we deliver your order?</p>
          </div>
        </div>
        <div className="checkout-card__body">
          <div className="address-type-toggle">
            <label className="address-type">
              <input type="radio" name="address_type" value="home" defaultChecked />
              <div className="address-type__card">
                <i className="fa-solid fa-house"></i>
                <span>Home</span>
              </div>
            </label>
            <label className="address-type">
              <input type="radio" name="address_type" value="office" />
              <div className="address-type__card">
                <i className="fa-solid fa-building"></i>
                <span>Office</span>
              </div>
            </label>
          </div>

          <form className="checkout-form" action="#" method="post">
            <div className="row gy-3">
              <div className="col-md-12">
                <div className="form-floating-group">
                  <input className="form-floating-group__input" type="text" id="full_name" placeholder=" " required />
                  <label className="form-floating-group__label" htmlFor="full_name">
                    Full Name *
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating-group">
                  <input className="form-floating-group__input" type="tel" id="phone_no" placeholder=" " required />
                  <label className="form-floating-group__label" htmlFor="phone_no">
                    Phone Number *
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating-group">
                  <input className="form-floating-group__input" type="tel" id="alt_phone" placeholder=" " />
                  <label className="form-floating-group__label" htmlFor="alt_phone">
                    Alternative Phone
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <select className="selectpickers form-select" defaultValue="Bangladesh">
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                </select>
              </div>
              <div className="col-md-6">
                <select className="selectpickers form-select" defaultValue="">
                  <option value="" disabled>
                    Select City
                  </option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chittagong">Chittagong</option>
                  <option value="Comilla">Comilla</option>
                  <option value="Khulna">Khulna</option>
                </select>
              </div>
              <div className="col-md-6">
                <select className="selectpickers form-select" defaultValue="">
                  <option value="" disabled>
                    Select Area
                  </option>
                  <option value="Area 1">Area 1</option>
                  <option value="Area 2">Area 2</option>
                  <option value="Area 3">Area 3</option>
                </select>
              </div>
              <div className="col-md-6">
                <div className="form-floating-group">
                  <input className="form-floating-group__input" type="text" id="zip_code" placeholder=" " />
                  <label className="form-floating-group__label" htmlFor="zip_code">
                    Zip/Postal Code
                  </label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating-group">
                  <textarea className="form-floating-group__input" id="address" placeholder=" "></textarea>
                  <label className="form-floating-group__label" htmlFor="address">
                    Full Address *
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="trust-badges">
        {TRUST_BADGES.map((badge) => (
          <div className="trust-badge" key={badge.title}>
            <div className="trust-badge__icon">
              <i className={badge.icon}></i>
            </div>
            <div className="trust-badge__content">
              <h6>{badge.title}</h6>
              <p>{badge.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="checkout-card">
        <div className="checkout-card__header">
          <div className="checkout-card__icon">
            <i className="fa-regular fa-credit-card"></i>
          </div>
          <div>
            <h3 className="checkout-card__title">Payment Method</h3>
            <p className="checkout-card__subtitle">Select your preferred payment option</p>
          </div>
        </div>
        <div className="checkout-card__body">
          <div className="payment-methods">
            <div className="payment-group">
              <h6 className="payment-group__title">
                <i className="fa-solid fa-truck"></i>
                Cash on Delivery
              </h6>
              <div className="payment-options">
                <label className="payment-option">
                  <input type="radio" name="payment_method" value="cod" defaultChecked />
                  <div className="payment-option__card">
                    <img src="/img/cart/cod.webp" alt="COD" />
                    <span>Pay on Delivery</span>
                    <i className="fa-solid fa-circle-check payment-option__check"></i>
                  </div>
                </label>
              </div>
            </div>

            <div className="payment-group">
              <h6 className="payment-group__title">
                <i className="fa-solid fa-wallet"></i>
                Digital Wallets
              </h6>
              <div className="payment-options">
                <label className="payment-option">
                  <input type="radio" name="payment_method" value="skrill" />
                  <div className="payment-option__card">
                    <img src="/img/cart/Skrill.png" alt="Skrill" />
                    <i className="fa-solid fa-circle-check payment-option__check"></i>
                  </div>
                </label>
                <label className="payment-option">
                  <input type="radio" name="payment_method" value="stripe" />
                  <div className="payment-option__card">
                    <img src="/img/cart/Stripe.png" alt="Stripe" />
                    <i className="fa-solid fa-circle-check payment-option__check"></i>
                  </div>
                </label>
                <label className="payment-option">
                  <input type="radio" name="payment_method" value="bitpay" />
                  <div className="payment-option__card">
                    <img src="/img/cart/Bitpay.png" alt="Bitpay" />
                    <i className="fa-solid fa-circle-check payment-option__check"></i>
                  </div>
                </label>
              </div>
            </div>

            <div className="payment-group">
              <h6 className="payment-group__title">
                <i className="fa-regular fa-credit-card"></i>
                Credit/Debit Card
              </h6>
              <div className="payment-options">
                <label className="payment-option payment-option--wide">
                  <input type="radio" name="payment_method" value="card" />
                  <div className="payment-option__card">
                    <img src="/img/cart/rok-ssl-card-icon-sslNew.webp" alt="Cards" />
                    <i className="fa-solid fa-circle-check payment-option__check"></i>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout-card__footer">
          <button type="submit" className="checkout-submit">
            <i className="fa-solid fa-lock"></i>
            <span>Confirm Order</span>
            <span className="checkout-submit__price">$54.97</span>
          </button>
        </div>
      </div>
    </div>
  );
}
