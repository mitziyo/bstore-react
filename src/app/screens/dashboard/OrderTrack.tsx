import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { serverApi } from "../../../lib/config";
import { OrderStatus } from "../../../lib/enums/order.enum";
import OrderService from "../../services/OrderService";
import type { Order } from "../../../lib/types/order";
import "../../../scss/dashboard/dashboard.scss";
import "../../../scss/orderTrack/orderTrack.scss";

const STATUS_META: Record<OrderStatus, { label: string; className: string; icon: string }> = {
  [OrderStatus.PAUSE]: { label: "Pending", className: "processing", icon: "fa-solid fa-hourglass-half" },
  [OrderStatus.PROCESS]: { label: "Processing", className: "shipped", icon: "fa-solid fa-truck" },
  [OrderStatus.FINISH]: { label: "Completed", className: "delivered", icon: "fa-solid fa-circle-check" },
  [OrderStatus.DELETE]: { label: "Cancelled", className: "cancelled", icon: "fa-solid fa-circle-xmark" },
};

export function OrderTrack() {
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!id) return;
    new OrderService()
      .getMyOrders({ page: 1, limit: 100 })
      .then((orders) => {
        const found = orders.find((o) => o._id === id);
        if (found) setOrder(found);
        else setNotFound(true);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (notFound) {
    return (
      <section className="bj_account_dashboard" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <p className="text-center py-5">Order not found.</p>
        </div>
      </section>
    );
  }

  if (!order) return null;

  const meta = STATUS_META[order.orderStatus];
  const isCancelled = order.orderStatus === OrderStatus.DELETE;
  const subtotal = order.orderTotal - order.orderDelivery;

  const steps = [
    { key: "placed", title: "Order Placed", date: order.createdAt as unknown as string, done: true },
    {
      key: "processing",
      title: "Processing",
      date: order.orderStatus !== OrderStatus.PAUSE ? (order.updatedAt as unknown as string) : null,
      done: order.orderStatus === OrderStatus.PROCESS || order.orderStatus === OrderStatus.FINISH,
    },
    {
      key: "completed",
      title: "Completed",
      date: order.orderStatus === OrderStatus.FINISH ? (order.updatedAt as unknown as string) : null,
      done: order.orderStatus === OrderStatus.FINISH,
    },
  ];

  return (
    <section className="bj_account_dashboard" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="dashboard-content">
          <div className="dashboard-card">
            <div className="dashboard-card__header">
              <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                <div>
                  <h3 className="dashboard-card__title">Track Your Order</h3>
                  <p className="dashboard-card__subtitle">
                    Order ID: <strong>{order._id}</strong>
                  </p>
                </div>
                <span className={`order-status order-status--${meta.className}`}>
                  <i className={meta.icon}></i>
                  {meta.label}
                </span>
              </div>
            </div>

            <div className="dashboard-card__body">
              {isCancelled ? (
                <p className="text-center py-4">This order was cancelled.</p>
              ) : (
                <div className="order-timeline">
                  {steps.map((step, i) => (
                    <div
                      className={`timeline-step${step.done ? " timeline-step--complete" : ""}${i === steps.length - 1 ? " timeline-step--last" : ""}`}
                      key={step.key}
                    >
                      <div className="timeline-step__indicator">
                        <div className="timeline-step__icon">
                          <i className={step.done ? "fa-solid fa-circle-check" : "fa-regular fa-circle"}></i>
                        </div>
                        {i < steps.length - 1 && <div className="timeline-step__line"></div>}
                      </div>
                      <div className="timeline-step__content">
                        <h5 className="timeline-step__title">{step.title}</h5>
                        {step.date && (
                          <span className="timeline-step__date">
                            <i className="fa-regular fa-clock"></i>
                            {new Date(step.date).toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-card__header">
              <h3 className="dashboard-card__title">Order Summary</h3>
              <p className="dashboard-card__subtitle">{order.orderItems.length} items in this order</p>
            </div>

            <div className="dashboard-card__body">
              <div className="order-items">
                {order.orderItems.map((item) => {
                  const book = order.bookData.find((b) => b._id === item.bookId);
                  const imagePath = book?.bookImages[0] ? `${serverApi}/${book.bookImages[0]}` : "/img/cart/best_book1.jpg";
                  return (
                    <div className="order-item" key={item._id}>
                      <div className="order-item__image">
                        <img src={imagePath} alt={book?.bookName ?? "Book"} />
                      </div>
                      <div className="order-item__details">
                        <h5 className="order-item__title">
                          <Link to={`/book/${item.bookId}`}>{book?.bookName ?? "Unknown book"}</Link>
                        </h5>
                      </div>
                      <div className="order-item__qty">
                        <span className="order-item__qty-label">Qty</span>
                        <span className="order-item__qty-value">{item.itemQuantity}</span>
                      </div>
                      <div className="order-item__price">
                        <span className="order-item__price-final">${item.itemPrice}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="payment-summary">
                <div className="payment-summary__row">
                  <span>Subtotal ({order.orderItems.length} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="payment-summary__row">
                  <span>Delivery</span>
                  <span>{order.orderDelivery === 0 ? "Free" : `$${order.orderDelivery.toFixed(2)}`}</span>
                </div>
                <div className="payment-summary__row payment-summary__row--total">
                  <span>Total Paid</span>
                  <span>${order.orderTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
