const CATEGORIES = [
  { icon: "icon-uncategorized", label: "Uncategorized" },
  { icon: "icon-biography", label: "Biography" },
  { icon: "icon-mystery", label: "Mystery" },
  { icon: "icon-drama", label: "Drama" },
  { icon: "icon-history", label: "History" },
  { icon: "icon-fiction", label: "Fiction" },
  { icon: "icon-heart", label: "Romantic" },
];

export function BookCategories() {
  return (
    <section className="bj_book_category_area sec_padding_three" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="bj_category_inner">
          {CATEGORIES.map((category, index) => (
            <a
              key={category.icon}
              href="#"
              className="bj_book_category_item text-center wow fadeInUp"
              data-wow-delay={`${0.2 + index * 0.1}s`}
            >
              <div className="icon">
                <i className={category.icon}></i>
              </div>
              <h6>{category.label}</h6>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
