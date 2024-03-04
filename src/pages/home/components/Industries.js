import React from "react";
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

const Industries = () => {
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

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div className="bg-gradient size-10 nextArrow my-auto" onClick={onClick}>
        <img src={ArrowRightWhite} alt="Next industry card" />
      </div>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;

    return (
      <div className="bg-gradient size-10 my-auto order-last" onClick={onClick}>
        <img src={ArrowLeftWhite} alt="Previous industry card" />
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 mt-28">
      <Slider {...settings} className="justify-stretch">
        {industries.map((_, index) => (
          <div
            key={index}
            className="max-w-xs p-5 rounded-xl border-rebin-blue hover:border-none bg-gradient-hover hover:text-white"
          >
            <img className="h-12 mb-12" src={industries[index].src} alt="" />
            <h3 className="text-xl font-semibold mb-4">
              {industries[index].industry}
            </h3>
            <h4 className="text-base font-light mb-6">
              {industries[index].summary}
            </h4>
          </div>
        ))}
      </Slider>
      {/* <Slider className="flex justify-center gap-x-10" {...settings}>
        {industries.map((_, index) => (
          <div
            key={index}
            className="flex flex-col max-w-xs p-5 items-start rounded-xl border-rebin-blue hover:border-none bg-gradient-hover hover:text-white"
          >
            <img className="h-12 mb-12" src={industries[index].src} alt="" />
            <h3 className="text-xl font-semibold mb-4">
              {industries[index].industry}
            </h3>
            <h4 className="text-base font-light mb-6">
              {industries[index].summary}
            </h4>
          </div>
        ))}
      </Slider> */}
    </section>
  );
};

export default Industries;
