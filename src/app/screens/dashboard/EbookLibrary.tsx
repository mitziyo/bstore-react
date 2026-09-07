import { useEffect, useState } from "react";
import { serverApi } from "../../../lib/config";
import { BookFormat } from "../../../lib/enums/product.enum";
import OrderService from "../../services/OrderService";
import type { Product } from "../../../lib/types/product";

export function EbookLibrary() {
  const [ebooks, setEbooks] = useState<Product[]>([]);

  useEffect(() => {
    new OrderService()
      .getMyOrders({ page: 1, limit: 50 })
      .then((orders) => {
        const seen = new Map<string, Product>();
        orders.forEach((order) =>
          order.bookData
            .filter((book) => book.bookFormat === BookFormat.EBOOK)
            .forEach((book) => seen.set(book._id, book)),
        );
        setEbooks(Array.from(seen.values()));
      })
      .catch((err) => console.log(err));
  }, []);

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

        {ebooks.length === 0 ? (
          <p className="text-center">No eBooks purchased yet.</p>
        ) : (
          <div className="ebook-list">
            {ebooks.map((book) => {
              const imagePath = book.bookImages[0] ? `${serverApi}/${book.bookImages[0]}` : "/img/cart/best_book1.jpg";
              return (
                <div className="ebook-card" key={book._id}>
                  <div className="ebook-card__cover">
                    <img src={imagePath} alt={book.bookName} />
                    <div className="ebook-card__overlay">
                      <a href="#" onClick={(e) => e.preventDefault()} className="ebook-card__read" title="Coming soon">
                        <i className="fa-solid fa-book-open-reader"></i>
                      </a>
                    </div>
                  </div>
                  <div className="ebook-card__content">
                    <a href={`/book/${book._id}`} className="ebook-card__title">
                      {book.bookName}
                    </a>
                  </div>
                  <div className="ebook-card__actions">
                    <div className="ebook-card__downloads">
                      <a href="#" onClick={(e) => e.preventDefault()} className="ebook-card__download" title="Coming soon">
                        <i className="fa-solid fa-file-pdf"></i>
                      </a>
                      <a href="#" onClick={(e) => e.preventDefault()} className="ebook-card__download" title="Coming soon">
                        <i className="fa-solid fa-book"></i>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
