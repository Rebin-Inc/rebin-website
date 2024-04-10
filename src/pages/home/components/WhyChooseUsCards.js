import React from 'react';
import RebinRBlue from '../../../assets/images/Rebin_R_Blauw.png';
import { Card, CardBody } from '@material-tailwind/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WhyChooseUsCards = () => {
  const data = [
    {
      title: 'Advanced software',
      description:
        'Discover the capabilities of our comprehensive software, ranging from optimal collection routes to insightful statisitcs.',
      rowStart: 'row-start-1',
      colStart: 'col-start-1',
      imagePosition: 'right',
    },
    {
      title: 'All asset types',
      description:
        'Experience the power of our versatile solution, turning all kinds of assets into smart ones.',
      rowStart: 'row-start-1',
      colStart: 'col-start-5',
      imagePosition: 'left',
    },
    {
      title: 'User-friendly',
      description:
        'Our software excels in its intuitive workflow, ensuring smooth adoption across any organization.',
      rowStart: 'row-start-4',
      colStart: 'col-start-1',
      imagePosition: 'right',
    },
    {
      title: 'Automated reports',
      description:
        'We provide valuable insights for optimizing asset control through data reports.',
      rowStart: 'row-start-4',
      colStart: 'col-start-5',
      imagePosition: 'left',
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
    <div className="mt-16">
      <div className="hidden grid-cols-7 grid-rows-5 bg-dotted-circle bg-contain bg-center bg-no-repeat p-16 xl:grid">
        {data.map((item, index) => (
          <Card
            key={index}
            shadow={false}
            className={`${item.colStart} ${item.rowStart} col-span-3 row-span-2 border shadow-around`}
          >
            <CardBody className="flex h-full items-center gap-6">
              <div className="w-full space-y-2 text-balance">
                <h4 className="text-rebin-darkblue mb-1 text-2xl font-bold">
                  {item.title}
                </h4>
                <p className="text-lg text-black">{item.description}</p>
              </div>
              <span className="text-gradient order-first w-52 text-center text-9xl font-bold">
                {index + 1 + '.'}
              </span>
            </CardBody>
          </Card>
        ))}
        <Card className="col-start-4 row-start-3 mx-8 my-6 rounded-xl p-4">
          <img
            src={RebinRBlue}
            alt="The blue letter R from the Rebin logo"
            className="aspect-square h-16"
          />
        </Card>
      </div>
      {/* Slider for small screens */}
      <div className="block space-y-16 bg-dotted-line bg-top bg-no-repeat xl:hidden">
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
              <CardBody className="flex min-h-64">
                <div className="my-auto w-full space-y-2 text-balance md:p-4">
                  <h4 className="text-rebin-darkblue mb-1 text-xl font-bold sm:text-4xl">
                    {item.title}
                  </h4>
                  <p className="text-sm text-black md:text-2xl">
                    {item.description}
                  </p>
                </div>
                <span className="text-gradient order-first my-auto w-36 text-center text-6xl font-bold md:text-9xl">
                  {index + 1 + '.'}
                </span>
              </CardBody>
            </Card>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WhyChooseUsCards;
