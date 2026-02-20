"use client";

import Link from "next/link";
import Slider from "react-slick";

const ClientTwo = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    arrows: false,
    centerMode: true,
    dots: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div
      className="client-area-4 bg-smoke background-image"
      style={{ backgroundImage: "url('/main-assets/img/bg/client-bg4-1.png')" }}
    >
      <div className="container">
       
        <div
          className="subscribe-area-4"
          style={{ backgroundImage: "url('/main-assets/img/bg/subscribe-bg4-1.png')" }}
        >
          <div className="subscribe-thumb4-1">
            <img src="/main-assets/img/normal/subscribe_4-1.png" alt="img" />
          </div>
          <div className="subscribe-box">
            <h4 className="subscribe-box_title">
              Sign up to get the latest updates!
            </h4>
            <form className="newsletter-form">
              <input
                className="form-control"
                type="email"
                placeholder="Enter Your Email..."
                required=""
              />
              <button type="submit" className="btn style3">
                SUBCRIBE<i className="ri-arrow-right-up-line"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTwo;
