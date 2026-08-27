import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: string;
  text: string;
  date: string;
}

const TESTIMONIALS: Testimonial[] = [
  { id: "t1", name: "Lucaia Salsa", role: "CEO, Mecroso", rating: "4.9", text: "We denounce with righteous indignation and dislike men who areso beguiled and by the charms of pleasure of the moment.", date: "Tue, April 29, 2021" },
  { id: "t2", name: "Muaz Bin", role: "CTO, Mecroso", rating: "5", text: "We denounce with righteous indignation and dislike men who areso beguiled and by the charms of pleasure of the moment.", date: "Tue, April 29, 2021" },
  { id: "t3", name: "Travis Scott", role: "CEO, Mecroso", rating: "4.9", text: "We denounce with righteous indignation and dislike men who areso beguiled and by the charms of pleasure of the moment.", date: "Tue, April 29, 2021" },
  { id: "t4", name: "Eminem", role: "CEO, Mecroso", rating: "4.9", text: "We denounce with righteous indignation and dislike men who areso beguiled and by the charms of pleasure of the moment.", date: "Tue, April 29, 2021" },
];

const CLIENT_LOGOS = [1, 2, 3, 4, 5, 6];

export function Testimonials() {
  return (
    <section className="bj_testimonial_area_three sec_padding" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-5">
            <h2 className="title wow fadeInLeft">What our happy clients say about?</h2>
          </div>
          <div className="col-lg-5 offset-lg-2 wow fadeInRight">
            <p>
              Pulvinar nibh vulputate sit dictum consequat adipiscing non tincidunt elit. Tempor orci, in dolor, nulla. Aliquam
              aute irure dolor in reprehenderit in volu incididunt ut labore.
            </p>
          </div>
        </div>
        <div className="testimonial_slider_three wow fadeInUp" data-wow-delay="0.6s">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 } }}
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="single-widget">
                  <div className="widget-title">
                    <div className="author-img">
                      <img src="/img/home-four/author1.jpg" alt={t.name} />
                    </div>
                    <div className="auth-rating">
                      <div className="auth-info">
                        <h6>{t.name}</h6>
                        <span>{t.role}</span>
                      </div>
                      <div className="rating">
                        <span>{t.rating}</span>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <div className="widget-body">
                    <i className="icon-quote"></i>
                    <p>{t.text}</p>
                    <div className="post-date">
                      <img src="/img/home-four/calender.png" alt="" /> {t.date}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="bj_clients_logo">
          <div className="bj_clients_title">
            <h3>We featured by</h3>
          </div>
          <div className="clients_logo_inner">
            {CLIENT_LOGOS.map((n) => (
              <a href="#" className="clients_logo_item wow fadeInUp" data-wow-delay="0.2s" key={n}>
                <img src={`/img/home-three/banner/clients-logo${n}.png`} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
