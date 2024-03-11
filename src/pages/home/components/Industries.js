import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import government from "../../../assets/images/Industries/government.svg";
import collector from "../../../assets/images/Industries/collector.svg";
import park from "../../../assets/images/Industries/park.svg";
import airport from "../../../assets/images/Industries/airport.svg";
import glass from "../../../assets/images/Industries/glass.svg";
import ArrowRightWhite from "../../../assets/images/Pijl_Rechts_Wit.svg";
import ArrowLeftWhite from "../../../assets/images/Pijl_Links_Wit.svg";

function Industries() {
  const industries = [
    {
      industry: "Local governments",
      src: government,
      summary:
        "We provide customized solutions that meet our clients' unique needs and help them succeed in an increasingly digital world.",
    },
    {
      industry: "Private waste collectors",
      src: collector,
      summary:
        "We provide customized solutions that meet our clients' unique needs and help them succeed in an increasingly digital world.",
    },
    {
      industry: "Theme parks",
      src: park,
      summary:
        "We provide customized solutions that meet our clients' unique needs and help them succeed in an increasingly digital world.",
    },
    {
      industry: "Airports",
      src: airport,
      summary:
        "We provide customized solutions that meet our clients' unique needs and help them succeed in an increasingly digital world.",
    },
    {
      industry: "Glass containers",
      src: glass,
      summary:
        "We provide customized solutions that meet our clients' unique needs and help them succeed in an increasingly digital world.",
    },
  ];

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToShow: 0,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container mt-16">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {industries.map((_, index) => (
          <div
            key={index}
            className="max-w-xs max-h-sm p-5 rounded-xl border-rebin-blue hover:border-none bg-gradient-hover hover:text-white"
          >
            <img className="h-12 mb-12" src={industries[index].src} alt="" />
            <h3 className="text-xl font-semibold mb-4 max-w-xs">
              {industries[index].industry}
            </h3>
            <h4 className="text-base font-light mb-6 max-w-xs ">
              {industries[index].summary}
            </h4>
          </div>
        ))}
      </Slider>
      <div className="text-center space-x-6 mt-14">
        <button
          className="button bg-gradient w-10 aspect-square rounded-lg"
          onClick={previous}
        >
          <img src={ArrowLeftWhite} alt="Previous industry" />
        </button>
        <button
          className="button bg-gradient w-10 aspect-square rounded-lg"
          onClick={next}
        >
          <img src={ArrowRightWhite} alt="Next industry" />
        </button>
      </div>
    </div>
  );
}

export default Industries;
