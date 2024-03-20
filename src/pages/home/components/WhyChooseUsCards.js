import React from "react";
import RebinRBlue from "../../../assets/images/Rebin_R_Blauw.svg";
import { Card, CardBody } from "@material-tailwind/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Support from "../../../assets/images/whyChooseUs/support.jpg";
import Sensor from "../../../assets/images/whyChooseUs/sensor.jpg";
import Dashboard from "../../../assets/images/whyChooseUs/dashboard.jpg";

const WhyChooseUsCards = () => {

  const data = [
    {
      title: "24/7 support",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, animi placeat natus repellendus ducimus",
      image: Support,
      rowStart: "row-start-1",
      colStart: "col-start-1",
      imagePosition: "right",
    },
    {
      title: "World's best sensor",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, animi placeat natus repellendus ducimus",
      image: Sensor,
      rowStart: "row-start-1",
      colStart: "col-start-5",
      imagePosition: "left",
    },
    {
      title: "User-friendly",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, animi placeat natus repellendus ducimus",
      image: Dashboard,
      rowStart: "row-start-4",
      colStart: "col-start-1",
      imagePosition: "right",
    },
    {
      title: "100% Belgium made",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, animi placeat natus repellendus ducimus",
      image: Support,
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
            <CardBody className="flex h-full items-center gap-4">
              <div className="text-balance space-y-2 w-full">
                <h4 className="mb-1 text-2xl font-bold">{item.title}</h4>
                <p className="text-lg text-black">
                  {item.description}
                </p>
              </div>
              <img
                src={item.image}
                alt=""
                className={`object-cover rounded-xl w-36 ${item.imagePosition === "right" ? "order-last" : "order-first"}`}
              />
            </CardBody>
          </Card>
        ))}
        <Card className="row-start-3 col-start-4 w-fit h-fit m-auto">
          <img src={RebinRBlue} alt="" className="w-24 aspect-square" />
        </Card>
      </div>
      <div className="block xl:hidden space-y-16 bg-dotted-line bg-no-repeat bg-top">
        <Card className="row-start-3 col-start-4 w-fit h-fit m-auto">
          <img src={RebinRBlue} alt="" className="w-24 aspect-square" />
        </Card>
        <Slider {...settings} className="shadow-around rounded-lg max-h-30">
          {
            data.map((item, index) => (
              <Card key={index} className="border">
                <CardBody className="flex h-64">
                  <div className="pr-4 md:p-4 text-balance space-y-2 w-full">
                    <h4 className="mb-1 text-2xl font-bold">{item.title}</h4>
                    <p className="text-lg text-black line-clamp-4">
                      {item.description}
                    </p>
                  </div>
                  <img
                    src={item.image}
                    alt=""
                    className="object-cover rounded-xl w-36"
                  />
                </CardBody>
              </Card>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default WhyChooseUsCards;
