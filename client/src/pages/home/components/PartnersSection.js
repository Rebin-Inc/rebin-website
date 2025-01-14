import React from 'react';
import ateljee from '../../../assets/images/home/partners/ateljee.png';
import ugent from '../../../assets/images/home/partners/ugent.png';
import Rotterdam from '../../../assets/images/home/partners/port_of_Rotterdam.png';
import moorslede from '../../../assets/images/home/partners/moorslede.png';
import idverde from '../../../assets/images/home/partners/idverde.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PartnersSection = () => {
  const partners = [
    {
      name: 'Port of Rotterdam',
      src: Rotterdam,
    },
    {
      name: 'Moorslede',
      src: moorslede,
    },
    {
      name: 'Ugent',
      src: ugent,
    },
    {
      name: 'ateljee',
      src: ateljee,
    },
    {
      name: 'idverde',
      src: idverde,
    },
  ];

  const settings = {
    dots: false,
    slidesToShow: 4,
    arrows: false,
    autoplay: true,
    speed: 7000,
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
    <section className="mt-10 space-y-4 text-center">
      <div className="absolute left-0 -z-10 h-48 w-full min-w-max"></div>
      <p className="text-rebin-darkblue">Trusted by <span className='text-white py-1 px-2 bg-gradient rounded-md mx-1'>leading</span> organizations</p>
      <Slider {...settings}>
        {partners.map((_, index) => (
          <div
            key={index}
            className="slider-container"
          >
            <div className="flex h-14 justify-center items-center space-x-3">
              <img
                src={partners[index].src}
                alt={partners[index].name}
                className="my-auto h-4/6 align-middle opacity-60"
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default PartnersSection;
