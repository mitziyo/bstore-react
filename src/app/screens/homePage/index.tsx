import { useEffect } from "react";
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
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setNewBooks, setPopularBooks, setTopUsers } from "./slice";
import { retrieveNewBooks, retrievePopularBooks, retrieveTopUsers } from "./selector";

export function HomePage() {
  /*****   REDUX SLICE & SELECTOR    *****/
  const dispatch = useAppDispatch();
  const popularBooks = useAppSelector(retrievePopularBooks);
  const newBooks = useAppSelector(retrieveNewBooks);
  const topUsers = useAppSelector(retrieveTopUsers);

  useEffect(() => {
    const bookService = new BookService();

    bookService
      .getBooks({ page: 1, limit: 4, order: "bookViews" })
      .then((data) => dispatch(setPopularBooks(data)))
      .catch((err) => console.log(err));

    bookService
      .getBooks({ page: 1, limit: 6, order: "createdAt" })
      .then((data) => dispatch(setNewBooks(data)))
      .catch((err) => console.log(err));

    new MemberService()
      .getTopUsers()
      .then((data) => dispatch(setTopUsers(data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <>
      <HeroBanner />
      <Promo />
      <BestBooks books={popularBooks.slice(0, 2)} />
      <BookCategories />
      <BestSelling topUsers={topUsers} />
      <PromotionBox />
      <NewProducts books={newBooks} />
      <HomeBlog />
      <Subscribe />
    </>
  );
}
