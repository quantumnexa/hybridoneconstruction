"use client";

import Link from "next/link";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const About = () => {
    const { ref: counterRef, inView: counterInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className="about-area-1 space overflow-hidden shape-mockup-wrap" ref={counterRef} id="about-sec">
            <div
                className="section-animation-shape1-1 shape-mockup animation-infinite background-image"
                data-bottom="0"
                style={{ backgroundImage: "url('/main-assets/img/shape/global-line-shape2.png')", bottom: '0px' }}
            ></div>
            <div
                className="about_shape_1-1 shape-mockup jump-reverse"
                data-bottom="0"
                data-right="0"
                style={{ bottom: '0px', right: '0px' }}
            >
                <img src="/main-assets/img/normal/about_shape_1-2.png" alt="img" />
            </div>
            <div className="container">
                <div className="row gx-60 align-items-center">
                    <div className="col-xl-6">
                        <div className="about-thumb1 mb-40 mb-lg-0">
                            <div className="about-img-1">
                                <img src="/main-assets/img/normal/about_1-1.png" alt="img" />
                            </div>
                            <div className="about-counter-wrap jump">
                                <h3 className="about-counter-number">
                                    <span className="counter-number">
                                        {counterInView && (
                                            <CountUp
                                                end={1.2}
                                                duration={4}
                                                decimals={1}
                                                decimal="."
                                            />
                                        )}
                                    </span>
                                    k
                                </h3>
                                <p className="about-counter-text">Happy Customers</p>
                                <div className="about-counter-shape">
                                    <img src="/main-assets/img/normal/about_shape_1-1.png" alt="img" />
                                </div>
                                <div className="client-group-thumb">
                                    <img src="/main-assets/img/normal/client_group_1-1.png" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-content-wrap1">
                            <div className="title-area mb-25">
                                <span className="sub-title">
                                    <img src="/main-assets/img/icon/section-subtitle-icon.svg" alt="img" />
                                    ABOUT US
                                </span>
                                <h2 className="sec-title">Built to Protect Your Investment</h2>
                                <p className="sec-text">
                                    Hybrid One Construction was founded on a simple belief:<br/><br/>
                                    Construction should create value, not confusion, stress, or financial risk.
With over 25 years of hands-on experience in construction and real estate, we understand the realities of building in Houston. We’ve seen projects succeed and we’ve seen where they go wrong. That experience allows us to guide our clients with clarity, strategy, and protection.
We don’t operate like traditional contractors.
<br/><br/>
We believe:

                                </p>
                            </div>
                            <div className="checklist mb-35">
                            <ul>
                                <li><img src="/main-assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Contractors push their own agenda</li>
                                <li><img src="/main-assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Budgets spiral out of control</li>
                                <li><img src="/main-assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Hidden costs appear mid-project
                                </li>
                                <li><img src="/main-assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Clients feel left in the dark</li>
                                <li><img src="/main-assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Legal and permitting risks create stress
                                </li>
                    
                            </ul>
                        </div>
                            <div className="about-grid-wrap">
                                <div className="icon">
                                    <img src="/main-assets/img/icon/about-grid-icon1-1.svg" alt="img" />
                                </div>
                                <div className="about-grid-details">
                                    <h4 className="title">Our Mission</h4>
                                    <p className="text">
                                      To deliver transparent, cost-efficient construction solutions that protect your investment and maximize value. </p>
                                </div>
                            </div>
                            <div className="about-grid-wrap">
                                <div className="icon">
                                    <img src="/main-assets/img/icon/about-grid-icon1-2.svg" alt="img" />
                                </div>
                                <div className="about-grid-details">
                                    <h4 className="title">Our Vision</h4>
                                    <p className="text"> To build with integrity, clarity, and long-term value at the core of every project.</p>
                                </div>
                            </div>
                            <div className="btn-group mt-60">
                                <Link href="/pages/innerpage/about" className="btn style3">
                                    Explore Our Company <i className="ri-arrow-right-up-line"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
