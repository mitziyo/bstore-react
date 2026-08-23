import { PaymentMethodCard } from "./PaymentMethodCard";

export function CheckoutGift() {
  return (
    <div className="col-lg-8">
      <div className="bj_checkout_content gift_cotent">
        <div className="row gx-0">
          <div className="col-lg-6">
            <div className="gift_left">
              <div className="gift-title">Gift From</div>
              <form className="row gy-3 gx-2" action="#" method="post">
                <div className="col-md-12 form-group">
                  <input type="text" className="form-control" required />
                  <label className="floating-label">Full Name *</label>
                </div>
                <div className="col-md-12 form-group">
                  <input type="text" className="form-control" id="from_phone_no" required />
                  <label className="floating-label">Phone No *</label>
                </div>
                <div className="col-md-12 form-group">
                  <input type="text" className="form-control" id="from_alternative_phone_no" required />
                  <label className="floating-label">Alternative Phone No</label>
                </div>
                <div className="col-md-12 form-group">
                  <select className="selectpickers" defaultValue="Bangladesh">
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                  </select>
                </div>
                <div className="col-md-6 form-group">
                  <select className="selectpickers" defaultValue="">
                    <option value="" disabled>
                      Select City
                    </option>
                    <option value="Comilla">Comilla</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chittagong">Chittagong</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Rangpur">Rangpur</option>
                    <option value="Mymensingh">Mymensingh</option>
                  </select>
                </div>
                <div className="col-md-6 form-group">
                  <select className="selectpickers" defaultValue="">
                    <option value="" disabled>
                      Select Area
                    </option>
                    <option value="Comilla">Comilla</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chittagong">Chittagong</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Rangpur">Rangpur</option>
                    <option value="Mymensingh">Mymensingh</option>
                  </select>
                </div>
                <div className="col-md-12 form-group">
                  <textarea className="form-control message" required></textarea>
                  <label className="floating-label">Address</label>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="gift_right">
              <div className="gift-title">Gift To</div>
              <form className="row gy-3 gx-2" action="#" method="post">
                <div className="col-md-12 form-group">
                  <input type="text" className="form-control" required />
                  <label className="floating-label">Full Name *</label>
                </div>
                <div className="col-md-12 form-group">
                  <select className="selectpickers" defaultValue="Bangladesh">
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                  </select>
                </div>
                <div className="col-md-6 form-group">
                  <select className="selectpickers" defaultValue="">
                    <option value="" disabled>
                      Select City
                    </option>
                    <option value="Comilla">Comilla</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chittagong">Chittagong</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Rangpur">Rangpur</option>
                    <option value="Mymensingh">Mymensingh</option>
                  </select>
                </div>
                <div className="col-md-6 form-group">
                  <select className="selectpickers" defaultValue="">
                    <option value="" disabled>
                      Select Area
                    </option>
                    <option value="Comilla">Comilla</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chittagong">Chittagong</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Rangpur">Rangpur</option>
                    <option value="Mymensingh">Mymensingh</option>
                  </select>
                </div>
                <div className="col-md-12 form-group">
                  <textarea className="form-control message" required></textarea>
                  <label className="floating-label">Address</label>
                </div>
                <div className="col-md-6 form-group">
                  <select className="selectpickers" defaultValue="">
                    <option value="" disabled>
                      Select Ocassion
                    </option>
                    <option value="Birth Day">Birth Day</option>
                    <option value="Annivarsery">Annivarsery</option>
                    <option value="Farewell">Farewell</option>
                  </select>
                </div>
                <div className="col-md-6 form-group">
                  <input type="text" className="form-control" required />
                  <label className="floating-label">Delivery Date *</label>
                </div>
                <div className="col-md-12 form-group">
                  <textarea className="form-control message" required></textarea>
                  <label className="floating-label">Gift Message</label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="cart-happy-return-parent mt-4 mb-0">
        <div className="cart-happy-return">
          <img src="/img/cart/happy-return-new.webp" alt="" />
          <p>7 Days Happy Return</p>
        </div>
        <div className="cart-happy-return">
          <img src="/img/cart/earn-points.svg" alt="" />
          <p>Purchase and Earn Point</p>
        </div>
      </div>

      <PaymentMethodCard />
    </div>
  );
}
