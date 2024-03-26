import React from "react";
import RebinRBlue from "../../../assets/images/Rebin_R_Blauw.svg";
import { Card, CardBody } from "@material-tailwind/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const WhyChooseUsCards = () => {

  const data = [
    {
      title: "Advanced software",
      description: "Discover the capabilities of our comprehensive software, ranging from optimal collection routes to insightful statisitcs.",
      rowStart: "row-start-1",
      colStart: "col-start-1",
      imagePosition: "right",
    },
    {
      title: "All asset types",
      description: "Experience the power of our versatile solution, turning all kinds of assets into smart ones.",
      rowStart: "row-start-1",
      colStart: "col-start-5",
      imagePosition: "left",
    },
    {
      title: "User-friendly",
      description: "Our software excels in its intuitive workflow, ensuring smooth adoption across any organization.",
      rowStart: "row-start-4",
      colStart: "col-start-1",
      imagePosition: "right",
    },
    {
      title: "Automated reports",
      description: "We provide valuable insights for optimizing asset control through data reports.",
      rowStart: "row-start-4",
      colStart: "col-start-5",
      imagePosition: "left",
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    customPaging: function (i) {
      return (
        <a href="/">
          <div className="bg-rebin-grey w-4 aspect-square rounded-full"></div>
        </a>
      );
    },
  };

  return (
    <div className="mt-16">
      <div className="hidden xl:grid grid-cols-7 grid-rows-5 bg-dotted-circle bg-center bg-no-repeat bg-contain p-16">
        {data.map((item, index) => (
          <Card key={index} shadow={false} className={`${item.colStart} ${item.rowStart} col-span-3 row-span-2 border shadow-around`}>
            <CardBody className="flex h-full items-center gap-6">
              <div className="text-balance space-y-2 w-full">
                <h4 className="mb-1 text-2xl font-bold text-rebin-darkblue">{item.title}</h4>
                <p className="text-lg text-black">
                  {item.description}
                </p>
              </div>
              <span className="order-first text-9xl font-bold text-gradient w-52 text-center">
                {index + 1 + "."}
              </span>
            </CardBody>
          </Card>
        ))}
        <Card className="row-start-3 col-start-4 w-fit h-fit m-auto">
          <img src={RebinRBlue} alt="The blue letter R from the Rebin logo" className="w-24 aspect-square" />
        </Card>
      </div>
      <div className="block xl:hidden space-y-16 bg-dotted-line bg-no-repeat bg-top">
        <Card className="row-start-3 col-start-4 w-fit h-fit m-auto">
          <img src={RebinRBlue} alt="The blue letter R from the Rebin logo" className="w-24 aspect-square" />
        </Card>
        <Slider {...settings} className="max-h-30">
          {
            data.map((item, index) => (
              <Card key={index} className="border">
                <CardBody className="flex min-h-64">
                  <div className="md:p-4 text-balance space-y-2 w-full my-auto">
                    <h4 className="mb-1 text-xl sm:text-4xl font-bold text-rebin-darkblue">{item.title}</h4>
                    <p className="text-sm md:text-2xl text-black">
                      {item.description}
                    </p>
                  </div>
                  <span className="order-first text-6xl md:text-9xl font-bold text-gradient w-36 text-center my-auto">
                    {index + 1 + "."}
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
