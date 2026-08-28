import { useState } from "react";

const DETAILS = [
  { key: "Publication date :", value: "Dec 12, 2019" },
  { key: "Length", value: "772 pages" },
  { key: "Edition :", value: "3rd Edition" },
  { key: "Language :", value: "English" },
  { key: "ISBN-13 :", value: "9781789955750" },
];

export function ProductSidebar() {
  const [qty, setQty] = useState(1);
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      <div className="product_sidbar">
        <div className="price_head">
          Buy new: <span className="price">$10</span>
        </div>
        <div className="discount_price">
          List Price: <del>$15.00</del>
        </div>
        <span className="save">(You Save $4.5 (30%))</span>
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
          <li>
            <div className="icon">
              <img src="/img/arrow.png" alt="" />
            </div>
            Fastest delivery Tuesday, January 18. Order within <span className="blue_text">19 hrs 43 mins</span>
          </li>
          <li>
            <div className="icon">
              <img src="/img/pin.png" alt="" />
            </div>
            Select delivery location
          </li>
        </ul>
        <h3>In Stock.</h3>
        <div className="product-qty">
          Qty:
          <div className="cart_quantity">
            <button className="quantity_btn minus" onClick={() => setQty((q) => Math.max(1, q - 1))}>
              <i className="icon_minus-06"></i>
            </button>
            <input type="number" min={1} max={99} step={1} value={qty} onChange={(e) => setQty(Number(e.target.value) || 1)} />
            <button className="quantity_btn plus" onClick={() => setQty((q) => Math.min(99, q + 1))}>
              <i className="icon_plus"></i>
            </button>
          </div>
        </div>

        <div className="d-flex flex-column gap-3">
          <a href="/checkout" className="bj_theme_btn">
            Buy Now
          </a>
          <button
            className="bj_theme_btn add-to-cart-automated"
            type="button"
            data-name="A Storytelling Workbook"
            data-price="10"
            data-img="/img/book-single1.jpg"
            data-mrp="15"
          >
            <i className="icon_cart_alt"></i>Add to cart
          </button>
        </div>
      </div>

      <div className="product_details_sidebar">
        <a
          className={`details_header${expanded ? "" : " collapsed"}`}
          role="button"
          onClick={(e) => {
            e.preventDefault();
            setExpanded((v) => !v);
          }}
        >
          <h6 className="mb-0">Product Details</h6>
          <i className="fa-solid fa-chevron-up"></i>
        </a>
        {expanded && (
          <div className="collapse show">
            <div className="product_details_section_wrap">
              {DETAILS.map((d) => (
                <div className="product_details_section_content mb-3" key={d.key}>
                  <span className="product_details_section_key">{d.key}</span>
                  <span className="product_details_section_value">{d.value}</span>
                </div>
              ))}
              <div className="product_details_section_content mb-3">
                <span className="product_details_section_key">Vendor :</span>
                <div className="product_details_section_value">
                  <span>Google</span>
                </div>
              </div>
              <div className="product_details_section_content mb-3">
                <span className="product_details_section_key">Category :</span>
                <div className="product_details_section_value">
                  <a href="#" className="fw-600">
                    Data
                  </a>
                </div>
              </div>
              <div className="product_details_section_content mb-3">
                <span className="product_details_section_key">Languages :</span>
                <div className="product_details_section_value">
                  <a href="#" className="fw-600">
                    Python (Expert)
                  </a>
                </div>
              </div>
              <div className="product_details_section_content mb-3">
                <span className="product_details_section_key">Concepts :</span>
                <div className="product_details_section_value">
                  <a href="#" className="fw-600">
                    Machine Learning
                  </a>
                </div>
              </div>
              <div className="product_details_section_content mb-3">
                <span className="product_details_section_key">Tools :</span>
                <div className="product_details_section_value">
                  <a href="#" className="fw-600">
                    TensorFlow (Intermediate),
                  </a>
                  <a href="#" className="fw-600">
                    Keras (Intermediate)
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
