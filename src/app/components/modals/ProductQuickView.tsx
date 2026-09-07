import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../scss/modal.scss";
import { formatGenre, serverApi } from "../../../lib/config";
import { useGlobals } from "../../hooks/useGlobals";

const FALLBACK_IMG = "/img/book-single1.jpg";

export function ProductQuickView() {
  const { quickViewBook: book, basket } = useGlobals();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);

  const imagePath = book?.bookImages[0] ? `${serverApi}/${book.bookImages[0]}` : FALLBACK_IMG;

  return (
    <div className="modal fade product-quickview-modal" id="productQuickView" tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <button type="button" className="close-btn" data-bs-dismiss="modal" aria-label="Close">
            <i className="icon_close"></i>
          </button>
          {book && (
          <div className="bj_book_single">
            <div className="bj_book_img">
              <img className="img-fluid" src={imagePath} alt={book.bookName} />
            </div>
            <div className="bj_book_details">
              <h2>{book.bookName}</h2>
              <ul className="list-unstyled book_meta">
                <li>Category: {formatGenre(book.bookGenre)}</li>
                <li>Format: {book.bookFormat}</li>
              </ul>
              <div className="price">${book.bookPrice}</div>
              {book.bookDesc && <p>{book.bookDesc}</p>}
              <div className="product_sidbar">
                <div className="product-qty">
                  Qty:
                  <div className="cart_quantity">
                    <button className="quantity_btn minus" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                      <i className="icon_minus-06"></i>
                    </button>
                    <input
                      type="number"
                      min={1}
                      max={book.bookLeftCount || 99}
                      step={1}
                      value={qty}
                      onChange={(e) => setQty(Number(e.target.value) || 1)}
                    />
                    <button
                      className="quantity_btn plus"
                      onClick={() => setQty((q) => Math.min(book.bookLeftCount || 99, q + 1))}
                    >
                      <i className="icon_plus"></i>
                    </button>
                  </div>
                </div>

                <div className="d-flex flex-column gap-2">
                  <button
                    type="button"
                    className="bj_theme_btn"
                    data-bs-dismiss="modal"
                    onClick={() => {
                      basket.onAdd({ _id: book._id, quantity: qty, title: book.bookName, price: book.bookPrice, image: imagePath });
                      navigate("/checkout");
                    }}
                  >
                    Buy Now
                  </button>
                  <button
                    className="bj_theme_btn"
                    type="button"
                    onClick={() =>
                      basket.onAdd({ _id: book._id, quantity: qty, title: book.bookName, price: book.bookPrice, image: imagePath })
                    }
                  >
                    <i className="icon_cart_alt"></i>Add to cart
                  </button>
                  <a
                    href={`/book/${book._id}`}
                    className="bj_theme_btn strock_btn text-center"
                    data-bs-dismiss="modal"
                  >
                    View Full Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
