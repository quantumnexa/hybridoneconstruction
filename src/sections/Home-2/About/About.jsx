'use client';
import Link from "next/link";
import CountUp from "react-countup";
const About = () => {
    return (
        <div className="about-area-2 space overflow-hidden shape-mockup-wrap" id="about-sec">
            <div className="section-animation-shape1-1 shape-mockup animation-infinite background-image" data-top="0" style={{ backgroundImage: "url('/main-assets/img/shape/global-line-shape1.png')", top: '0px' }}>
            </div>
            <div className="section-animation-shape1-2 shape-mockup animation-infinite background-image" style={{ backgroundImage: "url('/main-assets/img/shape/global-line-shape2.png')", bottom: '0px' }}>
            </div>
            <div className="container">
                <div className="row gx-60 align-items-center flex-row-reverse">
                    <div className="col-xl-6">
                        <div className="about-thumb2 mb-60 mb-xl-0">
                            <div className="about-img-1">
                                <img src="/main-assets/img/normal/about_2-1.png" alt="img" />
                            </div>
                            <div className="about-counter-wrap style2 jump-reverse">
                                <div className="about-counter-wrap-bg"><img src="/main-assets/img/normal/about_shape_2-2.png" alt="img" /></div>
                                <div className="about-counter-icon"><img src="/main-assets/img/hero/hero_experience_wrap_icon_1_1.png" alt="img" /></div>
                                <h3 className="about-counter-number"><span className="counter-number"><CountUp start={0} end={25} /></span>+</h3>
                                <p className="about-counter-text">Business Experience</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="title-area mb-25">
                            <span className="sub-title"><img src="/main-assets/img/icon/section-subtitle-icon.svg" alt="img" />BUILD WITHOUT FEAR</span>
                            <h2 className="sec-title">Construction in Houston can feel overwhelming.</h2>
                            <p className="sec-text">Most property owners don’t lose money because construction is expensive
 they lose money because they don’t fully understand the process.
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
                         <div className="title-area mb-25">
                        <h2 className="sec-title sec-title--half">That's where we come in</h2>
                           <p className="sec-text">Most property owners don’t lose money because construction is expensive
 they lose money because they don’t fully understand the process.</p>
 </div>
                        <div className="about-grid-wrap">
                            <div className="icon">
                                <img src="/main-assets/img/icon/why-icon1-5.svg" alt="img" />
                            </div>
                            <div className="about-grid-details">
                                <h4 className="title">25+ Years of Market Experience</h4>
                                <p className="text">We understand Houston’s ground realities, not just theory. </p>
                            </div>
                        </div>
                        <div className="about-grid-wrap">
                            <div className="icon">
                                <img src="/main-assets/img/icon/why-icon1-4.svg" alt="img" />
                            </div>
                            <div className="about-grid-details">
                                <h4 className="title">You Stay Protected & In Control</h4>
                                <p className="text">You make the decisions, while we guide, protect, and ensure every step is handled correctly and transparently.</p>
                            </div>
                        </div>
                         <div className="about-grid-wrap">
                            <div className="icon">
                                <img src="/main-assets/img/icon/why-icon1-6.svg" alt="img" />
                            </div>
                            <div className="about-grid-details">
                                <h4 className="title">Smart Cost Strategy</h4>
                                <p className="text">We help clients save up to 15% on total construction costs without compromising quality.</p>
                            </div>
                        </div>
                        <div className="btn-group mt-60">
                            <Link href="/pages/innerpage/about" className="btn style3"> Get A Quote <i className="ri-arrow-right-up-line"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
