import "../../../scss/authorSingle/authorSingle.scss";
import { Breadcrumb } from "../shop/Breadcrumb";
import { AuthorProfile } from "./AuthorProfile";
import { AuthorBooks } from "./AuthorBooks";

export function AuthorSinglePage() {
  return (
    <>
      <Breadcrumb title="Author Single" label="Author Single" parent={{ label: "Author", href: "/author" }} />

      <section className="bj_author_single_area sec_padding" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <AuthorProfile />
        </div>
      </section>

      <AuthorBooks />
    </>
  );
}
