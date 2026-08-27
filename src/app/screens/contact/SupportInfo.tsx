type SupportLine = { text: string; href?: string };

const SUPPORT_ITEMS: { icon: string; title: string; lines: SupportLine[] }[] = [
  {
    icon: "/img/map-icon.svg",
    title: "Visit Us",
    lines: [{ text: "98 Main Avenue, Brooklyn, MS, United States" }],
  },
  {
    icon: "/img/phone-icon.svg",
    title: "Call Us",
    lines: [
      { text: "+1(666) 698-821-521", href: "tel:9666698821521" },
      { text: "+1(333) 658-795-972", href: "tel:9666698821521" },
    ],
  },
  {
    icon: "/img/envelope-icon.svg",
    title: "Email Us",
    lines: [
      { text: "example@example.com", href: "mailto:example@example.com" },
      { text: "example2@example2.com", href: "mailto:example@example.com" },
    ],
  },
];

export function SupportInfo() {
  return (
    <section className="support-area sec_padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="section_title wow fadeInUp" data-wow-delay="0.1s">
              <h2 className="title">Keep In Touch With Us</h2>
              <p>You can get all the contact information.</p>
            </div>
          </div>
          {SUPPORT_ITEMS.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={item.title}>
              <div className="support-item wow fadeInUp" data-wow-delay={`${0.2 + index * 0.1}s`}>
                <div className="icon-wrapper">
                  <img className="support-icon" src={item.icon} alt="" />
                </div>
                <p className="support-title">{item.title}</p>
                {item.lines.map((line) =>
                  line.href ? (
                    <a className="support-text d-block" href={line.href} key={line.text}>
                      {line.text}
                    </a>
                  ) : (
                    <p className="support-text" key={line.text}>
                      {line.text}
                    </p>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
