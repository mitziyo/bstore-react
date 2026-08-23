interface Author {
  id: string;
  image: string;
  name: string;
  genre: string;
  bio: string;
  books: string;
  followers: string;
  since: string;
}

const AUTHORS: Author[] = [
  {
    id: "a1",
    image: "/img/team-img1.jpg",
    name: "Rabindranath Tagore",
    genre: "Fiction & Poetry",
    bio: "Nobel laureate known for his poetry, short stories, and novels that beautifully explore human emotions.",
    books: "42 Books",
    followers: "12.5K Followers",
    since: "Following since Oct 11, 2024",
  },
  {
    id: "a2",
    image: "/img/team-img2.jpg",
    name: "Jane Austen",
    genre: "Romance & Classic",
    bio: "Renowned for her witty social commentary and romantic fiction set in Georgian-Regency England.",
    books: "8 Books",
    followers: "28.3K Followers",
    since: "Following since Sep 5, 2024",
  },
  {
    id: "a3",
    image: "/img/team-img3.jpg",
    name: "Stephen King",
    genre: "Horror & Thriller",
    bio: "Master of horror and suspense, creating unforgettable stories that have captivated readers worldwide.",
    books: "64 Books",
    followers: "45.8K Followers",
    since: "Following since Aug 20, 2024",
  },
  {
    id: "a4",
    image: "/img/team-img4.jpg",
    name: "Agatha Christie",
    genre: "Mystery & Detective",
    bio: "The Queen of Mystery, best known for her detective novels featuring Hercule Poirot and Miss Marple.",
    books: "85 Books",
    followers: "52.1K Followers",
    since: "Following since Jul 15, 2024",
  },
  {
    id: "a5",
    image: "/img/team-img5.jpg",
    name: "J.K. Rowling",
    genre: "Fantasy & Adventure",
    bio: "Creator of the magical world of Harry Potter, inspiring millions of readers of all ages.",
    books: "14 Books",
    followers: "98.7K Followers",
    since: "Following since Jun 1, 2024",
  },
];

export function MyFollowingAuthors() {
  return (
    <div className="dashboard-card">
      <div className="dashboard-card__header">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
          <div>
            <h3 className="dashboard-card__title">Following Authors</h3>
            <p className="dashboard-card__subtitle">Authors you're following for updates</p>
          </div>
          <span className="dashboard-card__count">
            <i className="fa-solid fa-users"></i>
            {AUTHORS.length} Authors
          </span>
        </div>
      </div>

      <div className="dashboard-card__body">
        <div className="author-grid">
          {AUTHORS.map((author) => (
            <div className="author-card" key={author.id}>
              <div className="author-card__header">
                <div className="author-card__avatar">
                  <img src={author.image} alt={author.name} />
                </div>
                <div className="author-card__info">
                  <h5 className="author-card__name">
                    <a href="/author-single">{author.name}</a>
                  </h5>
                  <p className="author-card__genre">{author.genre}</p>
                </div>
              </div>
              <p className="author-card__bio">{author.bio}</p>
              <div className="author-card__stats">
                <div className="author-card__stat">
                  <i className="fa-solid fa-book"></i>
                  <span>{author.books}</span>
                </div>
                <div className="author-card__stat">
                  <i className="fa-solid fa-users"></i>
                  <span>{author.followers}</span>
                </div>
              </div>
              <div className="author-card__footer">
                <span className="author-card__date">
                  <i className="fa-regular fa-calendar"></i>
                  {author.since}
                </span>
                <button className="author-card__btn author-card__btn--unfollow">
                  <i className="fa-solid fa-user-minus"></i>
                  Unfollow
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
