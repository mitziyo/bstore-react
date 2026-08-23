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

export function HomePage() {
  return (
    <>
      <HeroBanner />
      <Promo />
      <BestBooks />
      <BookCategories />
      <BestSelling />
      <PromotionBox />
      <NewProducts />
      <HomeBlog />
      <Subscribe />
    </>
  );
}
