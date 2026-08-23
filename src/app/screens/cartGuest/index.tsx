import "../../../scss/cart/cart.scss";
import { CartItems } from "../cart/CartItems";
import { RelatedProducts } from "../cart/RelatedProducts";
import { GuestCheckoutSidebar } from "./GuestCheckoutSidebar";

export function CartGuestPage() {
  return (
    <>
      <section className="bj_cart_area" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <div className="row gy-lg-0 gy-3">
            <CartItems />
            <GuestCheckoutSidebar />
          </div>
        </div>
      </section>
      <RelatedProducts />
    </>
  );
}
