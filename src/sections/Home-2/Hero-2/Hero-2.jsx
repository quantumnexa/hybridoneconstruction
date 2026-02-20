"use client";
import Slider from "react-slick";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import CircleTextTwo from "../../Common/CircleTextTwo";

const Hero = () => {

  const shape1Style = {
    backgroundImage: "url('/main-assets/img/shape/global-line-shape1.png')",
  };

  

 

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
      </div>
       
       
    </>
  );
};

export default Hero;
