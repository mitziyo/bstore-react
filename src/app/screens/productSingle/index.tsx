import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../../scss/productSingle/productSingle.scss";
import { Breadcrumb } from "../shop/Breadcrumb";
import { BookDetails } from "./BookDetails";
import { ProductSidebar } from "./ProductSidebar";
import BookService from "../../services/BookService";
import type { Product } from "../../../lib/types/product";

export function ProductSinglePage() {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Product | null>(null);

  useEffect(() => {
    if (!id) return;
    new BookService()
      .getBook(id)
      .then((data) => setBook(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <Breadcrumb label={book?.bookName ?? "Book Details"} />

      <section className="product_details_area sec_padding" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          {!book ? (
            <p className="text-center" style={{ minHeight: 600 }}>
              Loading book...
            </p>
          ) : (
            <div className="row gy-xl-0 gy-3">
              <div className="col-xl-9">
                <BookDetails book={book} />
              </div>
              <div className="col-xl-3">
                <ProductSidebar book={book} />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
