import { useParallax } from "../../hooks/useParallax";

interface BreadcrumbProps {
  label?: string;
}

export function Breadcrumb({ label = "Shop Sidebar" }: BreadcrumbProps) {
  const parallaxRef = useParallax<HTMLElement>(7, 10);

  return (
    <section
      ref={parallaxRef}
      className="bj_breadcrumb_area text-center banner_animation_03"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div
        className="bg_one"
        style={{ background: "no-repeat center 0/cover url(/img/breadcrumb/breadcrumb_banner_bg.png)" }}
      ></div>
      <div className="bd_shape one wow fadeInDown layer" data-wow-delay="0.3s" data-depth="0.5">
        <img data-parallax='{"y": -50}' src="/img/breadcrumb/book_left1.png" alt="" />
      </div>
      <div className="bd_shape two wow fadeInUp layer" data-depth="0.6" data-wow-delay="0.4s">
        <img data-parallax='{"y": 30}' src="/img/breadcrumb/book-left2.png" alt="" />
      </div>
      <div className="bd_shape three wow fadeInDown layer" data-wow-delay="0.3s" data-depth="0.5">
        <img data-parallax='{"y": -50}' src="/img/breadcrumb/plane-1.png" alt="" />
      </div>
      <div className="bd_shape four wow fadeInUp layer" data-depth="0.6" data-wow-delay="0.4s">
        <img data-parallax='{"y": 30}' src="/img/breadcrumb/plan-3.png" alt="" />
      </div>
      <div className="bd_shape five wow fadeInUp layer" data-depth="0.6" data-wow-delay="0.4s">
        <img data-parallax='{"y": 80}' src="/img/breadcrumb/plan-2.png" alt="" />
      </div>
      <div className="bd_shape six wow fadeInDown layer" data-wow-delay="0.3s" data-depth="0.5">
        <img data-parallax='{"y": -60}' src="/img/breadcrumb/book-right.png" alt="" />
      </div>
      <div className="bd_shape seven wow fadeInUp layer" data-depth="0.6" data-wow-delay="0.4s">
        <img data-parallax='{"x": 50}' src="/img/breadcrumb/book-right2.png" alt="" />
      </div>
      <div className="container">
        <h2 className="title wow fadeInUp" data-wow-delay="0.2s">
          Book Shope
        </h2>
        <ol className="breadcrumb justify-content-center wow fadeInUp" data-wow-delay="0.3s">
          <li>
            <a href="/">Home</a>
          </li>
          <li className="active">{label}</li>
        </ol>
      </div>
    </section>
  );
}
