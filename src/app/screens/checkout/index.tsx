import "../../../scss/checkout/checkout.scss";
import { CheckoutForm } from "./CheckoutForm";
import { OrderSummarySidebar } from "./OrderSummarySidebar";
import { useGlobals } from "../../hooks/useGlobals";
import { calculateDelivery } from "../../../lib/config";

export function CheckoutPage() {
  const { basket } = useGlobals();
  const subtotal = basket.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = calculateDelivery(subtotal);
  const total = subtotal + delivery;

  return (
    <section className="checkout-section" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="row justify-content-center gy-4">
          <CheckoutForm total={total} />
          <OrderSummarySidebar subtotal={subtotal} delivery={delivery} total={total} />
        </div>
      </div>
    </section>
  );
}
