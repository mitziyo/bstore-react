import { useState, type ReactNode } from "react";
import "../../../scss/faq/faq.scss";
import { Breadcrumb } from "../shop/Breadcrumb";

interface FaqItem {
  id: string;
  question: string;
  answer: ReactNode;
}

interface FaqCategory {
  id: string;
  icon: string;
  label: string;
  title: string;
  items: FaqItem[];
}

const CATEGORIES: FaqCategory[] = [
  {
    id: "general",
    icon: "fa-solid fa-circle-question",
    label: "General Questions",
    title: "General Questions",
    items: [
      {
        id: "general1",
        question: "What is LightBooks?",
        answer:
          "LightBooks is your one-stop destination for discovering, purchasing, and enjoying books. Whether you prefer physical copies or eBooks, we offer a vast collection across all genres including fiction, non-fiction, romance, thriller, biography, and more. Our mission is to bring the passion and love for reading books back to everyone.",
      },
      {
        id: "general2",
        question: "How do I create an account?",
        answer:
          'Creating an account is easy! Simply click on the "Sign Up" button at the top of the page. You can register using your email address or sign up quickly using your Google, Facebook, or Apple account. Once registered, you\'ll have access to wishlist, order history, eBook library, and personalized recommendations.',
      },
      {
        id: "general3",
        question: "Do I need an account to make a purchase?",
        answer:
          "You can make purchases as a guest, but we recommend creating an account to track your orders, access your eBook library, save items to your wishlist, and enjoy a faster checkout experience on future orders.",
      },
      {
        id: "general4",
        question: "How can I contact customer support?",
        answer: (
          <>
            You can reach our customer support team through multiple channels: Email us at support@lightbooks.com, call us at +61 (0) 3 8376 6284, or
            use the contact form on our <a href="/contact">Contact Us</a> page. Our support team is available Monday-Friday, 9am-6pm EST.
          </>
        ),
      },
    ],
  },
  {
    id: "orders",
    icon: "fa-solid fa-cart-shopping",
    label: "Orders & Shipping",
    title: "Orders & Shipping",
    items: [
      {
        id: "orders1",
        question: "How can I track my order?",
        answer: (
          <>
            Once your order is shipped, you'll receive an email with tracking information. You can also track your order by logging into your
            account and visiting the <a href="/order-track">Order Tracking</a> page. Simply enter your order number to see real-time updates on
            your shipment.
          </>
        ),
      },
      {
        id: "orders2",
        question: "What are the shipping options and costs?",
        answer:
          "We offer several shipping options: Standard Shipping (5-7 business days) - Free on orders over $35, Express Shipping (2-3 business days) - $9.99, and Next Day Delivery - $14.99. International shipping is also available with rates calculated at checkout based on destination.",
      },
      {
        id: "orders3",
        question: "Can I change or cancel my order?",
        answer:
          "You can modify or cancel your order within 1 hour of placing it, as long as it hasn't been processed for shipping. To make changes, go to your Order History in your account dashboard or contact our customer support immediately.",
      },
      {
        id: "orders4",
        question: "Do you ship internationally?",
        answer:
          "Yes! We ship to over 100 countries worldwide. International shipping times typically range from 7-21 business days depending on the destination. Customs duties and taxes may apply and are the responsibility of the recipient.",
      },
    ],
  },
  {
    id: "payment",
    icon: "fa-solid fa-credit-card",
    label: "Payment & Refunds",
    title: "Payment & Refunds",
    items: [
      {
        id: "payment1",
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit and debit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and LightBooks Gift Cards. All transactions are secured with SSL encryption for your safety.",
      },
      {
        id: "payment2",
        question: "What is your return policy?",
        answer:
          "We offer a 30-day return policy for physical books in their original condition. Simply initiate a return through your account, print the prepaid shipping label, and send the book back. Refunds are processed within 5-7 business days after we receive the returned item.",
      },
      {
        id: "payment3",
        question: "Can I get a refund for an eBook?",
        answer:
          "eBook refunds are handled on a case-by-case basis. If you accidentally purchased the wrong book or experienced technical issues preventing you from reading it, please contact support within 7 days of purchase. We're committed to ensuring your satisfaction.",
      },
      {
        id: "payment4",
        question: "Is my payment information secure?",
        answer:
          "Absolutely! We use industry-standard SSL encryption and are PCI-DSS compliant. We never store your full credit card details on our servers. Your financial information is processed through secure payment gateways trusted by millions of users worldwide.",
      },
    ],
  },
  {
    id: "ebooks",
    icon: "fa-solid fa-book",
    label: "eBooks & Digital",
    title: "eBooks & Digital",
    items: [
      {
        id: "ebooks1",
        question: "How do I access my purchased eBooks?",
        answer: (
          <>
            After purchasing an eBook, it will appear in your <a href="/my-ebook-library">eBook Library</a>. You can read it online using our web
            reader or download it in EPUB or PDF format to read offline on your favorite device.
          </>
        ),
      },
      {
        id: "ebooks2",
        question: "What formats are eBooks available in?",
        answer:
          "Most of our eBooks are available in EPUB (compatible with most e-readers and apps), PDF (best for fixed-layout books), and MOBI format (for Kindle devices). Format availability may vary by title.",
      },
      {
        id: "ebooks3",
        question: "Can I read eBooks on multiple devices?",
        answer:
          "Yes! You can access your eBook library from up to 5 devices simultaneously. Your reading progress, bookmarks, and highlights sync automatically across all your devices, so you can pick up right where you left off.",
      },
      {
        id: "ebooks4",
        question: "Do eBooks expire?",
        answer:
          "No! Once you purchase an eBook, it's yours forever. You can read it as many times as you like, and it will always be available in your eBook library as long as you have an active LightBooks account.",
      },
    ],
  },
  {
    id: "account",
    icon: "fa-solid fa-user",
    label: "Account & Membership",
    title: "Account & Membership",
    items: [
      {
        id: "account1",
        question: "How do I reset my password?",
        answer:
          "Click on \"Forgot Password\" on the login page. Enter your email address, and we'll send you a secure link to reset your password. The link expires after 24 hours for security purposes. If you don't see the email, check your spam folder.",
      },
      {
        id: "account2",
        question: "How do I update my account information?",
        answer: (
          <>
            Log in to your account and go to <a href="/my-account">My Account</a>. From there, you can update your personal information, email
            address, password, and notification preferences. You can also manage your addresses in the <a href="/my-address">Address Book</a>{" "}
            section.
          </>
        ),
      },
      {
        id: "account3",
        question: "What are the benefits of following authors?",
        answer:
          "When you follow an author, you'll receive notifications about their new releases, special offers on their books, and updates about upcoming events or signings. It's a great way to stay connected with your favorite writers!",
      },
      {
        id: "account4",
        question: "How do I delete my account?",
        answer:
          "We're sorry to see you go! To delete your account, please contact our support team. Note that deleting your account will permanently remove your order history, wishlists, and access to purchased eBooks. Consider downloading your eBooks before requesting account deletion.",
      },
    ],
  },
];

