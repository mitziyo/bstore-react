const AWARDS = [
  { title: "The winter of the Dark", year: "2021", genre: "Fantasy" },
  { title: "The Stranger Diaries", year: "2024", genre: "British crime" },
  { title: "The Stud Muffin and The Cupcake", year: "2021", genre: "Romance" },
  { title: "The Dynasty of the Exiled", year: "2021", genre: "Science-Fiction" },
  { title: "The Descentdant of Avalon", year: "2021", genre: "Science-Fiction" },
];

export function AuthorProfile() {
  return (
    <div className="row justify-content-center">
      <div className="col-xl-10">
        <div className="bj_author_single d-flex align-items-center">
          <img src="/img/author_img_big.jpg" alt="" />
          <div className="bj_author_single_content">
            <h2>Gustavo Carder</h2>
            <p>
              Diam, urna, ornare leo facilisis suspendisse eu rutrum id augue cursus tincidunt nisl eget ornare
              pharetra ac pharetra, pulvinar ipsum sed amet diam morbi.
            </p>
            <ul className="book_info">
              <li>
                <span>Position:</span> Book Writer
              </li>
              <li>
                <span>Born:</span> 1973
              </li>
              <li>
                <span>Category:</span>
                <a href="#">Biography,</a>
                <a href="#">Fantasy,</a>
                <a href="#">Sci-Fi</a>
              </li>
              <li>
                <span>Language:</span>
                <a href="#">English,</a>
                <a href="#">German</a>
              </li>
            </ul>
            <ul className="list-unstyled f_social_round">
              <li>
                <a href="#">
                  <i className="social_twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="social_facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="social_googleplus"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="social_pinterest"></i>
                </a>
              </li>
            </ul>
            <a href="/contact" className="bj_theme_btn">
              Contact Me
            </a>
          </div>
        </div>
        <div className="row award_inner">
          <div className="col-lg-7 col-md-7">
            <div className="award_content pe-5">
              <h2 className="title">Awards &amp; Nominations</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry&rsquo;s
                standard dummy text ever since the when an unknown printer took a galley of type.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry&rsquo;s
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                it to make a type specimen book. It has survived not only five centuries,
              </p>
              <div className="award_fact">
                <div className="bj_fact_item">
                  <div className="number">
                    <span className="counter">89</span>K+
                  </div>
                  <p>COPIES SOLD</p>
                </div>
                <div className="bj_fact_item">
                  <div className="number">
                    <span className="counter">21</span>
                  </div>
                  <p>BOOKS</p>
                </div>
                <div className="bj_fact_item">
                  <div className="number">
                    <span className="counter">5</span>
                  </div>
                  <p>AWARDS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5">
            <div className="award_list">
              <h4>Awards</h4>
              {AWARDS.map((award) => (
                <div className="award_list_item" key={award.title}>
                  <h5>{award.title}</h5>
                  <ul className="list-unstyled book_meta">
                    <li>{award.year}</li>
                    <li>{award.genre}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
