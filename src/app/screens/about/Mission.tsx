const FEATURES = [
  {
    icon: "icon-gift",
    title: "Make the Best Present",
    text: "A book is still one of the best presents for anyone on any occasion.",
  },
  {
    icon: "icon-feather-pen",
    title: "Find Your Favorite Authors",
    text: "Great writers are pretty inspiring, so we offer the widest selection.",
  },
  {
    icon: "icon-open-book1",
    title: "Read Reader's Reviews",
    text: "You will find reviews of magazines, online sources and favorite books.",
  },
];

export function Mission() {
  return (
    <section className="bj_mission_area sec_padding" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="bj_video_inner wow fadeInLeft" data-wow-delay="0.2s">
              <img className="img-fluid" src="/img/about_img.png" alt="" />
              <a className="play-btn" href="https://www.youtube.com/embed/nyxxI6J0MrE">
                <i className="arrow_triangle-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bj_mission_content pe-5 wow fadeInRight" data-wow-delay="0.3s">
              <h2 className="title">Our Mission</h2>
              <p>
                Our mission is to bring the passion and love for reading books back. whether it's a regular paper book, or an
                online edition, we want our readers to know that we appreciate quality and artful storytelling.
              </p>
              <p>Join our community and enjoy multiple genres, modern and classic authors, reviews, critics and more!</p>
            </div>
          </div>
        </div>
        <div className="row features_box">
          {FEATURES.map((feature) => (
            <div className="col-lg-4 col-md-6" key={feature.icon}>
              <div className="bj_features_item text-center wow fadeInUp" data-wow-delay="0.2s">
                <div className="icon-wrapper">
                  <i className={`${feature.icon} icon`}></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                <a href="#" className="bj_theme_btn text_btn">
                  Read more <i className="arrow_right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
