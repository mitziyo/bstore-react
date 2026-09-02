import { useEffect, useState } from "react";
import "../../../scss/home/home.scss";
import { HeroBanner } from "./HeroBanner";
import { Promo } from "./Promo";
import { BestBooks } from "./BestBooks";
import { BookCategories } from "./BookCategories";
import { BestSelling } from "./BestSelling";
import { PromotionBox } from "./PromotionBox";
import { NewProducts } from "./NewProducts";
import { HomeBlog } from "./HomeBlog";
import { Subscribe } from "./Subscribe";
import BookService from "../../services/BookService";
import type { Product } from "../../../lib/types/product";

export function HomePage() {
  const [mostViewed, setMostViewed] = useState<Product[]>([]);
  const [newest, setNewest] = useState<Product[]>([]);

  useEffect(() => {
    const bookService = new BookService();

    bookService
      .getBooks({ page: 1, limit: 4, order: "bookViews" })
      .then((data) => setMostViewed(data))
      .catch((err) => console.log(err));

    bookService
      .getBooks({ page: 1, limit: 6, order: "createdAt" })
      .then((data) => setNewest(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <HeroBanner />
      <Promo />
      <BestBooks books={mostViewed.slice(0, 2)} />
      <BookCategories />
      <BestSelling mostViewed={mostViewed} newest={newest.slice(0, 4)} />
      <PromotionBox />
      <NewProducts books={newest} />
      <HomeBlog />
      <Subscribe />
    </>
  );
}
