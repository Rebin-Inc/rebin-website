import React from 'react';
import { Card, CardBody } from '@material-tailwind/react';
import RebinRBlue from '../../../assets/images/Rebin_R_Blauw.png';
import Slider from 'react-slick';

const BenefitBar = () => {
  const data = [
    {
      title: 'Cut operational costs',
      desc: ' streamline your asset management processes and cut collection costs.',
    },
    {
      title: 'Improve processes',
      desc: 'Real-time data allows for more efficient allocation of assets, personnel, and transportation.',
    },
    {
      title: 'Understand assets',
      desc: 'Gain insights into how often assets are used and act accordingly.',
    },
    {
      title: 'Legislation complient',
      desc: 'Meet the latest regulations effortlessly through accessible data from the Rebin platform.',
    },
  ];

  const settings = {
    dots: true,
    prevArrow: false,
    nextArrow: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    customPaging: function (i) {
      return (
        <a href="/">
          <div className="bg-rebin-grey aspect-square w-4 rounded-full"></div>
        </a>
      );
    },
  };

  return (
    <div>
      {/* wide screen */}
      <div className="mt-8 hidden grid-cols-1 bg-dotted-half-circle bg-contain bg-center bg-no-repeat md:mt-28 xl:grid">
        <div className="mx-auto grid grid-cols-1 gap-y-4 md:grid-cols-3 lg:mx-36">
          <Card className="max-w-sm">
            <CardBody className="flex h-full gap-4 p-4">
              <div className="w-full space-y-2 text-balance">
                <h4 className="mb-1 text-2xl font-bold">{data[0].title}</h4>
                <p className="text-lg text-black">{data[0].desc}</p>
              </div>
            </CardBody>
          </Card>
          <Card className="max-w-sm md:col-start-3">
            <CardBody className="flex h-full items-center gap-4 p-4">
              <div className="w-full space-y-2 text-balance">
                <h4 className="mb-1 text-2xl font-bold">{data[1].title}</h4>
                <p className="text-lg text-black">{data[1].desc}</p>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="mx-auto mb-16 ml-6 mt-4 grid grid-cols-1 gap-y-4 md:mt-36 md:grid-cols-3 md:gap-16">
          <Card className="max-w-sm">
            <CardBody className="flex h-full items-center gap-4 p-4">
              <div className="w-full space-y-2 text-balance">
                <h4 className="mb-1 text-2xl font-bold">{data[2].title}</h4>
                <p className="text-lg text-black">{data[2].desc}</p>
              </div>
            </CardBody>
          </Card>
          <div className="flex align-middle"></div>
          <Card className="max-w-sm md:col-start-3">
            <CardBody className="flex h-full items-center gap-4 p-4">
              <div className="w-full space-y-2 text-balance">
                <h4 className="mb-1 text-2xl font-bold">{data[3].title}</h4>
                <p className="text-lg text-black">{data[3].desc}</p>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      {/* mobile screen */}
      <div className="mt-10 block space-y-16 bg-dotted-line bg-top bg-no-repeat xl:hidden">
        <Card className="col-start-4 row-start-3 m-auto h-fit w-fit p-4">
          <img
            src={RebinRBlue}
            alt="The blue letter R from the Rebin logo"
            className="aspect-square h-16"
          />
        </Card>
        <Slider {...settings} className="max-h-30">
          {data.map((item, index) => (
            <Card key={index} className="border">
              <CardBody className="flex min-h-44">
                <div className="my-auto w-full space-y-2 text-balance md:p-4">
                  <h4 className="text-rebin-darkblue mb-1 text-xl font-bold sm:text-4xl">
                    {item.title}
                  </h4>
                  <p className="text-sm text-black md:text-2xl">{item.desc}</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BenefitBar;
