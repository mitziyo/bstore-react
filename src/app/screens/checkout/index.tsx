import "../../../scss/checkout/checkout.scss";
import { CheckoutForm } from "./CheckoutForm";
import { OrderSummarySidebar } from "./OrderSummarySidebar";

export function CheckoutPage() {
  return (
    <section className="checkout-section" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="row justify-content-center gy-4">
          <CheckoutForm />
          <OrderSummarySidebar />
        </div>
      </div>
    </section>
  );
}
