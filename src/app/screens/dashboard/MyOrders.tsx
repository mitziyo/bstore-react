interface OrderProduct {
  image: string;
  title: string;
  current: string;
  original: string;
}

type OrderStatus = "completed" | "processing" | "cancelled" | "refunded";

interface Order {
  id: string;
  date: string;
  status: OrderStatus;
  products: OrderProduct[];
  total: string;
  action: "track" | "details" | "reorder";
}

const STATUS_META: Record<OrderStatus, { icon: string; label: string }> = {
  completed: { icon: "fa-solid fa-circle-check", label: "Completed" },
  processing: { icon: "fa-solid fa-arrows-rotate", label: "Processing" },
  cancelled: { icon: "fa-solid fa-circle-xmark", label: "Cancelled" },
  refunded: { icon: "fa-solid fa-rotate-left", label: "Refunded" },
};

const ORDERS: Order[] = [
  {
    id: "#47162275294678",
    date: "Dec 28, 2025",
    status: "completed",
    products: [
      { image: "/img/cart/best_book1.jpg", title: "Tata Stories", current: "$19.99", original: "$29.99" },
      { image: "/img/cart/best_book3.jpg", title: "Tata Stories", current: "$19.99", original: "$29.99" },
      { image: "/img/cart/best_book2.jpg", title: "Tata Stories", current: "$19.99", original: "$29.99" },
    ],
    total: "$59.97",
    action: "track",
  },
  {
    id: "#47162275294679",
    date: "Dec 25, 2025",
    status: "refunded",
    products: [
      { image: "/img/cart/best_book3.jpg", title: "Tata Stories", current: "$19.99", original: "$29.99" },
    ],
    total: "$19.99",
    action: "details",
  },
  {
    id: "#47162275294680",
    date: "Dec 20, 2025",
    status: "cancelled",
    products: [
      { image: "/img/home-two/best_book1.jpg", title: "Tata Stories", current: "$19.99", original: "$29.99" },
      { image: "/img/home-two/best_book2.jpg", title: "Tata Stories", current: "$19.99", original: "$29.99" },
    ],
    total: "$39.98",
    action: "reorder",
  },
];

function OrderAction({ action }: { action: Order["action"] }) {
  if (action === "track") {
    return (
      <a href="/order-track" className="order-card__btn">
        <i className="fa-solid fa-location-arrow"></i>
        Track Order
      </a>
    );
  }

  if (action === "details") {
    return (
      <button className="order-card__btn order-card__btn--secondary">
        <i className="fa-solid fa-file-invoice"></i>
        View Details
      </button>
    );
  }

  return (
    <button className="order-card__btn order-card__btn--reorder">
      <i className="fa-solid fa-arrow-rotate-right"></i>
      Reorder
    </button>
  );
}

export function MyOrders() {
  return (
    <div className="dashboard-card">
      <div className="dashboard-card__header">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
          <div>
            <h3 className="dashboard-card__title">My Orders</h3>
            <p className="dashboard-card__subtitle">You have {ORDERS.length} orders in total</p>
          </div>
        </div>
      </div>

      <div className="dashboard-card__body">
        <div className="orders-toolbar">
          <div className="orders-toolbar__search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search by Order ID..." className="orders-toolbar__input" />
          </div>
          <div className="orders-toolbar__filter">
            <select className="orders-toolbar__select">
              <option value="all">All Orders</option>
              <option value="processing">Processing</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
              <option value="refunded">Refunded</option>
            </select>
          </div>
        </div>

        <div className="orders-list">
          {ORDERS.map((order) => (
            <div className="order-card" key={order.id}>
              <div className="order-card__header">
                <div className="order-card__info">
                  <span className="order-card__id">{order.id}</span>
                  <span className="order-card__date">{order.date}</span>
                </div>
                <div className={`order-card__status order-card__status--${order.status}`}>
                  <i className={STATUS_META[order.status].icon}></i>
                  {STATUS_META[order.status].label}
                </div>
              </div>

              <div className="order-card__products">
                {order.products.map((product, i) => (
                  <div className="order-product" key={i}>
                    <img src={product.image} alt={product.title} />
                    <div className="order-product__info">
                      <h6 className="order-product__title">{product.title}</h6>
                      <div className="order-product__price">
                        <span className="order-product__current">{product.current}</span>
                        <span className="order-product__original">{product.original}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-card__footer">
                <div className="order-card__total">
                  <span>Total:</span>
                  <strong>{order.total}</strong>
                </div>
                <OrderAction action={order.action} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
