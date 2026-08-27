import "../../../scss/about/about.scss";
import { Breadcrumb } from "../shop/Breadcrumb";
import { Mission } from "./Mission";
import { PopularAuthors } from "./PopularAuthors";
import { Testimonials } from "./Testimonials";

export function AboutPage() {
  return (
    <>
      <Breadcrumb title="About Us" label="About" />
      <Mission />
      <PopularAuthors />
      <Testimonials />
    </>
  );
}
