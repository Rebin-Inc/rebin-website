import React from "react";
import startItKBC from "../../../assets/images/partners/start-it-kbc.svg";
import unizo from "../../../assets/images/partners/unizo.svg";
import VLAIO from "../../../assets/images/partners/VLAIO.svg";
import voka from "../../../assets/images/partners/voka.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PartnersSection = () => {
  const partners = [
    {
      name: "Start it KBC",
      src: startItKBC,
    },
    {
      name: "Unizo",
      src: unizo,
    },
    {
      name: "VLAIO",
      src: VLAIO,
    },
    {
      name: "Voka",
      src: voka,
    },
  ];

  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-rebin-grey text-center py-8 space-y-6 lg:px-36">
      <p className=" text-slate-500">Trusted by the following partners</p>
      <Slider {...settings}>
        {partners.map((_, index) => (
          <div
            key={index}
            className="slider-container border-l divide-rebin-darkblue"
          >
            <div className="flex space-x-3 h-16 justify-center">
              <img
                src={partners[index].src}
                alt={partners[index].name}
                className="h-5/6 align-middle my-auto"
              />
              <p className="my-auto font-medium text-lg">
                {" "}
                {partners[index].name}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default PartnersSection;
