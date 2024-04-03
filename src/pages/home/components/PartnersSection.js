import React from 'react';
import startItKBC from '../../../assets/images/home/partners/start_it_kbc.png';
import unizo from '../../../assets/images/home/partners/unizo.png';
import VLAIO from '../../../assets/images/home/partners/vlaio.png';
import voka from '../../../assets/images/home/partners/voka.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PartnersSection = () => {
  const partners = [
    {
      name: 'Start it KBC',
      src: startItKBC,
    },
    {
      name: 'Unizo',
      src: unizo,
    },
    {
      name: 'VLAIO',
      src: VLAIO,
    },
    {
      name: 'Voka',
      src: voka,
    },
  ];

  const settings = {
    dots: false,
    slidesToShow: 4,
    arrows: false,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
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
    <section className="mt-20 space-y-8 py-8 text-center">
      <div className="bg-rebin-grey absolute left-0 -z-10 h-48 w-full min-w-max"></div>
      <p className="text-slate-500">Trusted by the following partners</p>
      <Slider {...settings}>
        {partners.map((_, index) => (
          <div
            key={index}
            className="slider-container divide-rebin-darkblue border-l"
          >
            <div className="flex h-16 justify-center space-x-3">
              <img
                src={partners[index].src}
                alt={partners[index].name}
                className="my-auto h-5/6 align-middle"
              />
              <p className="my-auto text-lg font-medium">
                {' '}
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
