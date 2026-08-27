const AUTHORS = [
  { image: "/img/team-img1.jpg", name: "James Mango" },
  { image: "/img/team-img2.jpg", name: "Nolan Bator" },
  { image: "/img/team-img3.jpg", name: "Gretchen Curtis" },
  { image: "/img/team-img4.jpg", name: "Cristofer Dorwart" },
];

export function PopularAuthors() {
  return (
    <section className="bj_author_area sec_padding">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2 className="title wow fadeInLeft" data-wow-delay="0.2s">
              Most Popular Authors
            </h2>
          </div>
          <div className="col-lg-4 text-lg-end">
            <a href="/author" className="bj_theme_btn strock_btn ms-0 wow fadeInRight" data-wow-delay="0.3s">
              VIEW MORE
            </a>
          </div>
        </div>
        <div className="row">
          {AUTHORS.map((author) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={author.name}>
              <div className="bj_team_item wow fadeInUp" data-wow-delay="0.2s">
                <div className="team_img">
                  <img src={author.image} alt={author.name} />
                  <div className="social_icon">
                    <a href="#">
                      <i className="social_facebook"></i>
                    </a>
                    <a href="#">
                      <i className="social_twitter"></i>
                    </a>
                    <a href="#">
                      <i className="social_googleplus"></i>
                    </a>
                  </div>
                </div>
                <a href="/author-single">
                  <h5>{author.name}</h5>
                </a>
                <span className="name">Author</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
