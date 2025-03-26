import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AMKLogo from "../assets/image/logo/AMK (P).png";

import React from "react";
import Slider from "react-slick";

import Bg1 from "../assets/image/bg-amk/p1.webp"
import Bg2 from "../assets/image/bg-amk/p2.webp"
import Bg3 from "../assets/image/bg-amk/p3.webp"
import Bg4 from "../assets/image/bg-amk/p4.webp"
import Bg5 from "../assets/image/bg-amk/p5.webp"

import Bg6 from "../assets/image/bg-amk/p6.webp"
import Bg7 from "../assets/image/bg-amk/p7.webp"
import Bg8 from "../assets/image/bg-amk/p8.webp"
import Bg9 from "../assets/image/bg-amk/p9.webp"
import Bg10 from "../assets/image/bg-amk/p10.webp"

import Bg11 from "../assets/image/bg-amk/p11.webp"
import Bg12 from "../assets/image/bg-amk/p12.webp"
import Bg13 from "../assets/image/bg-amk/p13.webp"
import Bg14 from "../assets/image/bg-amk/p14.webp"
import Bg15 from "../assets/image/bg-amk/p15.webp"

export default function Cover(){
    const slide1 = {
        infinite: true,
        slidesToShow: 4.5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 0,
        cssEase: "linear",
        centerMode: true,
        centerPadding: "10px",
        arrow: false,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2.5,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 380,
              settings: {
                slidesToShow: 1.5,
              }
            },
        ]
      };

    const slide2 = {
        infinite: true,
        slidesToShow: 4.5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 0,
        cssEase: "linear",
        centerMode: true,
        centerPadding: "10px",
        arrow: false,
        rtl: true,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2.5,
              }
            },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 2,
                }
            },
            {
                breakpoint: 380,
                settings: {
                  slidesToShow: 1.5,
                }
            },
        ]
      };
      

    return(
        <div className="cover" id="cover">
            <div className="main-container">
                <div className="slider-container">
                    <Slider {...slide1}>
                        <div>
                            <img src={Bg1} alt="" />
                        </div>
                        <div>
                            <img src={Bg2} alt="" />
                        </div>
                        <div>
                            <img src={Bg3} alt="" />
                        </div>
                        <div>
                            <img src={Bg4} alt="" />
                        </div>
                        <div>
                            <img src={Bg5} alt="" />
                        </div>
                    </Slider>
                </div>
                <div className="slider-container">
                    <div className="content-container">
                        <div className="content-center">
                            <div className="img-container">
                                <img src={AMKLogo} alt="" />
                            </div>
                            <p>PT Abdi Media Kreatif</p>
                        </div>
                    </div>
                </div>
                <div className="slider-container">
                    <Slider {...slide2}>
                        <div>
                            <img src={Bg11} alt="" />
                        </div>
                        <div>
                            <img src={Bg12} alt="" />
                        </div>
                        <div>
                            <img src={Bg13} alt="" />
                        </div>
                        <div>
                            <img src={Bg14} alt="" />
                        </div>
                        <div>
                            <img src={Bg15} alt="" />
                        </div>
                    </Slider>
                </div>
                <div className="slider-container">
                    <Slider {...slide1}>
                        <div>
                            <img src={Bg6} alt="" />
                        </div>
                        <div>
                            <img src={Bg7} alt="" />
                        </div>
                        <div>
                            <img src={Bg8} alt="" />
                        </div>
                        <div>
                            <img src={Bg9} alt="" />
                        </div>
                        <div>
                            <img src={Bg10} alt="" />
                        </div>
                    </Slider>
                </div>
                <div className="slider-container">
                    <Slider {...slide2}>
                        <div>
                            <img src={Bg11} alt="" />
                        </div>
                        <div>
                            <img src={Bg12} alt="" />
                        </div>
                        <div>
                            <img src={Bg13} alt="" />
                        </div>
                        <div>
                            <img src={Bg14} alt="" />
                        </div>
                        <div>
                            <img src={Bg15} alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}