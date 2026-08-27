const DEALS = [
  { title: "The Midnight Library", author: "Matt Haig", price: 12.99, oldPrice: 25.99, discount: "-50%", img: "/img/home/tab_book1.png" },
  { title: "Atomic Habits", author: "James Clear", price: 14.99, oldPrice: 24.99, discount: "-40%", img: "/img/home/tab_book2.png" },
  { title: "The Alchemist", author: "Paulo Coelho", price: 7.99, oldPrice: 19.99, discount: "-60%", img: "/img/home/tab_book3.png" },
  { title: "Think & Grow Rich", author: "Napoleon Hill", price: 9.99, oldPrice: 15.99, discount: "-35%", img: "/img/home/tab_book1.png" },
];

export function DealsGrid() {
  return (
    <>
      <div className="section_title text-center mb-5">
        <h2 className="title">Today&rsquo;s Best Deals</h2>
        <p>Limited time offers on bestselling books</p>
      </div>
      <div className="row">
        {DEALS.map((deal) => (
          <div className="col-lg-3 col-md-6" key={deal.title}>
            <div className="deal-card wow fadeInUp">
              <span className="deal-badge">{deal.discount}</span>
              <div className="img">
                <img src={deal.img} alt="Book" />
              </div>
              <div className="content">
                <h5 className="title">{deal.title}</h5>
                <p className="author">By {deal.author}</p>
                <div className="price-row">
                  <span className="price">${deal.price}</span>
                  <span className="old-price">${deal.oldPrice}</span>
                </div>
                <a href="/checkout" className="bj_theme_btn w-100">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <a href="/shop" className="bj_theme_btn strock_btn">
          View All Deals
        </a>
      </div>
    </>
  );
}
