"use client";
import Slider from "react-slick";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import CircleTextTwo from "../../Common/CircleTextTwo";

const Hero = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);



  const shape1Style = {
    backgroundImage: "url('/main-assets/img/shape/global-line-shape1.png')",
  };

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    dotsClass: "custom-dots",
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    afterChange: current => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: false,
        },
      },
      {
        breakpoint: 766,
        settings: {
          dots: false,
        },
      },
    ],
  };

  const settingsTwo = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    afterChange: current => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: false,
        },
      },
      {
        breakpoint: 766,
        settings: {
          dots: false,
        },
      },
    ],
  };

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  return (
    <>
      <div
        className="hero-wrapper hero-2 shape-mockup-wrap home-two-hero-space home-two-slider-navigation-dots"
        id="hero"
      >
        <div
          className="section-animation-shape1-1 shape-mockup animation-infinite background-image"
          style={shape1Style}
        ></div>
        <div
          className="section-animation-shape1-2 shape-mockup animation-infinite background-image"
          style={shape1Style}
        ></div>

        <Slider
          {...settings}
          asNavFor={nav2}
          ref={sliderRef1}
          className="hero-slider2 global-carousel"
          data-asnavfor=".hero-number-slider2"
        >
          <div className="hero-slide">
            <div className="container">
              <div className="hero-style2 hero-two-extra-style">
                <div className="row">
                  <div className="col-lg-12">
                    <h1
                      className={`hero-title slider-custom-anim-left ${activeSlide == 0 ? 'slider-animated' : ''}`}
                      style={{ animationDelay: '0.1s' }}
                    >
                      PROFITABLE PROJECTS   
                    </h1>
                  </div>
                  <div className="col-lg-7">
                    <div className={`hero-thumb text-center slideinleft ${activeSlide == 0 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.4s' }} >
                      <img src="/main-assets/img/hero/hero_shape_1_1.png" alt="img" />
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <p className={`hero-text slider-custom-anim-left ${activeSlide == 0 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.2s' }}>We help commercial developers and property investors protect margins, reduce material costs, and maintain full financial control while delivering projects on schedule.
</p>
                    <div className={`hero-tag slideinup ${activeSlide == 0 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.4s' }}>
                      <div className="about-two__video-box">
                        <div className="round-text">
                          <CircleTextTwo />
                        </div>
                        <Link href="/pages/innerpage/contact" className="hero-tag_icon">
                          <i className="ri-arrow-right-up-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-slide">
            <div className="container">
              <div className="hero-style2">
                <div className="row">
                  <div className="col-lg-12">
                    <h1
                      className={`hero-title slider-custom-anim-left ${activeSlide == 1 ? 'slider-animated' : ''}`}
                      style={{ animationDelay: '0.1s' }}
                    >
                      CONFIDENT BUILDING 
                    </h1>
                  </div>
                  <div className="col-lg-7">
                    <div
                      className={`hero-thumb text-center slideinleft ${activeSlide == 1 ? 'slider-animated' : ''}`}
                      style={{ animationDelay: '0.4s' }}
                    >
                      <img src="/main-assets/img/hero/hero_thumb_2_1.png" alt="img" />
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <p
                      className={`hero-text slider-custom-anim-left ${activeSlide == 1 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.2s' }}
                    >
                     We guide homeowners through every step of the construction process and help you save up to 15% while keeping you fully in control.
                    </p>
                    <div
                      className={`hero-tag slideinup ${activeSlide == 1 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.4s' }}
                    >
                      <div className="about-two__video-box">
                        <div className="round-text">
                          <CircleTextTwo />
                        </div>
                        <Link href="/pages/innerpage/contact" className="hero-tag_icon">
                          <i className="ri-arrow-right-up-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-slide">
            <div className="container">
              <div className="hero-style2">
                <div className="row">
                  <div className="col-lg-12">
                    <h1
                      className={`hero-title slider-custom-anim-left ${activeSlide == 2 ? 'slider-animated' : ''}`}
                      style={{ animationDelay: '0.1s' }}
                    >
                      SMART CONSTRUCTION 
                    </h1>
                  </div>
                  <div className="col-lg-7">
                    <div
                      className={`hero-thumb text-center slideinleft ${activeSlide == 2 ? 'slider-animated' : ''}`}
                      style={{ animationDelay: '0.4s' }}
                    >
                      <img src="/main-assets/img/hero/hero_thumb_2_2.png" alt="img" />
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <p
                      className={`hero-text slider-custom-anim-left ${activeSlide == 2 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.2s' }}
                    >
                      We don’t just build projects, we teach you the process, protect your money, and help you make informed decisions so your investment works for you.
                    </p>
                    <div
                      className={`hero-tag slideinup ${activeSlide == 2 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.4s' }}
                    >
                      <div className="about-two__video-box">
                        <div className="round-text">
                          <CircleTextTwo />
                        </div>
                        <Link href="/pages/innerpage/contact" className="hero-tag_icon">
                          <i className="ri-arrow-right-up-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <div class="container">
          <Slider
            {...settingsTwo}
            asNavFor={nav1}
            ref={sliderRef2}
            slidesToShow={1}
            swipeToSlide={true}
            focusOnSelect={true}
            className="row global-carousel hero-number-slider2"
            data-asnavfor=".hero-slider2"
          >
            <div>
              <div className="col-lg-auto">
                <div className="slider-number">1. Construction</div>
              </div>
            </div>
            <div>
              <div className="col-lg-auto">
                <div className="slider-number">2. Renovation</div>
              </div>
            </div>
            <div>
              <div className="col-lg-auto">
                <div className="slider-number">3. Industry</div>
              </div>
            </div>
          </Slider>
        </div>
        <div
          className="hero-shape2-1 shape-mockup jump-reverse d-lg-block d-none"
          style={{ bottom: "5%", left: "0px" }}
        >
          <img src="/main-assets/img/hero/hero_shape_2_1.png" alt="img" />
        </div>
        <div
          className="hero-shape2-2 shape-mockup jump d-sm-block d-none"
          style={{ top: "13%", right: "0px" }}
        >
          <img src="/main-assets/img/hero/hero_shape_2_2.png" alt="img" />
        </div>
        <div
          className="hero-shape2-3 shape-mockup jump-reverse d-xl-block d-none"
          style={{ bottom: "0px", right: "0px" }}
        >
          <img src="/main-assets/img/hero/hero_shape_2_3.png" alt="img" />
        </div>
      </div>
    </>
  );
};

export default Hero;
