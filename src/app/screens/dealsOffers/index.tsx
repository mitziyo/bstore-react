import "../../../scss/dealsOffers/dealsOffers.scss";
import { CountdownTimer } from "./CountdownTimer";
import { DealsGrid } from "./DealsGrid";

export function DealsOffersPage() {
  return (
    <>
      <section className="bj_breadcrumb_area text-center banner_animation_03" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="bg_one" style={{ background: "no-repeat center 0/cover url(/img/breadcrumb/breadcrumb_banner_bg.png)" }}></div>
        <div className="container">
          <h2 className="title wow fadeInUp">Deals &amp; Offers</h2>
          <ol className="breadcrumb justify-content-center wow fadeInUp">
            <li>
              <a href="/">Home</a>
            </li>
            <li className="active">Deals &amp; Offers</li>
          </ol>
        </div>
      </section>

      <section className="sec_padding" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <div className="deals-banner wow fadeInUp">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <h2>🔥 Flash Sale - Up to 70% OFF!</h2>
                <p>Hurry! These deals won&rsquo;t last long. Grab your favorite books now.</p>
                <CountdownTimer />
                <a href="/shop" className="bj_theme_btn">
                  Shop All Deals
                </a>
              </div>
              <div className="col-lg-5 text-center d-none d-lg-block">
                <img src="/img/home/tab_book1.png" alt="Book" style={{ height: 250, filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))" }} />
              </div>
            </div>
          </div>
          <DealsGrid />
        </div>
      </section>
    </>
  );
}
