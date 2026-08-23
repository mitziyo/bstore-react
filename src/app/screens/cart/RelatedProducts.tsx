import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface RelatedProduct {
  id: string;
  img: string;
  title: string;
  author: string;
}

const PRODUCTS: RelatedProduct[] = [
  { id: "r1", img: "/img/home/choice-4.png", title: "Echoes of Eternity", author: "Rick Riordan" },
  { id: "r2", img: "/img/home/choice-2.png", title: "I Must Betray You", author: "Rick Riordan" },
  { id: "r3", img: "/img/home/choice-3.png", title: "How To Babysit A..", author: "Rick Riordan" },
  { id: "r4", img: "/img/home/choice-1.png", title: "Surprisingly Sarah", author: "Rick Riordan" },
  { id: "r5", img: "/img/home/choice-2.png", title: "Surprisingly Sarah", author: "Rick Riordan" },
  { id: "r6", img: "/img/home/choice-2.png", title: "Surprisingly Sarah", author: "Rick Riordan" },
];

export function RelatedProducts() {
  return (
    <section className="best_selling_pr_area sec_padding" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="section_title text-center wow fadeInUp" data-wow-delay="0.2s">
          <h3 className="title_two">Popular Products You May Like</h3>
          <p>Reading books helps you to develop your communication skill</p>
        </div>

        <div className="best_slider">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={0}
            slidesPerView={4}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {PRODUCTS.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="item">
                  <div className="bj_new_pr_item">
                    <a href="/product-single" className="img">
                      <img src={product.img} alt="book" />
                    </a>
                    <a className="wish_btn" href="/my-wishlist" data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                      <i className="icon_heart_alt"></i>
                    </a>
                    <div className="bj_new_pr_content_two">
                      <div className="d-flex justify-content-between">
                        <a href="/product-single">
                          <h4 className="bj_new_pr_title">{product.title}</h4>
                        </a>
                        <div className="book_price">
                          <sup>$</sup>25<sup>.00</sup>
                        </div>
                      </div>
                      <div className="writer_name">
                        <i className="icon-user"></i> <a href="/author-single">{product.author}</a>
                      </div>
                      <div className="ratting">
                        <div className="ratting_icon">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <span>(252)</span>
                      </div>
                      <a href="/checkout" className="bj_theme_btn">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
