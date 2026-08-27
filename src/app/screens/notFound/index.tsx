import "../../../scss/notFound/notFound.scss";

export function NotFoundPage() {
  return (
    <section className="error_area" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="error_dot one"></div>
      <div className="error_dot two"></div>
      <div className="error_dot three"></div>
      <div className="error_dot four"></div>
      <div className="container">
        <div className="error_content_two text-center">
          <div className="error_img">
            <img className="error_shap" src="/img/404_bg.png" alt="" />
            <div className="one wow clipInDown" data-wow-delay="1s">
              <img className="img_one" src="/img/404_two.png" alt="" />
            </div>
            <div className="two wow clipInDown" data-wow-delay="1.5s">
              <img className="img_two" src="/img/404_three.png" alt="" />
            </div>
            <div className="three wow clipInDown" data-wow-delay="1.8s">
              <img className="img_three" src="/img/404_one.png" alt="" />
            </div>
          </div>
          <h2>Error. We can&rsquo;t find the page you&rsquo;re looking for.</h2>
          <p>Sorry for the inconvenience. Go to our homepage or check out our latest collections for Fiction, Non-Fiction, Bestsellers...</p>
          <form className="error_search" onSubmit={(e) => e.preventDefault()}>
            <input type="text" className="form-control" placeholder="Search" />
          </form>
          <a href="/" className="bj_theme_btn">
            <i className="arrow_left"></i>Back to Home Page
          </a>
        </div>
      </div>
    </section>
  );
}
