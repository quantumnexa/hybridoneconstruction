'use client';
import Link from "next/link";
import Slider from "react-slick";

const Client = () => {
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
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className="client-area-1 home-two-five-client text-center client-space-extra bg-title overflow-hidden">
            <div className="container">
                <Slider {...settings} className="row global-carousel client-slider1">
                    <div className="col-lg-auto">
                        <div className="client-logo">
                            <Link href="/pages/homepage/home-1"><img src="/main-assets/img/client/brand-1-1.png" alt="img" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <div className="client-logo">
                            <Link href="/pages/homepage/home-1"><img src="/main-assets/img/client/brand-1-2.png" alt="img" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <div className="client-logo">
                            <Link href="/pages/homepage/home-1"><img src="/main-assets/img/client/brand-1-3.png" alt="img" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <div className="client-logo">
                            <Link href="/pages/homepage/home-1"><img src="/main-assets/img/client/brand-1-4.png" alt="img" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <div className="client-logo">
                            <Link href="/pages/homepage/home-1"><img src="/main-assets/img/client/brand-1-5.png" alt="img" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <div className="client-logo">
                            <Link href="/pages/homepage/home-1"><img src="/main-assets/img/client/brand-1-6.png" alt="img" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <div className="client-logo">
                            <Link href="/pages/homepage/home-1"><img src="/main-assets/img/client/brand-1-7.png" alt="img" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <div className="client-logo">
                            <Link href="/pages/homepage/home-1"><img src="/main-assets/img/client/brand-1-8.png" alt="img" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <div className="client-logo">
                            <Link href="/pages/homepage/home-1"><img src="/main-assets/img/client/brand-1-9.png" alt="img" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <div className="client-logo">
                            <Link href="/pages/homepage/home-1"><img src="/main-assets/img/client/brand-1-10.png" alt="img" /></Link>
                        </div>
                    </div>
                     <div className="col-lg-auto">
                        <div className="client-logo">
                            <Link href="/pages/homepage/home-1"><img src="/main-assets/img/client/brand-1-11.png" alt="img" /></Link>
                        </div>
                    </div>
                     <div className="col-lg-auto">
                        <div className="client-logo">
                            <Link href="/pages/homepage/home-1"><img src="/main-assets/img/client/brand-1-10.png" alt="img" /></Link>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Client;