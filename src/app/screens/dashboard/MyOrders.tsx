import { useEffect, useState } from "react";
import { serverApi } from "../../../lib/config";
import { OrderStatus } from "../../../lib/enums/order.enum";
import OrderService from "../../services/OrderService";
import type { Order, OrderInquiry } from "../../../lib/types/order";

const STATUS_META: Record<OrderStatus, { icon: string; label: string; className: string }> = {
  [OrderStatus.PAUSE]: { icon: "fa-solid fa-hourglass-half", label: "Pending", className: "pause" },
  [OrderStatus.PROCESS]: { icon: "fa-solid fa-arrows-rotate", label: "Processing", className: "processing" },
  [OrderStatus.FINISH]: { icon: "fa-solid fa-circle-check", label: "Completed", className: "completed" },
  [OrderStatus.DELETE]: { icon: "fa-solid fa-circle-xmark", label: "Cancelled", className: "cancelled" },
};

export function MyOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>("all");

  useEffect(() => {
    const inquiry: OrderInquiry = { page: 1, limit: 20 };
    if (statusFilter !== "all") inquiry.orderStatus = statusFilter as OrderStatus;
    new OrderService()
      .getMyOrders(inquiry)
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  }, [statusFilter]);

  return (
    <div className="dashboard-card">
      <div className="dashboard-card__header">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
          <div>
            <h3 className="dashboard-card__title">My Orders</h3>
            <p className="dashboard-card__subtitle">You have {orders.length} orders in total</p>
          </div>
        </div>
      </div>

      <div className="dashboard-card__body">
        <div className="orders-toolbar">
          <div className="orders-toolbar__filter">
            <select className="orders-toolbar__select" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="all">All Orders</option>
              <option value={OrderStatus.PAUSE}>Pending</option>
              <option value={OrderStatus.PROCESS}>Processing</option>
              <option value={OrderStatus.FINISH}>Completed</option>
              <option value={OrderStatus.DELETE}>Cancelled</option>
            </select>
          </div>
        </div>

        {orders.length === 0 ? (
          <p className="text-center">No orders yet.</p>
        ) : (
          <div className="orders-list">
            {orders.map((order) => {
              const meta = STATUS_META[order.orderStatus];
              return (
                <div className="order-card" key={order._id}>
                  <div className="order-card__header">
                    <div className="order-card__info">
                      <span className="order-card__id">{order._id}</span>
                      <span className="order-card__date">{new Date(order.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div className={`order-card__status order-card__status--${meta.className}`}>
                      <i className={meta.icon}></i>
                      {meta.label}
                    </div>
                  </div>

                  <div className="order-card__products">
                    {order.orderItems.map((item) => {
                      const book = order.bookData.find((b) => b._id === item.bookId);
                      const imagePath = book?.bookImages[0] ? `${serverApi}/${book.bookImages[0]}` : "/img/cart/best_book1.jpg";
                      return (
                        <div className="order-product" key={item._id}>
                          <img src={imagePath} alt={book?.bookName ?? "Book"} />
                          <div className="order-product__info">
                            <h6 className="order-product__title">{book?.bookName ?? "Unknown book"}</h6>
                            <div className="order-product__price">
                              <span className="order-product__current">
                                {item.itemQuantity} x ${item.itemPrice}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="order-card__footer">
                    <div className="order-card__total">
                      <span>Total:</span>
                      <strong>${order.orderTotal}</strong>
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
