import "../../../scss/newArrivals/newArrivals.scss";
import { NewArrivalsGrid } from "./NewArrivalsGrid";

export function NewArrivalsPage() {
  return (
    <>
      <section className="bj_breadcrumb_area text-center banner_animation_03" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="bg_one" style={{ background: "no-repeat center 0/cover url(/img/breadcrumb/breadcrumb_banner_bg.png)" }}></div>
        <div className="container">
          <h2 className="title wow fadeInUp">New Arrivals</h2>
          <ol className="breadcrumb justify-content-center wow fadeInUp">
            <li>
              <a href="/">Home</a>
            </li>
            <li className="active">New Arrivals</li>
          </ol>
        </div>
      </section>

      <section className="sec_padding" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <div className="new-arrivals-header text-center wow fadeInUp">
            <h2>📚 Fresh Off the Press!</h2>
            <p className="mb-0">Discover the latest additions to our collection. Updated daily with new releases.</p>
          </div>
          <NewArrivalsGrid />
        </div>
      </section>
    </>
  );
}
