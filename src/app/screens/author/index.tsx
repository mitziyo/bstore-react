import "../../../scss/about/about.scss";
import "../../../scss/author/author.scss";
import { Breadcrumb } from "../shop/Breadcrumb";
import { AuthorSidebar } from "./AuthorSidebar";

const AUTHORS = [
  { name: "James Mango", image: "/img/team-img1.jpg" },
  { name: "Nolan Bator", image: "/img/team-img2.jpg" },
  { name: "Gretchen Curtis", image: "/img/team-img3.jpg" },
  { name: "Cristofer Dorwart", image: "/img/team-img4.jpg" },
  { name: "James Mango", image: "/img/team-img5.jpg" },
  { name: "Nolan Bator", image: "/img/team-img6.jpg" },
  { name: "Angel Lipshutz", image: "/img/team-img7.jpg" },
  { name: "Miracle Westervelt", image: "/img/team-img8.jpg" },
  { name: "Jordyn Geidt", image: "/img/team-img9.jpg" },
];

export function AuthorPage() {
  return (
    <>
      <Breadcrumb title="Author" label="Author" />

      <section className="bj_author_area sec_padding" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <AuthorSidebar />
            </div>
            <div className="col-lg-9">
              <div className="row gy-4">
                {AUTHORS.map((author, index) => (
                  <div className="col-lg-4 col-md-4 col-sm-6" key={index}>
                    <div className="bj_team_item">
                      <div className="team_img">
                        <img src={author.image} alt="" />
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
          </div>
          <div className="text-center">
            <nav aria-label="pagination">
              <ul className="pagination pagi-content">
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="ti-angle-left"></i>Prev
                  </a>
                </li>
                <li className="page-item active" aria-current="page">
                  <span className="page-link">1</span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    ...
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next<i className="ti-angle-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
