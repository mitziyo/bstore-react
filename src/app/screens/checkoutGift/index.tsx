import "../../../scss/checkoutGift/checkoutGift.scss";
import { CheckoutGift } from "./CheckoutGift";
import { GiftCheckoutSidebar } from "./GiftCheckoutSidebar";

export function CheckoutGiftPage() {
  return (
    <section className="bj_checkout_area" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="row justify-content-center">
          <CheckoutGift />
          <GiftCheckoutSidebar />
        </div>
      </div>
    </section>
  );
}
