import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowRightWhite from "../../../assets/images/Pijl_Rechts_Wit.svg";
import ArrowLeftWhite from "../../../assets/images/Pijl_Links_Wit.svg";
import Bin from "../../../assets/images/industries/bin.svg"
import BinWhite from "../../../assets/images/industries/bin_white.svg"
import Container from "../../../assets/images/industries/container.svg"
import ContainerWhite from "../../../assets/images/industries/container_white.svg"
import Silo from "../../../assets/images/industries/silo.svg"
import SiloWhite from "../../../assets/images/industries/silo_white.svg"
import Liquids from "../../../assets/images/industries/liquids.svg"
import LiquidsWhite from "../../../assets/images/industries/liquids_white.svg"

function Industries() {
  const industries = [
    {
      name: "Bins",
      image: Bin,
      imageWhite: BinWhite,
      summary:
        "Prevent overflowing bins in both public and private sectors. Cut costs with efficient collection routes and strategic bin placement, supported by data.",
    },
    {
      name: "Containers",
      image: Container,
      imageWhite: ContainerWhite,
      summary:
        "Customized for private waste collectors, our solution allows for remote monitoring of containers, including textile and underground glass containers, and more.",
    },
    {
      name: "Silos",
      image: Silo,
      imageWhite: SiloWhite,
      summary:
        "Accurate fill-level data enables precise scheduling of deliveries and material transfers in silos for manufacturing, agriculture, and beyond.",
    },
    {
      name: "Liquid tanks",
      image: Liquids,
      imageWhite: LiquidsWhite,
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
    prevArrow: false,
    nextArrow: false,
    arrows: false,
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

  const [activeTab, setActiveTab] = React.useState(null);

  return (
    <div className="slider-container mt-16">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {industries.map((industry, index) => (
          <div key={index}>
            <div

              className="mx-auto max-w-xs max-h-sm p-5 rounded-xl border-rebin-blue border-2 hover:border-white bg-gradient-hover hover:text-white group"
              onMouseOver={() => setActiveTab(index)} onMouseOut={() => setActiveTab(null)}
            >
              <div
                style={{
                  height: 50,
                  width: 50,
                  marginBottom: 50,
                  backgroundRepeat: "no-repeat",
                  backgroundImage: activeTab === index ? `url(${industry.imageWhite})` : `url(${industry.image})`,
                }}

              ></div>
              <h3 className="text-xl font-semibold mb-4 max-w-xs">
                {industry.name}
              </h3>
              <h4 className=" text-base font-light mb-6 max-w-xs ">
                {industry.summary}
              </h4>
            </div>
          </div>
        ))}
      </Slider>
      <div className="text-center space-x-6 mt-14">
        <button
          className="button bg-gradient w-10 aspect-square rounded-lg transform hover:scale-95 transition-transform active:scale-90"
          onClick={previous}
        >
          <img src={ArrowLeftWhite} alt="Arrow to select previous industry" />
        </button>
        <button
          className="button bg-gradient w-10 aspect-square rounded-lg transform hover:scale-95 transition-transform active:scale-90"
          onClick={next}
        >
          <img src={ArrowRightWhite} alt="Arrow to select next industry" />
        </button>
      </div>
    </div>
  );
}

export default Industries;
