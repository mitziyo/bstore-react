import { useState } from "react";
import "../../../scss/dashboard/dashboard.scss";
import "../../../scss/myListCreate/myListCreate.scss";
import { DashboardSidebar } from "./DashboardSidebar";

interface BookRow {
  id: string;
  image: string;
  title: string;
  author: string;
  rating: number;
  price: string;
  category: string;
}

const BOOK_ROWS: BookRow[] = [
  { id: "b1", image: "/img/home/best_book1.jpg", title: "Mindset: The New Psychology of Success", author: "Carol S. Dweck", rating: 4.5, price: "$24.99", category: "Self-Development" },
  { id: "b2", image: "/img/home/best_book2.jpg", title: "Atomic Habits: Build Good Habits", author: "James Clear", rating: 4.8, price: "$19.99", category: "Productivity" },
];

export function MyListCreate() {
  const [visibility, setVisibility] = useState<"public" | "private">("public");

  return (
    <section className="bj_account_dashboard" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <DashboardSidebar />
          </div>

          <div className="col-lg-9">
            <div className="account_dashboard_body">
              <div className="create_list_header">
                <div className="header_content">
                  <div className="header_icon">
                    <i className="ti-write"></i>
                  </div>
                  <div className="header_text">
                    <h2>Create A New List</h2>
                    <p>Organize your favorite books into custom collections</p>
                  </div>
                </div>
                <a href="/my-list" className="back_link">
                  <i className="ti-arrow-left"></i> Back to Lists
                </a>
              </div>

              <div className="create_list_steps">
                <div className="step active">
                  <div className="step_number">1</div>
                  <span>List Info</span>
                </div>
                <div className="step_connector active"></div>
                <div className="step">
                  <div className="step_number">2</div>
                  <span>Add Books</span>
                </div>
                <div className="step_connector"></div>
                <div className="step">
                  <div className="step_number">3</div>
                  <span>Save</span>
                </div>
              </div>

              <div className="account_dashboard_content create_list_form">
                <div className="content_body">
                  <form>
                    <div className="form_section">
                      <div className="section_header">
                        <i className="ti-info-alt"></i>
                        <h4>List Details</h4>
                      </div>
                      <div className="row gy-4">
                        <div className="col-lg-12">
                          <div className="form-group enhanced_input">
                            <label className="form-label" htmlFor="list_title">
                              <i className="ti-text"></i> List Title <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="list_title"
                              name="list_title"
                              placeholder="e.g., My Favorite Sci-Fi Books"
                            />
                            <span className="input_hint">Give your list a memorable name</span>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label className="form-label">
                              <i className="ti-eye"></i> Visibility <span className="required">*</span>
                            </label>
                            <div className="visibility_options">
                              <label className="visibility_card" htmlFor="list_public">
                                <input
                                  type="radio"
                                  id="list_public"
                                  name="list_type"
                                  value="public"
                                  checked={visibility === "public"}
                                  onChange={() => setVisibility("public")}
                                />
                                <div className="card_content">
                                  <div className="card_icon">
                                    <i className="ti-world"></i>
                                  </div>
                                  <div className="card_text">
                                    <strong>Public</strong>
                                    <span>Anyone can discover and view this list</span>
                                  </div>
                                  <div className="check_indicator">
                                    <i className="ti-check"></i>
                                  </div>
                                </div>
                              </label>
                              <label className="visibility_card" htmlFor="list_private">
                                <input
                                  type="radio"
                                  id="list_private"
                                  name="list_type"
                                  value="private"
                                  checked={visibility === "private"}
                                  onChange={() => setVisibility("private")}
                                />
                                <div className="card_content">
                                  <div className="card_icon">
                                    <i className="ti-lock"></i>
                                  </div>
                                  <div className="card_text">
                                    <strong>Private</strong>
                                    <span>Only you can see this list</span>
                                  </div>
                                  <div className="check_indicator">
                                    <i className="ti-check"></i>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group enhanced_input">
                            <label className="form-label" htmlFor="list_description">
                              <i className="ti-align-left"></i> Description <span className="optional">(Optional)</span>
                            </label>
                            <textarea
                              className="form-control"
                              id="list_description"
                              rows={3}
                              placeholder="Describe what makes this collection special..."
                            ></textarea>
                            <div className="char_counter">
                              <span>0</span>/500 characters
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form_section">
                      <div className="section_header">
                        <i className="ti-book"></i>
                        <h4>Add Books to Your List</h4>
                      </div>
                      <div className="row gy-4">
                        <div className="col-lg-12">
                          <div className="book_search_wrapper">
                            <div className="search_input_group">
                              <i className="ti-search search_icon"></i>
                              <input type="text" className="form-control" placeholder="Search for books by title, author, or ISBN..." id="book_search" />
                              <button type="button" className="search_btn">
                                <i className="ti-plus"></i> Add Book
                              </button>
                            </div>
                            <div className="search_suggestions">
                              <span className="suggestion_label">Popular:</span>
                              <a href="#" className="suggestion_tag">
                                Atomic Habits
                              </a>
                              <a href="#" className="suggestion_tag">
                                The Psychology of Money
                              </a>
                              <a href="#" className="suggestion_tag">
                                Deep Work
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="books_table_wrapper">
                            <div className="table_header">
                              <h5>
                                <i className="ti-layers"></i> Added Books <span className="book_count">{BOOK_ROWS.length} books</span>
                              </h5>
                              <div className="table_actions">
                                <button type="button" className="action_btn">
                                  <i className="ti-arrows-vertical"></i> Reorder
                                </button>
                              </div>
                            </div>
                            <div className="table-responsive">
                              <table className="table enhanced_table">
                                <thead>
                                  <tr>
                                    <th scope="col" className="th_serial">
                                      #
                                    </th>
                                    <th scope="col" className="th_cover">
                                      Cover
                                    </th>
                                    <th scope="col" className="th_title">
                                      Book Details
                                    </th>
                                    <th scope="col" className="th_category">
                                      Category
                                    </th>
                                    <th scope="col" className="th_action">
                                      Action
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {BOOK_ROWS.map((book, i) => (
                                    <tr className="book_row" draggable key={book.id}>
                                      <td className="serial_cell">
                                        <span className="drag_handle">
                                          <i className="ti-menu"></i>
                                        </span>
                                        <span className="serial_num">{i + 1}</span>
                                      </td>
                                      <td className="cover_cell">
                                        <div className="book_cover">
                                          <img src={book.image} alt={book.title} />
                                        </div>
                                      </td>
                                      <td className="title_cell">
                                        <a href="/product-single" className="book_title">
                                          {book.title}
                                        </a>
                                        <span className="book_author">by {book.author}</span>
                                        <div className="book_meta">
                                          <span className="rating">
                                            <i className="ti-star"></i> {book.rating}
                                          </span>
                                          <span className="price">{book.price}</span>
                                        </div>
                                      </td>
                                      <td className="category_cell">
                                        <span className="category_badge">{book.category}</span>
                                      </td>
                                      <td className="action_cell">
                                        <button type="button" className="remove_btn" title="Remove from list">
                                          <i className="ti-trash"></i>
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form_actions">
                      <button type="button" className="bj_theme_btn btn_outline">
                        <i className="ti-save"></i> Save as Draft
                      </button>
                      <button type="submit" className="bj_theme_btn btn_primary">
                        <i className="ti-check"></i> Publish List
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="tips_card">
                <div className="tips_header">
                  <i className="ti-light-bulb"></i>
                  <span>Pro Tips</span>
                </div>
                <ul className="tips_list">
                  <li>
                    <i className="ti-check"></i> Add a compelling description to help others discover your list
                  </li>
                  <li>
                    <i className="ti-check"></i> You can reorder books by dragging them
                  </li>
                  <li>
                    <i className="ti-check"></i> Public lists can be shared with friends and followers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
