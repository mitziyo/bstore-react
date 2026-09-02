import { useState } from "react";
import { Link } from "react-router-dom";
import { serverApi } from "../../../lib/config";
import type { Product } from "../../../lib/types/product";

const FALLBACK_IMG = "/img/book-single1.jpg";

export function BookDetails({ book }: { book: Product }) {
  const [flipped, setFlipped] = useState(false);

  const front = book.bookImages[0] ? `${serverApi}/${book.bookImages[0]}` : FALLBACK_IMG;
  const back = book.bookImages[1] ? `${serverApi}/${book.bookImages[1]}` : front;

  return (
    <div className="bj_book_single me-xl-3">
      <div className={`bj_book_img${flipped ? " flip" : ""}`}>
        <div className="front">
          <img className="img-fluid" src={front} alt={book.bookName} />
        </div>
        <div className="back">
          <img className="img-fluid" src={back} alt={`${book.bookName} - back cover`} />
        </div>
      </div>
      <div className="bj_book_details_premium">
        <h2>{book.bookName}</h2>
        <ul className="list-unstyled book_meta">
          <li>
            Category:<Link to={`/shop?genre=${book.bookGenre}`}>{book.bookGenre}</Link>
          </li>
          <li>
            Format:<span>{book.bookFormat}</span>
          </li>
        </ul>
        <div className="price-wrapper">
          <span className="current-price">${book.bookPrice}</span>
        </div>
        {book.bookDesc && <p className="description">{book.bookDesc}</p>}

        <div className="action-buttons">
          {book.bookImages.length > 1 && (
            <button type="button" className="bj_theme_btn flip_btn" onClick={() => setFlipped((v) => !v)}>
              Flip to Back
            </button>
          )}
          <a href={front} className="bj_theme_btn gallerypdf">
            <i className="fa-regular fa-eye"></i> Look inside
          </a>
        </div>
      </div>
    </div>
  );
}
