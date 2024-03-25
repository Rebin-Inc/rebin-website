import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowRightWhite from "../../../assets/images/Pijl_Rechts_Wit.svg";
import ArrowLeftWhite from "../../../assets/images/Pijl_Links_Wit.svg";

function Industries() {
  const industries = [
    {
      industry: "Bins",
      image: "bg-government-blue group-hover:bg-government-white",
      summary:
        "Prevent overflowing bins in both public and private sectors. Cut costs with efficient collection routes and strategic bin placement, supported by data.",
    },
    {
      industry: "Containers",
      image: "bg-collector-blue group-hover:bg-collector-white",
      summary:
        "Customized for private waste collectors, our solution allows for remote monitoring of containers, including textile and underground glass containers, and more.",
    },
    {
      industry: "Silos",
      image: "bg-park-blue group-hover:bg-park-white",
      summary:
        "Accurate fill-level data enables precise scheduling of deliveries and material transfers in silos for manufacturing, agriculture, and beyond.",
    },
    {
      industry: "Liquid tanks",
      image: "bg-airport-blue group-hover:bg-airport-white",
      summary:
        "Map fill levels of various reservoirs, from household cisterns to large tanks in residential complexes. Save on costs by optimizing liquid collection, including oil.",
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
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
          <div>
            <div
              key={index}
              className="mx-auto max-w-xs max-h-sm p-5 rounded-xl border-rebin-blue border-2 hover:border-white bg-gradient-hover hover:text-white group"
            >
              <div
                className={industries[index].image}
                style={{
                  height: 50,
                  width: 50,
                  marginBottom: 50,
                }}
              ></div>
              <h3 className="text-xl font-semibold mb-4 max-w-xs">
                {industries[index].industry}
              </h3>
              <h4 className=" text-base font-light mb-6 max-w-xs ">
                {industries[index].summary}
              </h4>
            </div>
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
