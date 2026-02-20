"use client";

import { Accordion } from "react-bootstrap";

const FAQ = () => {
  return (
    <div className="faq-area-1 space-bottom space-top overflow-hidden shape-mockup-wrap">
      <div
        className="section-animation-shape1-2 shape-mockup animation-infinite background-image"
        style={{
          backgroundImage: "url('/main-assets/img/shape/global-line-shape2.png')",
          bottom: "0px",
        }}
      ></div>
      <div
        className="faq-bg-shape1-1 shape-mockup d-lg-block d-none"
        data-top="0"
        data-left="0"
      >
        <img src="/main-assets/img/bg/faq-bg-shape1-1.png" alt="img" />
      </div>
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">
            <img src="/main-assets/img/icon/section-subtitle-icon.svg" alt="img" /> Why Choose Us
          </span>
          <h2 className="sec-title">We build clarity, protection,<br/> and financial control.</h2>
        </div>
        <div className="row gy-50 gx-50">
          <div className="col-xl-6">
            <div id="faqAccordion">
              {/* Accordion items */}
              <Accordion
                defaultActiveKey="0"
                className="accordion-area homeTwo-custom-accordion-card"
              >
                <Accordion.Item eventKey="0" className="accordion-card">
                  <Accordion.Header>
                    25+ YEARS OF EXPERIENCE{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-text">
                      We understand Houston construction and real estate from the ground up, not just theory.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="accordion-card" eventKey="1">
                  <Accordion.Header>
                    YOU STAY IN CONTROL{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-text">
                      You make the decisions. We guide, advise, and protect your interests not ours.

                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="accordion-card" eventKey="2">
                  <Accordion.Header>
                    WE STAND BEHIND YOU {" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-text">
                      Permits, contracts, compliance, handled properly so you remain protected at every stage.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="accordion-card" eventKey="3">
                  <Accordion.Header>
                    WE TEACH YOU THE GAME{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-text">
                      We educate you on costing, contracts, sourcing, and property valuation, so you build with knowledge, not guesswork.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="accordion-card" eventKey="4">
                  <Accordion.Header>
                    COST SAVING UPTO 15%{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-text">
                      Through smart planning, procurement, and transparent budgeting.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="accordion-card" eventKey="5">
                  <Accordion.Header>
                   SMART SOURCING FROM CHINA{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-text">
                     Direct material imports reduce unnecessary markups, saving up to 10% on material costs.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>

          {/* Right side form */}
          <div className="col-xxl-4 col-xl-5">
            <div className="faq-form-wrap">
              <h4 className="faq-form-title">STILL CONFUSED?</h4>
              <div className="faq-form">
                <p className="faq-text">
                  Let’s discuss your project, budget, and goals. Fill out the form below and our team will guide you with clear, transparent advice.   
                </p>
                <div className="row gy-15">
                  <div className="col-12 form-group">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="form-control style-border3"
                    />
                  </div>
                  <div className="col-12 form-group">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="form-control style-border3"
                    />
                  </div>
                  <div className="col-12 form-group">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="form-control style-border3"
                    />
                  </div>
                  <div className="col-12 form-group">
                    <textarea
                      placeholder="Question or Message?"
                      className="form-control style-border3"
                    ></textarea>
                  </div>
                  <div className="col-12 form-group mb-0">
                    <button className="btn-with-icon style2">
                      GET START NOW
                      <span className="btn-icon">
                        <i className="ri-arrow-right-up-line"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-thumb1-1 shape-mockup">
        <img src="/main-assets/img/normal/faq_1-1.png" alt="img" />
      </div>
    </div>
  );
};

export default FAQ;
