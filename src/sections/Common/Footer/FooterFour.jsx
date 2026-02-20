import Link from "next/link";

const FooterFour = () => {
    return (
        <div>
            <footer className="footer-wrapper footer-layout3 background-image" style={{ backgroundImage: "url('/main-assets/img/bg/footer-bg1-1.png')" }}>
                <div className="container">
                    <div className="widget-area">
                        <div className="row justify-content-between">
                            <div className="col-md-6 col-xl-3">
                                <div className="widget widget-about footer-widget">
                                    <h3 className="widget_title">About Company</h3>
                                    <p className="about-text">
                                        Designed for experienced, cost focused clients who want full control. You manage subcontractors and payments directly.
                                    </p>
                                    <h4 className="about-year">Since 2000</h4>
                                   
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget widget_nav_menu footer-widget">
                                    <h3 className="widget_title">Useful Links</h3>
                                    <div className="menu-all-pages-container grid-style">
                                        <ul className="menu">
                                            <li><Link href="/about">About Us</Link></li>
                                            <li><Link href="/#service-sec">Services</Link></li>
                                            <li><Link href="/contact">Contact Us</Link></li>
            
                                        </ul>
                                     
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget footer-widget widget-contact">
                                    <h3 className="widget_title">Office Address</h3>
                                    <p className="contact-text">
                                       7322 Southwest Freeway,
Arena Tower One, Suite 140
Houston TX 77074
                                    </p>
                                    <h3 className="widget_title">Email Address</h3>
                                    <p className="footer-text">
                                        <Link href="mailto:fk@hybridoneconstruction.com">fk@hybridoneconstruction.com</Link>
                                    </p>
                                    <p className="footer-text">
                                        <Link href="mailto:faisal@hybridoneconstruction.com">faisal@hybridoneconstruction.com</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget footer-widget">
                                    <h3 className="widget_title">Phone Number</h3>
                                    <p className="footer-text">
                                        <Link href="tel:121551579266">+1 281 409 5882</Link>
                                    </p>
                                    <h3 className="widget_title">Telephone</h3>
                                    <p className="footer-text">
                                        <Link href="tel:121551579266">+2 81 831 1880</Link>
                                    </p>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright-wrap">
                        <div className="row gy-3 justify-content-md-between justify-content-center">
                            <div className="col-auto align-self-center">
                                <p className="copyright-text text-center">
                                    © 2019, Hybrid One Construction
                                </p>
                            </div>
                            <div className="col-auto">
                                <div className="footer-links">
                                    <Link href="/pages/innerpage/contact">Terms & Condition</Link>
                                    <Link href="/pages/innerpage/contact">Privacy Policy</Link>
                                    <Link href="/pages/innerpage/contact">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default FooterFour; 