import { useState } from "react";
import { serverApi } from "../../../lib/config";
import { useGlobals } from "../../hooks/useGlobals";
import type { Product } from "../../../lib/types/product";

const FALLBACK_IMG = "/img/book-single1.jpg";

export function ProductSidebar({ book }: { book: Product }) {
  const { basket } = useGlobals();
  const [qty, setQty] = useState(1);
  const imagePath = book.bookImages[0] ? `${serverApi}/${book.bookImages[0]}` : FALLBACK_IMG;
  const inStock = book.bookLeftCount > 0;

  return (
    <div className="product_sidbar">
      <div className="price_head">
        Buy new: <span className="price">${book.bookPrice}</span>
      </div>
      <ul className="list-unstyled">
        <li>
          <div className="icon">
            <img src="/img/arrow.png" alt="" />
          </div>
          Get Fast, Free Shipping with <span className="blue_text">FREE Returns</span>
        </li>
        <li>
          <div className="icon">
            <img src="/img/arrow.png" alt="" />
          </div>
          <span className="blue_text">FREE delivery</span>if you spend $25 on items shipped by LightBooks
        </li>
      </ul>
      <h3>{inStock ? `In Stock (${book.bookLeftCount} left)` : "Out of Stock"}</h3>
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
          <button className="quantity_btn plus" onClick={() => setQty((q) => Math.min(book.bookLeftCount || 99, q + 1))}>
            <i className="icon_plus"></i>
          </button>
        </div>
      </div>

      <div className="d-flex flex-column gap-3">
        <a href="/checkout" className="bj_theme_btn">
          Buy Now
        </a>
        <button
          className="bj_theme_btn"
          type="button"
          onClick={() =>
            basket.onAdd({ _id: book._id, quantity: qty, title: book.bookName, price: book.bookPrice, image: imagePath })
          }
        >
          <i className="icon_cart_alt"></i>Add to cart
        </button>
      </div>
    </div>
  );
}
