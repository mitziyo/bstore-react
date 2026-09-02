import { Link } from "react-router-dom";
import { BookGenre } from "../../../lib/enums/product.enum";

const CATEGORIES = [
  { icon: "icon-fiction", label: "Fiction", value: BookGenre.FICTION },
  { icon: "icon-uncategorized", label: "Non-Fiction", value: BookGenre.NON_FICTION },
  { icon: "icon-mystery", label: "Thriller", value: BookGenre.THRILLER },
  { icon: "icon-heart", label: "Romance", value: BookGenre.ROMANCE },
  { icon: "icon-drama", label: "Children", value: BookGenre.CHILDREN },
  { icon: "icon-history", label: "History", value: BookGenre.HISTORY },
  { icon: "icon-fiction", label: "Sci-Fi", value: BookGenre.SCI_FI },
];

export function BookCategories() {
  return (
    <section id="categories" className="bj_book_category_area sec_padding_three" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="section_title text-center wow fadeInUp" data-wow-delay="0.2s">
          <h2 className="title">Explore Categories</h2>
        </div>
        <div className="bj_category_inner">
          {CATEGORIES.map((category, index) => (
            <Link
              key={category.value}
              to={`/shop?genre=${category.value}`}
              className="bj_book_category_item text-center wow fadeInUp"
              data-wow-delay={`${0.2 + index * 0.1}s`}
            >
              <div className="icon">
                <i className={category.icon}></i>
              </div>
              <h6>{category.label}</h6>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
