interface BlogPost {
  id: string;
  img: string;
  category: string;
  title: string;
  author: string;
}

const POSTS: BlogPost[] = [
  {
    id: "b1",
    img: "/img/home-two/blog_img1.jpg",
    category: "Book Journeys",
    title: "Uncover Your Next Great Read: A Journey Through BookJar",
    author: "Talan Torff",
  },
  {
    id: "b2",
    img: "/img/home-two/blog_img2.jpg",
    category: "Stories Uncovered",
    title: "Beyond the Pages: Discover the Magic Inside BookJar",
    author: "Muaz Bk",
  },
  {
    id: "b3",
    img: "/img/home-two/blog_img3.jpg",
    category: "Reader's Haven",
    title: "Stories Await: Dive into a World of Books at BookJar",
    author: "Jason Moe",
  },
];

export function HomeBlog() {
  return (
    <section className="bj_home_blog_area sec_padding pt-0" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="section_title text-center wow fadeInUp" data-wow-delay="0.2s">
          <h2 className="title">Articles &amp; Tips</h2>
          <p>Browse the latest articles and tips from our blog.</p>
        </div>
        <div className="row">
          {POSTS.map((post, index) => (
            <div className="col-lg-4 col-md-6" key={post.id}>
              <div className="bj_blog_grid_item wow fadeInUp" data-wow-delay={`${0.3 + index * 0.1}s`}>
                <div className="bj_blog_img">
                  <a href="#">
                    <img className="img-fluid" src={post.img} alt="" />
                  </a>
                  <a href="#" className="blog_category">
                    {post.category}
                  </a>
                </div>
                <a href="/blog-details">
                  <h3 className="blog_title">{post.title}</h3>
                </a>
                <div className="blog_meta">
                  <div className="post_author">
                    <img src="/img/home-two/author1.jpg" alt="" />
                    <a href="/author-single">{post.author}</a>
                  </div>
                  <div className="post_date">
                    <i className="icon_calendar"></i>Nov 08, 2024
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
