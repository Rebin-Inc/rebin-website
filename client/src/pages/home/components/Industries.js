import React, { useLayoutEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowRightWhite from '../../../assets/images/Pijl_Rechts_Wit.svg';
import ArrowLeftWhite from '../../../assets/images/Pijl_Links_Wit.svg';
import Bin from '../../../assets/images/home/industries/bin.png';
import BinWhite from '../../../assets/images/home/industries/bin_white.png';
import Container from '../../../assets/images/home/industries/container.png';
import ContainerWhite from '../../../assets/images/home/industries/container_white.png';
import Silo from '../../../assets/images/home/industries/silo.png';
import SiloWhite from '../../../assets/images/home/industries/silo_white.png';
import Liquids from '../../../assets/images/home/industries/liquids.png';
import LiquidsWhite from '../../../assets/images/home/industries/liquids_white.png';

function Industries() {
  const industries = [
    {
      name: 'Bins',
      image: Bin,
      imageWhite: BinWhite,
      summary:
        'Prevent overflowing bins in both public and private sectors. Cut costs with efficient collection routes and strategic bin placement, supported by data.',
    },
    {
      name: 'Containers',
      image: Container,
      imageWhite: ContainerWhite,
      summary:
        'Customized for private waste collectors, our solution allows for remote monitoring of containers, including textile and underground glass containers, and more.',
    },
    {
      name: 'Silos',
      image: Silo,
      imageWhite: SiloWhite,
      summary:
        'Accurate fill-level data enables precise scheduling of deliveries and material transfers in silos for manufacturing, agriculture, and beyond.',
    },
    {
      name: 'Liquid tanks',
      image: Liquids,
      imageWhite: LiquidsWhite,
      summary:
        'Map fill levels of various reservoirs, from household cisterns to large tanks in residential complexes. Save on costs by optimizing liquid collection, including oil.',
    },
  ];

  useLayoutEffect(() => {
    /* load white icons at page load */
    const images = industries.map((industry) => industry.imageWhite);
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  });

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
              className="max-h-sm border-rebin-blue bg-gradient-hover group mx-auto max-w-xs rounded-xl border-2 p-5 hover:border-white hover:text-white"
              onMouseOver={() => setActiveTab(index)}
              onMouseOut={() => setActiveTab(null)}
            >
              <div
                style={{
                  height: 50,
                  width: 50,
                  marginBottom: 50,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  backgroundImage:
                    activeTab === index
                      ? `url(${industry.imageWhite})`
                      : `url(${industry.image})`,
                }}
              ></div>
              <h3 className="mb-4 max-w-xs text-xl font-semibold">
                {industry.name}
              </h3>
              <h4 className=" mb-6 max-w-xs text-base font-light ">
                {industry.summary}
              </h4>
            </div>
          </div>
        ))}
      </Slider>
      <div className="mt-14 space-x-6 text-center">
        <button
          className="button bg-gradient aspect-square w-10 transform rounded-lg transition-transform hover:scale-95 active:scale-90"
          onClick={previous}
        >
          <img src={ArrowLeftWhite} alt="Arrow to select previous industry" />
        </button>
        <button
          className="button bg-gradient aspect-square w-10 transform rounded-lg transition-transform hover:scale-95 active:scale-90"
          onClick={next}
        >
          <img src={ArrowRightWhite} alt="Arrow to select next industry" />
        </button>
      </div>
    </div>
  );
}

export default Industries;