export function FaqPage() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);
  const [openItems, setOpenItems] = useState<Record<string, string>>(
    Object.fromEntries(CATEGORIES.map((c) => [c.id, c.items[0].id])),
  );

  const category = CATEGORIES.find((c) => c.id === activeCategory)!;

  return (
    <>
      <Breadcrumb title="Frequently Asked Questions" label="FAQ" />

      <section className="bj_faq_area sec_padding" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="faq_sidebar">
                <h3 className="mb-4">Quick Links</h3>
                <ul className="nav nav-pills flex-column faq_nav">
                  {CATEGORIES.map((c) => (
                    <li className="nav-item" key={c.id}>
                      <button
                        className={`nav-link${activeCategory === c.id ? " active" : ""}`}
                        type="button"
                        onClick={() => setActiveCategory(c.id)}
                      >
                        <i className={c.icon}></i> {c.label}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="faq_contact_box mt-4">
                  <h4>Still have questions?</h4>
                  <p>Can't find what you're looking for? Our support team is here to help.</p>
                  <a href="/contact" className="bj_theme_btn">
                    Contact Support
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content">
                <div className="tab-pane fade show active">
                  <h3 className="faq_section_title">{category.title}</h3>
                  <div className="accordion bj_accordion">
                    {category.items.map((item) => {
                      const isOpen = openItems[category.id] === item.id;
                      return (
                        <div className="accordion-item" key={item.id}>
                          <h2 className="accordion-header">
                            <button
                              className={`accordion-button${isOpen ? "" : " collapsed"}`}
                              type="button"
                              onClick={() => setOpenItems((prev) => ({ ...prev, [category.id]: isOpen ? "" : item.id }))}
                            >
                              {item.question}
                            </button>
                          </h2>
                          {isOpen && (
                            <div className="accordion-collapse collapse show">
                              <div className="accordion-body">{item.answer}</div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
