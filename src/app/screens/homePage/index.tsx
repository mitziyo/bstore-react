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
import MemberService from "../../services/MemberService";
import type { Product } from "../../../lib/types/product";
import type { Member } from "../../../lib/types/member";

export function HomePage() {
  const [mostViewed, setMostViewed] = useState<Product[]>([]);
  const [newest, setNewest] = useState<Product[]>([]);
  const [topUsers, setTopUsers] = useState<Member[]>([]);

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

    new MemberService()
      .getTopUsers()
      .then((data) => setTopUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <HeroBanner />
      <Promo />
      <BestBooks books={mostViewed.slice(0, 2)} />
      <BookCategories />
      <BestSelling topUsers={topUsers} />
      <PromotionBox />
      <NewProducts books={newest} />
      <HomeBlog />
      <Subscribe />
    </>
  );
}
