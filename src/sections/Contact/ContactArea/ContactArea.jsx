import Link from "next/link";

const ContactArea = () => {
  return (
    <section className="contact-page-area space">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="contact-page-card bg-smoke">
              <div className="contact-page-card-details">
                <h4 className="contact-page-card_title">Address</h4>
                <div className="contact-page-card-text">
                  <i className="ri-map-pin-line"></i>
                 
                     7322 Southwest Freeway,
Arena Tower One, Suite 140
Houston TX 77074
                
                </div>
               
                
              </div>
              <div className="contact-page-card-thumb">
                <img src="/main-assets/img/normal/contact_page1-1.png" alt="img" />
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="contact-page-card bg-smoke">
              <div className="contact-page-card-details">
                <h4 className="contact-page-card_title">Phone</h4>
                <div className="contact-page-card-text">
                  <i className="ri-phone-line"></i>
                  <Link
                    className="contact-page-card_link"
                    href="tel:12814095882"
                  >
                    +1 281 409 5882
                  </Link>
                </div>
               
              </div>
              <div className="contact-page-card-thumb">
                <img src="/main-assets/img/normal/contact_page1-2.png" alt="img" />
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="contact-page-card bg-smoke">
              <div className="contact-page-card-details">
                <h4 className="contact-page-card_title">Email</h4>
              
                <div className="contact-page-card-text">
                  <i className="ri-mail-line"></i>
                  <Link
                    className="contact-page-card_link"
                    href="mailto:faisal@hybridoneconstruction.com"
                  >
                   faisal@hybridoneconstruction.com
                  </Link>
                </div>
                 <div className="contact-page-card-text">
                  <i className="ri-mail-line"></i>
                  <Link
                    className="contact-page-card_link"
                    href="mailto:fk@hybridoneconstruction.com"
                  >
                   fk@hybridoneconstruction.com
                  </Link>
                </div>
               
              </div>
              <div className="contact-page-card-thumb">
                <img src="/main-assets/img/normal/contact_page1-3.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
