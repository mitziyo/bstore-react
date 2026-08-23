import "../../../scss/cart/cart.scss";
import { CartItems } from "./CartItems";
import { CheckoutSidebar } from "./CheckoutSidebar";
import { RelatedProducts } from "./RelatedProducts";

export function CartPage() {
  return (
    <>
      <section className="bj_cart_area" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <div className="row gy-lg-0 gy-3">
            <CartItems />
            <CheckoutSidebar />
          </div>
        </div>
      </section>
      <RelatedProducts />
    </>
  );
}
