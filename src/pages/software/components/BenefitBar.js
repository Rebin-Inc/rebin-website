import React from 'react'
import { Card, CardBody } from "@material-tailwind/react";
import RebinRBlue from "../../../assets/images/Rebin_R_Blauw.svg";
import Slider from "react-slick";

const BenefitBar = () => {
    const data = [
        {
            title: "Cut operational costs",
            desc: " streamline your asset management processes and cut collection costs."
        },
        {
            title: "Improve processes",
            desc: "Real-time data allows for more efficient allocation of assets, personnel, and transportation."
        },
        {
            title: "Understand assets",
            desc: "Gain insights into how often assets are used and act accordingly."
        },
        {
            title: "Legislation complient",
            desc: "Meet the latest regulations effortlessly through accessible data from the Rebin platform."
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
        <div>
            {/* wide screen */}
            <div className='hidden xl:grid grid-cols-1 bg-dotted-half-circle bg-no-repeat bg-center bg-contain mt-8 md:mt-28'>
                <div className='grid grid-cols-1 md:grid-cols-3 mx-auto lg:mx-36 gap-y-4'>
                    <Card className='max-w-sm'>
                        <CardBody className="flex h-full gap-4 p-4">
                            <div className="text-balance space-y-2 w-full">
                                <h4 className="mb-1 text-2xl font-bold">{data[0].title}</h4>
                                <p className="text-lg text-black">
                                    {data[0].desc}
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className='md:col-start-3 max-w-sm'>
                        <CardBody className="flex h-full items-center gap-4 p-4">
                            <div className="text-balance space-y-2 w-full">
                                <h4 className="mb-1 text-2xl font-bold">{data[1].title}</h4>
                                <p className="text-lg text-black">
                                    {data[1].desc}
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 mt-4 ml-6 md:mt-36 -mb-16 gap-y-4 md:gap-16 mx-auto'>
                    <Card className='max-w-sm'>
                        <CardBody className="flex h-full items-center gap-4 p-4">
                            <div className="text-balance space-y-2 w-full">
                                <h4 className="mb-1 text-2xl font-bold">{data[2].title}</h4>
                                <p className="text-lg text-black">
                                    {data[2].desc}
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                    <div className='flex align-middle'>
                        
                    </div>
                    <Card className='md:col-start-3 max-w-sm'>
                        <CardBody className="flex h-full items-center gap-4 p-4">
                            <div className="text-balance space-y-2 w-full">
                                <h4 className="mb-1 text-2xl font-bold">{data[3].title}</h4>
                                <p className="text-lg text-black">
                                    {data[3].desc}
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
            {/* mobile screen */}
            <div className="block xl:hidden space-y-16 bg-dotted-line bg-no-repeat bg-top mt-10">
                <Card className="row-start-3 col-start-4 w-fit h-fit m-auto">
                    <img src={RebinRBlue} alt="The blue letter R from the Rebin logo" className="w-24 aspect-square" />
                </Card>
                <Slider {...settings} className="max-h-30">
                    {
                        data.map((item, index) => (
                            <Card key={index} className="border">
                                <CardBody className="flex min-h-44">
                                    <div className="md:p-4 text-balance space-y-2 w-full my-auto">
                                        <h4 className="mb-1 text-xl sm:text-4xl font-bold text-rebin-darkblue">{item.title}</h4>
                                        <p className="text-sm md:text-2xl text-black">
                                            {item.desc}
                                        </p>
                                    </div>
                                </CardBody>
                            </Card>
                        ))}
                </Slider>
            </div>
        </div>

    )
}

export default BenefitBar