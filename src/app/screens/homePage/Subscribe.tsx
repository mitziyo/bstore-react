export function Subscribe() {
  return (
    <section className="bj_subscribe_area_two" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="bj_subscribe_inner" style={{ backgroundColor: "#E4EFE7" }}>
          <ul className="list-unstyled bj_subscribe_bg">
            <li>
              <img className="wow fadeInLeft" data-wow-delay="0.2s" src="/img/home-two/sub_book2.png" alt="" />
            </li>
            <li>
              <img className="wow fadeInLeft" data-wow-delay="0.3s" src="/img/home-two/sub_book3.png" alt="" />
            </li>
            <li>
              <img className="wow fadeInLeft" data-wow-delay="0.4s" src="/img/home-two/sub_book1.png" alt="" />
            </li>
          </ul>
          <div className="row justify-content-end">
            <div className="col-lg-7">
              <div className="bj_subscribe_content wow fadeInRight" data-wow-delay="0.4s">
                <h3 className="title">Subscribe</h3>
                <p>Get notified for new books and collections by subscribing to our newsletter.</p>
                <form action="#" className="bj_subscribe_form">
                  <div className="input-group">
                    <input type="email" placeholder="Email address here" className="form-control" />
                    <button type="submit" className="bj_theme_btn">
                      Sign Up
                    </button>
                  </div>
                  <div className="checkbox condition_text">
                    <input type="checkbox" value="None" id="one" name="check" />
                    <label className="checkbox_input" htmlFor="one">
                      I have read and agree to the terms &amp; conditions
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
