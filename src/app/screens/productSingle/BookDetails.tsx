import { useState } from "react";

type Variation = "hardcover" | "ebook" | "print";
type Tab = "description" | "author" | "review";

const VARIATIONS: { id: Variation; icon: string; label: string; price: string }[] = [
  { id: "hardcover", icon: "fa-solid fa-book", label: "Hardcover", price: "$10" },
  { id: "ebook", icon: "fa-solid fa-tablet-screen-button", label: "eBook", price: "$20" },
  { id: "print", icon: "fa-solid fa-print", label: "Print", price: "$30" },
];

export function BookDetails() {
  const [flipped, setFlipped] = useState(false);
  const [variation, setVariation] = useState<Variation>("hardcover");
  const [activeTab, setActiveTab] = useState<Tab>("description");

  return (
    <>
      <div className="bj_book_single me-xl-3">
        <div className={`bj_book_img${flipped ? " flip" : ""}`}>
          <div className="front">
            <img className="img-fluid" src="/img/book-single1.jpg" alt="A Storytelling Workbook" />
          </div>
          <div className="back">
            <img className="img-fluid" src="/img/book-single.jpg" alt="A Storytelling Workbook - back cover" />
          </div>
          <div className="pr_ribbon">
            <span className="product-badge">New</span>
          </div>
        </div>
        <div className="bj_book_details_premium">
          <h2>A Storytelling Workbook</h2>
          <ul className="list-unstyled book_meta">
            <li>
              By:<a href="/author-single">Phillip Siphron</a>
            </li>
            <li>
              Category:<a href="/shop-sidebar">Drama</a>
            </li>
            <li>
              Tag:<a href="/shop-sidebar">Best Sellers</a>
            </li>
          </ul>
          <div className="ratting review">
            <div className="star-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-stroke"></i>
              <span>4.5</span>
            </div>
            <a href="#product_review" className="woocommerce-review-link">
              <span className="count">50</span> Reviews
            </a>
          </div>
          <div className="price-wrapper">
            <span className="current-price">$10</span>
          </div>
          <p className="description">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit aut fugit, sed quia consequuntur.
          </p>

          <div className="product_meta_grid">
            <div className="meta-item">
              <span className="meta-label">Publisher</span>
              <span className="meta-value">Avery</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Publication Date</span>
              <span className="meta-value">July 20, 2024</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Print Length</span>
              <span className="meta-value">320 pages</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">ISBN</span>
              <span className="meta-value">3288365629</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Language</span>
              <span className="meta-value">English</span>
            </div>
          </div>

          <div className="action-buttons">
            <button type="button" className="bj_theme_btn flip_btn" onClick={() => setFlipped((v) => !v)}>
              Flip to Back
            </button>
            <a href="/img/book-single1.jpg" className="bj_theme_btn gallerypdf">
              <i className="fa-regular fa-eye"></i> Look inside
            </a>
          </div>

          <div className="single_product_price_variation">
            {VARIATIONS.map((v) => (
              <label className="variation_single" key={v.id}>
                <input
                  className="variation_single_input"
                  name="variation_single"
                  type="radio"
                  checked={variation === v.id}
                  onChange={() => setVariation(v.id)}
                />
                <span className="price-details">
                  <span className="price-type">
                    <i className={v.icon}></i> {v.label}
                  </span>
                  <span className="price-cost">{v.price}</span>
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="bj_book_single_tab_area me-xl-3">
        <ul className="nav nav-tabs bj_book_single_tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link${activeTab === "description" ? " active" : ""}`}
              type="button"
              onClick={() => setActiveTab("description")}
            >
              Product Details
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link${activeTab === "author" ? " active" : ""}`}
              type="button"
              onClick={() => setActiveTab("author")}
            >
              About Author
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link${activeTab === "review" ? " active" : ""}`}
              type="button"
              onClick={() => setActiveTab("review")}
            >
              Review
            </button>
          </li>
        </ul>
        <div className="tab-content bj_book_single_tab_content mt-4">
          {activeTab === "description" && (
            <div className="tab-pane fade show active">
              <div className="product_book_content_details">
                <div>
                  <h5 className="content_header mb-2">Key benefits</h5>
                  <ul className="content_text mb-2">
                    <li>Third edition of the bestselling, widely acclaimed Python machine learning book</li>
                    <li>Clear and intuitive explanations take you deep into the theory and practice of Python machine learning</li>
                    <li>Fully updated and expanded to cover TensorFlow 2, Generative Adversarial Network models, reinforcement learning, and best practices</li>
                  </ul>
                </div>
                <div>
                  <h5 className="content_header mb-2">Description</h5>
                  <p className="content_text mb-2">
                    Python Machine Learning, Third Edition is a comprehensive guide to machine learning and deep learning with
                    Python. It acts as both a step-by-step tutorial, and a reference you'll keep coming back to as you build
                    your machine learning systems. Packed with clear explanations, visualizations, and working examples, the
                    book covers all the essential machine learning techniques in depth. While some books teach you only to
                    follow instructions, with this machine learning book, Raschka and Mirjalili teach the principles behind
                    machine learning, allowing you to build models and applications for yourself. Updated for TensorFlow 2.0,
                    this new third edition introduces readers to its new Keras API features, as well as the latest additions
                    to scikit-learn. It's also expanded to cover cutting-edge reinforcement learning techniques based on deep
                    learning, as well as an introduction to GANs. Finally, this book also explores a subfield of natural
                    language processing (NLP) called sentiment analysis, helping you learn how to use machine learning
                    algorithms to classify documents. This book is your companion to machine learning with Python, whether
                    you're a Python developer new to machine learning or want to deepen your knowledge of the latest
                    developments.
                  </p>
                </div>
                <div>
                  <h5 className="content_header mb-2">What you will learn</h5>
                  <ul className="content_text mb-2">
                    <li>Master the frameworks, models, and techniques that enable machines to learn from data</li>
                    <li>Use scikit-learn for machine learning and TensorFlow for deep learning</li>
                    <li>Apply machine learning to image classification, sentiment analysis, intelligent web applications, and more</li>
                    <li>Build and train neural networks, GANs, and other models</li>
                    <li>Discover best practices for evaluating and tuning models</li>
                    <li>Predict continuous target outcomes using regression analysis</li>
                    <li>Dig deeper into textual and social media data using sentiment analysis</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "author" && (
            <div className="tab-pane fade show active">
              <div className="tab_slider_content">
                <div className="bj_author_single d-flex align-items-center">
                  <img src="/img/home/author.jpg" alt="Phillip Siphron" />
                  <div className="bj_author_single_content">
                    <h2>Phillip Siphron</h2>
                    <p>
                      Diam, urna, ornare leo facilisis suspendisse eu rutrum id augue cursus tincidunt nisl eget ornare
                      pharetra ac pharetra, pulvinar ipsum.
                    </p>
                    <ul className="book_info">
                      <li>
                        <span>Position:</span> Book Writer
                      </li>
                      <li>
                        <span>Book Count:</span>23
                      </li>
                      <li>
                        <span>Born:</span>1973
                      </li>
                      <li>
                        <span>Category:</span>
                        <a href="#">Biography,</a>
                        <a href="#">Fantasy,</a>
                        <a href="#">Sci-Fi</a>
                      </li>
                      <li>
                        <span>Language:</span>
                        <a href="#">English,</a>
                        <a href="#">German</a>
                      </li>
                    </ul>
                    <ul className="list-unstyled f_social_round">
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-reddit"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-quora"></i>
                        </a>
                      </li>
                    </ul>
                    <a href="/author-single" className="bj_theme_btn text_btn">
                      More Details<i className="arrow_right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "review" && <ReviewTab />}
        </div>
      </div>
    </>
  );
}

function ReviewTab() {
  return (
    <div className="tab-pane fade show active" id="product_review">
      <div className="reviews-item">
        <div className="d-flex flex-wrap justify-content-between mb-40 gap-3">
          <h4 className="review-title d-flex flex-wrap">
            50 Reviews{" "}
            <span>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i> 4.9
            </span>
          </h4>
          <div>
            <button type="button" className="modal-btn" data-bs-toggle="modal" data-bs-target="#writeReviewModal">
              <i className="fas fa-edit"></i>Write a Review
            </button>
            <WriteReviewModal />
          </div>
        </div>
        <div className="row gy-lg-0 gy-3">
          <div className="col-lg-5">
            <div className="your-rating-review">
              <h5>Your rating & review</h5>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="review">Good book, I understood many important theories from the book.</p>
              <button
                type="button"
                className="bj_theme_btn strock_btn btn_small_two"
                data-bs-toggle="modal"
                data-bs-target="#editReviewModal"
              >
                Update Your Review
              </button>
              <EditReviewModal />
            </div>
          </div>
          <div className="col-lg-7">
            <ul className="reviews-box list-unstyled">
              <li className="d-flex">
                5 Stars{" "}
                <span>
                  <span></span>
                </span>{" "}
                (35)
              </li>
              <li>
                4 Stars{" "}
                <span>
                  <span></span>
                </span>{" "}
                (10)
              </li>
              <li>
                3 Stars{" "}
                <span>
                  <span></span>
                </span>{" "}
                (3)
              </li>
              <li>
                2 Stars{" "}
                <span>
                  <span></span>
                </span>{" "}
                (2)
              </li>
              <li>
                1 Stars{" "}
                <span>
                  <span></span>
                </span>{" "}
                (0)
              </li>
            </ul>
          </div>
        </div>
        <div className="review-content">
          <div className="d-flex flex-sm-row flex-column justify-content-between gap-3 mb-40">
            <h4>Reviews</h4>
            <div className="review-right">
              <div className="sorting-select review-sort selectpickers">
                <select>
                  <option>Relevent</option>
                  <option>Newest</option>
                  <option>Oldest</option>
                </select>
              </div>
            </div>
          </div>
          <div className="d-md-flex">
            <div>
              <img className="admin-img" src="/img/profile-img.png" alt="Muaz Bin" />
            </div>
            <div className="review-text">
              <p className="r-title sub-regular-2">Muaz Bin</p>
              <div className="r-icon">
                <div>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i> 5
                </div>
                <span>⋅ Nov 5, 2021</span>
              </div>
              <p className="small-2">
                A Storytelling Workbook is a gem for anyone looking to enhance their narrative skills! The exercises are
                engaging and practical, making it easy to dive into storytelling with confidence. A must-have for aspiring
                writers!
              </p>
            </div>
          </div>
        </div>
        <div className="d-md-flex">
          <div>
            <img className="admin-img" src="/img/profile-img.png" alt="Ryan Aminoff" />
          </div>
          <div className="review-text">
            <p className="r-title sub-regular-2">Ryan Aminoff</p>
            <div className="r-icon">
              <div>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i> 5
              </div>
              <span>⋅ Nov 5, 2021</span>
            </div>
            <p className="small-2 mb-30">
              A Storytelling Workbook is a fantastic resource for honing storytelling skills! It's packed with creative
              exercises that spark inspiration and help build strong narrative techniques. Highly recommended for writers at
              any level!
            </p>
            <div className="d-flex flex-wrap review-img">
              <a href="/img/shop/best_book1.jpg">
                <img src="/img/shop/best_book1.jpg" alt="Review" />
              </a>
              <a href="/img/shop/best_book2.jpg">
                <img src="/img/shop/best_book2.jpg" alt="Review" />
              </a>
              <a href="/img/shop/best_book3.jpg">
                <img src="/img/shop/best_book3.jpg" alt="Review" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WriteReviewModal() {
  return (
    <div className="modal fade" id="writeReviewModal" tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content modal-item">
          <div className="modal-header border-0 p-0">
            <h4 className="modal-title mb-50">Hello Jason</h4>
            <button type="button" className="close-btn" data-bs-dismiss="modal" aria-label="Close">
              <i className="icon_close"></i>
            </button>
          </div>
          <div className="d-flex admin-content">
            <div className="user-img">
              <img src="/img/profile-img.png" alt="Admin" />
            </div>
            <div>
              <p className="admin-title">Corey Baptista</p>
              <p className="admin-sub-title">Posting publicly</p>
            </div>
          </div>
          <div className="star-icon">
            <div className="dynamic-star-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <textarea className="admin-text form-control" placeholder="Share details of your own experience at this place" rows={5}></textarea>
          </div>
          <div className="admin-galley">
            <label htmlFor="formAdminImgFile">
              <i className="fas fa-image"></i>
            </label>
            <input className="d-none" id="formAdminImgFile" type="file" />
          </div>
          <div className="modal-footer border-0">
            <button type="button" className="cancel-btn" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="button" className="post-btn">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function EditReviewModal() {
  return (
    <div className="modal fade" id="editReviewModal" tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content modal-item">
          <div className="modal-header border-0 p-0">
            <h4 className="modal-title mb-50">Hello Jason</h4>
            <button type="button" className="close-btn" data-bs-dismiss="modal" aria-label="Close">
              <i className="icon_close"></i>
            </button>
          </div>
          <div className="d-flex admin-content">
            <div className="user-img">
              <img src="/img/profile-img.png" alt="Admin" />
            </div>
            <div>
              <p className="admin-title">Corey Baptista</p>
              <p className="admin-sub-title">Posting publicly</p>
            </div>
          </div>
          <div className="star-icon">
            <div className="dynamic-star-rating">
              <i className="fas fa-star active"></i>
              <i className="fas fa-star active"></i>
              <i className="fas fa-star active"></i>
              <i className="fas fa-star active"></i>
              <i className="fas fa-star active"></i>
            </div>
            <textarea className="admin-text form-control" rows={5} defaultValue="Good book, I understood many important theories from the book."></textarea>
          </div>
          <div className="admin-galley">
            <div className="gallery-item">
              <button className="delete-btn">
                <i className="fa-regular fa-trash-can"></i>
              </button>
              <img src="/img/shop/best_book1.jpg" alt="" />
            </div>
            <label htmlFor="formAdminImgFile2">
              <i className="fas fa-image"></i>
            </label>
            <input className="d-none" id="formAdminImgFile2" type="file" />
          </div>
          <div className="modal-footer border-0">
            <button type="button" className="cancel-btn" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="button" className="post-btn">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
