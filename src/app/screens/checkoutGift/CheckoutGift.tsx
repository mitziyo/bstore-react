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
                  <select className="selectpickers" defaultValue="South Korea">
                    <option value="South Korea">South Korea</option>
                  </select>
                </div>
                <div className="col-md-6 form-group">
                  <select className="selectpickers" defaultValue="">
                    <option value="" disabled>
                      Select City
                    </option>
                    <option value="Seoul">Seoul</option>
                    <option value="Busan">Busan</option>
                    <option value="Incheon">Incheon</option>
                    <option value="Daegu">Daegu</option>
                    <option value="Daejeon">Daejeon</option>
                  </select>
                </div>
                <div className="col-md-6 form-group">
                  <select className="selectpickers" defaultValue="">
                    <option value="" disabled>
                      Select Area
                    </option>
                    <option value="Gangnam-gu">Gangnam-gu</option>
                    <option value="Jongno-gu">Jongno-gu</option>
                    <option value="Seocho-gu">Seocho-gu</option>
                    <option value="Songpa-gu">Songpa-gu</option>
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
                  <select className="selectpickers" defaultValue="South Korea">
                    <option value="South Korea">South Korea</option>
                  </select>
                </div>
                <div className="col-md-6 form-group">
                  <select className="selectpickers" defaultValue="">
                    <option value="" disabled>
                      Select City
                    </option>
                    <option value="Seoul">Seoul</option>
                    <option value="Busan">Busan</option>
                    <option value="Incheon">Incheon</option>
                    <option value="Daegu">Daegu</option>
                    <option value="Daejeon">Daejeon</option>
                  </select>
                </div>
                <div className="col-md-6 form-group">
                  <select className="selectpickers" defaultValue="">
                    <option value="" disabled>
                      Select Area
                    </option>
                    <option value="Gangnam-gu">Gangnam-gu</option>
                    <option value="Jongno-gu">Jongno-gu</option>
                    <option value="Seocho-gu">Seocho-gu</option>
                    <option value="Songpa-gu">Songpa-gu</option>
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
    </div>
  );
}
