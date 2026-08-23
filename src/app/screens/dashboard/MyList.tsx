interface Collection {
  id: string;
  title: string;
  desc: string;
  date: string;
  books: [string, string, string];
}

const COLLECTIONS: Collection[] = [
  {
    id: "fiction",
    title: "Fiction Book List",
    desc: "Classic fiction novels and stories",
    date: "Updated Oct 9, 2024",
    books: ["/img/cart/best_book3.jpg", "/img/home-two/choice3.jpg", "/img/home-two/choice2.png"],
  },
  {
    id: "comic",
    title: "Comic Book List",
    desc: "Graphic novels and comic series",
    date: "Updated Oct 9, 2024",
    books: ["/img/cart/best_book3.jpg", "/img/cart/best_book2.jpg", "/img/cart/best_book1.jpg"],
  },
];

export function MyList() {
  return (
    <div className="dashboard-card">
      <div className="dashboard-card__header">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
          <div>
            <h3 className="dashboard-card__title">My Reading Lists</h3>
            <p className="dashboard-card__subtitle">Organize your favorite books into custom collections</p>
          </div>
          <a href="/my-list-create" className="bj_theme_btn">
            <i className="fa-solid fa-plus"></i>
            Create New List
          </a>
        </div>
      </div>

      <div className="dashboard-card__body">
        <div className="collection-grid">
          {COLLECTIONS.map((collection) => (
            <a href="/my-list-details" className="collection-card" key={collection.id}>
              <div className="collection-card__visual">
                <div className="collection-card__stack">
                  <div className="collection-card__book collection-card__book--back">
                    <img src={collection.books[0]} alt="Book" />
                  </div>
                  <div className="collection-card__book collection-card__book--middle">
                    <img src={collection.books[1]} alt="Book" />
                  </div>
                  <div className="collection-card__book collection-card__book--front">
                    <img src={collection.books[2]} alt="Book" />
                  </div>
                </div>
                <span className="collection-card__badge">3 Books</span>
              </div>
              <div className="collection-card__info">
                <h5 className="collection-card__title">{collection.title}</h5>
                <p className="collection-card__desc">{collection.desc}</p>
                <div className="collection-card__footer">
                  <span className="collection-card__date">
                    <i className="fa-regular fa-clock"></i>
                    {collection.date}
                  </span>
                  <span className="collection-card__arrow">
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            </a>
          ))}

          <a href="/my-list-create" className="collection-card collection-card--create">
            <div className="collection-card__create-icon">
              <i className="fa-solid fa-plus"></i>
            </div>
            <div className="collection-card__info">
              <h5 className="collection-card__title">Create New List</h5>
              <p className="collection-card__desc">Start a new book collection</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
