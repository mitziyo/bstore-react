interface Ebook {
  id: string;
  img: string;
  title: string;
  rating: string;
  source: string;
  readUrl: string;
}

const EBOOKS: Ebook[] = [
  { id: "e1", img: "/img/cart/best_book1.jpg", title: "Game Of Thrones", rating: "5.0", source: "Free Learning", readUrl: "http://www.googleguide.com/print/adv_op_ref.pdf" },
  { id: "e2", img: "/img/cart/best_book2.jpg", title: "Game Of Thrones", rating: "5.0", source: "Free Learning", readUrl: "http://www.googleguide.com/print/adv_op_ref.pdf" },
  { id: "e3", img: "/img/cart/best_book3.jpg", title: "Game Of Thrones", rating: "5.0", source: "Free Learning", readUrl: "http://www.googleguide.com/print/adv_op_ref.pdf" },
];

export function EbookLibrary() {
  return (
    <div className="dashboard-card">
      <div className="dashboard-card__header">
        <h3 className="dashboard-card__title">My eBook Library</h3>
        <p className="dashboard-card__subtitle">Access your purchased eBooks anytime</p>
      </div>

      <div className="dashboard-card__body">
        <div className="orders-toolbar">
          <div className="orders-toolbar__search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search for books..." className="orders-toolbar__input" />
          </div>
          <div className="orders-toolbar__filter">
            <select name="orderby" className="orders-toolbar__select" defaultValue="menu_order">
              <option value="menu_order">Default sorting</option>
              <option value="popularity">Sort by popularity</option>
              <option value="rating">Sort by rating</option>
              <option value="date">Sort by latest</option>
            </select>
          </div>
        </div>

        <div className="ebook-list">
          {EBOOKS.map((ebook) => (
            <div className="ebook-card" key={ebook.id}>
              <div className="ebook-card__cover">
                <img src={ebook.img} alt={ebook.title} />
                <div className="ebook-card__overlay">
                  <a href={ebook.readUrl} className="ebook-card__read gallerypdf">
                    <i className="fa-solid fa-book-open-reader"></i>
                  </a>
                </div>
              </div>
              <div className="ebook-card__content">
                <a href="/product-single" className="ebook-card__title">
                  {ebook.title}
                </a>
                <div className="ebook-card__rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <span>{ebook.rating}</span>
                </div>
                <span className="ebook-card__source">{ebook.source}</span>
              </div>
              <div className="ebook-card__actions">
                <div className="ebook-card__downloads">
                  <a href={ebook.readUrl} download className="ebook-card__download" title="Download Code">
                    <i className="fa-solid fa-code"></i>
                  </a>
                  <a href={ebook.readUrl} download className="ebook-card__download" title="Download PDF">
                    <i className="fa-solid fa-file-pdf"></i>
                  </a>
                  <a href={ebook.readUrl} download className="ebook-card__download" title="Download EPUB">
                    <i className="fa-solid fa-book"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
