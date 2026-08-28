import "../../../scss/terms/terms.scss";
import { Breadcrumb } from "../shop/Breadcrumb";

export function TermsPage() {
  return (
    <>
      <Breadcrumb title="Terms & Conditions" label="Terms & Services" />

      <div className="sec_padding bj_privacy_policy" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <div className="page-area">
            <h3 className="pt-0">Definitions</h3>
            <p>
              In this document, we may use certain words or phrases, and it is important that you understand their
              meanings. The following is a non-exhaustive list of word and phrase definitions found in this document:
            </p>
            <ul>
              <li>&ldquo;Agreement&rdquo; means these Terms of Service;</li>
              <li>
                &ldquo;Services&rdquo; means the services we provide, including our online bookstore, and the sale of
                physical and digital books through our website;
              </li>
              <li>&ldquo;Website&rdquo; means our website, LightBooks;</li>
              <li>&ldquo;User&rdquo; means anyone who uses our services, including general visitors to our website;</li>
              <li>&ldquo;You&rdquo; means the person bound by this Agreement.</li>
            </ul>

            <h3>What LightBooks offers</h3>
            <p>
              LightBooks is an online bookstore offering a wide selection of physical and digital books across multiple
              genres. We manage the full purchase experience directly on our website, including order processing,
              payment, and delivery of both printed and eBook titles.
            </p>
            <p>
              LightBooks provides customer support to anyone who purchases from our store. Support is available through
              our website&rsquo;s contact channels, and our support hours and policies may be updated from time to
              time.
            </p>
            <p>
              When users complete a purchase, they receive an order confirmation which allows them to track their
              order and access their eBook Library for any digital titles purchased.
            </p>

            <h3>Eligibility</h3>
            <p>To use our services, you must meet certain conditions, including but not limited to:</p>
            <ul>
              <li>
                You shall not violate any applicable export control or other laws of your jurisdiction, or this
                agreement with LightBooks.
              </li>
              <li>
                You must be of the minimum age required to enter into a contract in the region where you live, and in
                no event be younger than 18.
              </li>
              <li>
                If you register on behalf of an organization, you must be authorized by that organization to bind it
                to this agreement, and you agree that you and the organization will be jointly and severally liable
                for any breach of this agreement.
              </li>
              <li>You must provide us with personal and other information that we believe is necessary to provide you with our services.</li>
            </ul>

            <h3>Rules</h3>
            <p>You must not:</p>
            <ul>
              <li>Violate any applicable local, national, or international law.</li>
              <li>
                Post or send any violent, threatening, pornographic, racist, hateful, or otherwise objectionable
                content in the opinion of LightBooks.
              </li>
              <li>
                Violate anyone&rsquo;s intellectual property, defame anyone, impersonate anyone, or otherwise violate
                the rights of a third party.
              </li>
              <li>
                Attempt phishing, SQL injection, or otherwise compromise the security or integrity of the LightBooks
                site, service, or its users&rsquo; devices.
              </li>
              <li>Do anything else that may bring LightBooks into disrepute or violate anyone&rsquo;s rights.</li>
            </ul>

            <h3>Copyright</h3>
            <p>
              You agree not to copy, distribute, display, broadcast, or otherwise reproduce any content on this
              website (including book descriptions, cover images, and editorial content) without our prior written
              permission.
            </p>
            <p>
              LightBooks must ensure that it has the right to use the content that its users post to its site. Such
              content may include but is not limited to reviews, ratings, photos, and other materials. Whenever you
              submit content to our site, you agree that you grant us the non-exclusive, universal, perpetual, and
              irrevocable right to use, reproduce, and display that content in connection with our services. You
              warrant to us that you have the right to grant us this right to the content, and that you will
              indemnify and defend us against any damages arising from any breach of this warranty.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
