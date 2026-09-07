type SupportLine = { text: string; type?: "tel" | "mailto" };

const SUPPORT_ITEMS: { icon: string; title: string; lines: SupportLine[] }[] = [
  {
    icon: "/img/map-icon.svg",
    title: "Visit Us",
    lines: [{ text: "6-24 Goejeong-dong, Seo-gu, Daejeon, South Korea" }],
  },
  {
    icon: "/img/phone-icon.svg",
    title: "Call Us",
    lines: [
      { text: "+82 42-698-8215", type: "tel" },
      { text: "+82 42-658-7959", type: "tel" },
    ],
  },
  {
    icon: "/img/envelope-icon.svg",
    title: "Email Us",
    lines: [
      { text: "example@example.com", type: "mailto" },
      { text: "example2@example2.com", type: "mailto" },
    ],
  },
];

function lineHref(line: SupportLine): string | undefined {
  if (line.type === "tel") return `tel:${line.text.replace(/[^\d+]/g, "")}`;
  if (line.type === "mailto") return `mailto:${line.text}`;
  return undefined;
}

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
                {item.lines.map((line) => {
                  const href = lineHref(line);
                  return href ? (
                    <a className="support-text d-block" href={href} key={line.text}>
                      {line.text}
                    </a>
                  ) : (
                    <p className="support-text" key={line.text}>
                      {line.text}
                    </p>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
