import "../../../scss/productSingle/productSingle.scss";
import { Breadcrumb } from "../shop/Breadcrumb";
import { BookDetails } from "./BookDetails";
import { ProductSidebar } from "./ProductSidebar";
import { FrequentlyBought } from "./FrequentlyBought";

export function ProductSinglePage() {
  return (
    <>
      <Breadcrumb label="Shop Single" />

      <section className="product_details_area sec_padding" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <div className="row gy-xl-0 gy-3">
            <div className="col-xl-9">
              <BookDetails />
            </div>
            <div className="col-xl-3">
              <ProductSidebar />
            </div>
          </div>
        </div>
      </section>

      <FrequentlyBought />
    </>
  );
}
