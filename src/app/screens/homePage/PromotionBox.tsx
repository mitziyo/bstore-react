export function PromotionBox() {
  return (
    <section className="promotion_box_area" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="promotion_box_inner text-center" style={{ backgroundColor: "#E4EFE7" }}>
          <ul className="list-unstyled shap_img">
            <li className="wow fadeInLeft" data-wow-delay="0.2s">
              <img src="/img/home-two/promo_book1.png" alt="" />
            </li>
            <li className="wow fadeInLeft" data-wow-delay="0.6s">
              <img src="/img/home-two/promo_book5.png" alt="" />
            </li>
          </ul>
          <div className="content wow fadeInUp" data-wow-delay="0.2s">
            <h5>WHAT'S HOT IN AUGUST</h5>
            <h2 className="title">
              Get -30% purchase on
              <br />
              order over $199.00
            </h2>
            <a href="/shop" className="bj_theme_btn">
              Shop now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
