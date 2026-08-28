import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="contact-area">
      <div className="contact-map">
        <iframe
          src="https://maps.google.com/maps?q=6-24+Goejeong-dong,+Seo-gu,+Daejeon&t=&z=15&ie=UTF8&iwloc=&output=embed"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-lg-8 ms-auto">
            <div className="contact-form wow fadeInLeft" data-wow-delay="0.4s">
              <h3 className="title">Contact. Get in touch</h3>
              <p className="mb-35">LEAVE US A MESSAGE</p>

              {!submitted ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">
                        Name *
                      </label>
                      <div className="input-group">
                        <i className="input-icon fa-solid fa-user"></i>
                        <input className="form-control" type="text" id="name" name="name" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">
                        Email *
                      </label>
                      <div className="input-group">
                        <i className="input-icon fa-solid fa-envelope-open"></i>
                        <input className="form-control" type="email" id="email" name="email" required />
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Write your message here"
                      ></textarea>
                    </div>
                  </div>
                  <button type="submit" className="bj_theme_btn">
                    <i className="fa-solid fa-paper-plane"></i>SEND MESSAGE
                  </button>
                </form>
              ) : (
                <div className="contact-success">
                  <div className="contact-success-icon">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <h4>Message Sent!</h4>
                  <p>Thanks for reaching out. We'll get back to you as soon as possible.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
