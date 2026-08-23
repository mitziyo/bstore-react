import "../../../scss/checkoutGift/checkoutGift.scss";
import { PaymentMethodCard } from "../checkoutGift/PaymentMethodCard";
import { GiftCheckoutSidebar } from "../checkoutGift/GiftCheckoutSidebar";

export function CheckoutLoginPage() {
  return (
    <section className="bj_checkout_area" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="row justify-content-center gy-lg-0 gy-4">
          <div className="col-lg-7">
            <div className="cart-happy-return-parent mt-0 mb-0">
              <div className="cart-happy-return">
                <img src="/img/cart/happy-return-new.webp" alt="" />
                <p>7 Days Happy Return</p>
              </div>
              <div className="cart-happy-return">
                <img src="/img/cart/earn-points.svg" alt="" />
                <p>Purchase and Earn Point</p>
              </div>
            </div>
            <PaymentMethodCard footerAlignClass="text-lg-end text-center" />
          </div>
          <GiftCheckoutSidebar />
        </div>
      </div>
    </section>
  );
}
