interface Address {
  id: string;
  type: "home" | "office";
  isDefault: boolean;
  name: string;
  lines: string[];
  phone: string;
  email: string;
  lastUsed: string;
}

const ADDRESSES: Address[] = [
  {
    id: "a1",
    type: "home",
    isDefault: true,
    name: "Muaz BK",
    lines: ["123 Main Street, Apt 4B", "New York, NY 10001"],
    phone: "+1 (555) 123-4567",
    email: "muaz@example.com",
    lastUsed: "Last used 2 days ago",
  },
  {
    id: "a2",
    type: "office",
    isDefault: false,
    name: "Muaz BK",
    lines: ["456 Business Center, Floor 12", "Manhattan, NY 10018"],
    phone: "+1 (555) 987-6543",
    email: "muaz.work@company.com",
    lastUsed: "Last used 1 week ago",
  },
  {
    id: "a3",
    type: "office",
    isDefault: false,
    name: "Muaz BK",
    lines: ["789 Tech Hub, Suite 200", "Brooklyn, NY 11201"],
    phone: "+1 (555) 456-7890",
    email: "muaz@techhub.com",
    lastUsed: "Never used",
  },
];

const STATS = [
  { icon: "fa-solid fa-house", modifier: "", number: 1, label: "Home" },
  { icon: "fa-solid fa-building", modifier: "stat_icon--office", number: 2, label: "Office" },
  { icon: "fa-solid fa-location-dot", modifier: "stat_icon--total", number: 3, label: "Total" },
];

export function MyAddress() {
  return (
    <>
      <div className="address_page_header">
        <div className="header_content">
          <div className="header_icon">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="header_text">
            <h2>My Addresses</h2>
            <p>Manage your shipping and billing addresses</p>
          </div>
        </div>
        <a href="/add-new-address" className="bj_theme_btn add_address_btn">
          <i className="fa-solid fa-plus"></i>
          Add New Address
        </a>
      </div>

      <div className="address_stats">
        {STATS.map((stat) => (
          <div className="stat_item" key={stat.label}>
            <div className={`stat_icon ${stat.modifier}`}>
              <i className={stat.icon}></i>
            </div>
            <div className="stat_content">
              <span className="stat_number">{stat.number}</span>
              <span className="stat_label">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="address_cards_wrapper">
        {ADDRESSES.map((address) => (
          <div className={`address_card${address.isDefault ? " address_card--default" : ""}`} key={address.id}>
            <div className="address_card_header">
              <div className="address_type">
                <div className={`type_icon type_icon--${address.type}`}>
                  <i className={address.type === "home" ? "fa-solid fa-house" : "fa-solid fa-building"}></i>
                </div>
                <div className="type_info">
                  <span className={`type_badge type_badge--${address.type}`}>
                    {address.type === "home" ? "Home" : "Office"}
                  </span>
                  {address.isDefault && (
                    <span className="default_badge">
                      <i className="fa-solid fa-check-circle"></i> Default
                    </span>
                  )}
                </div>
              </div>
              <div className="address_actions">
                <button className="action_btn action_btn--edit addres_sidebar_cart_trigger" title="Edit Address">
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>
                <button className="action_btn action_btn--delete" title="Delete Address">
                  <i className="fa-regular fa-trash-can"></i>
                </button>
              </div>
            </div>
            <div className="address_card_body">
              <h5 className="recipient_name">{address.name}</h5>
              <p className="address_text">
                {address.lines.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < address.lines.length - 1 && <br />}
                  </span>
                ))}
              </p>
              <div className="address_meta">
                <span className="meta_item">
                  <i className="fa-solid fa-phone"></i>
                  {address.phone}
                </span>
                <span className="meta_item">
                  <i className="fa-solid fa-envelope"></i>
                  {address.email}
                </span>
              </div>
            </div>
            <div className="address_card_footer">
              {address.isDefault ? (
                <button className="set_default_btn disabled">
                  <i className="fa-solid fa-check"></i> Primary Address
                </button>
              ) : (
                <button className="set_default_btn">
                  <i className="fa-regular fa-circle"></i> Set as Default
                </button>
              )}
              <span className="last_used">{address.lastUsed}</span>
            </div>
          </div>
        ))}

        <a href="/add-new-address" className="address_card address_card--add">
          <div className="add_card_content">
            <div className="add_icon">
              <i className="fa-solid fa-plus"></i>
            </div>
            <span className="add_text">Add New Address</span>
            <p className="add_description">Save a new shipping or billing address</p>
          </div>
        </a>
      </div>

      <div className="address_tips_card">
        <div className="tips_header">
          <i className="fa-solid fa-lightbulb"></i>
          <span>Quick Tips</span>
        </div>
        <ul className="tips_list">
          <li>
            <i className="fa-solid fa-check"></i> Set your most used address as default for faster checkout
          </li>
          <li>
            <i className="fa-solid fa-check"></i> Add multiple addresses for home and office deliveries
          </li>
          <li>
            <i className="fa-solid fa-check"></i> Keep your phone number updated for delivery notifications
          </li>
        </ul>
      </div>
    </>
  );
}
