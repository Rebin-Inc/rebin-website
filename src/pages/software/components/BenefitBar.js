import React from 'react'
import { Card, CardBody } from "@material-tailwind/react";

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

    return (
        <div className='grid grid-cols-1 md:bg-dotted-half-circle bg-no-repeat bg-center bg-contain mt-8 md:mt-28'>
            <div className='grid grid-cols-1 md:grid-cols-3 mx-auto lg:mx-36 gap-y-4'>
                <Card className='max-w-sm'>
                    <CardBody className="flex h-full items-center gap-4">
                        <div className="text-balance space-y-2 w-full">
                            <h4 className="mb-1 text-2xl font-bold">{data[0].title}</h4>
                            <p className="text-lg text-black">
                                {data[0].desc}
                            </p>
                        </div>
                    </CardBody>
                </Card>
                <Card className='md:col-start-3 max-w-sm'>
                    <CardBody className="flex h-full items-center gap-4">
                        <div className="text-balance space-y-2 w-full">
                            <h4 className="mb-1 text-2xl font-bold">{data[1].title}</h4>
                            <p className="text-lg text-black">
                                {data[1].desc}
                            </p>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-4  md:mt-36 mb-10 gap-y-4 md:gap-16 mx-auto'>
                <Card className='max-w-sm'>
                    <CardBody className="flex h-full items-center gap-4">
                        <div className="text-balance space-y-2 w-full">
                            <h4 className="mb-1 text-2xl font-bold">{data[2].title}</h4>
                            <p className="text-lg text-black">
                                {data[2].desc}
                            </p>
                        </div>
                    </CardBody>
                </Card>
                <Card className='md:col-start-3 max-w-sm'>
                    <CardBody className="flex h-full items-center gap-4">
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
    )
}

export default BenefitBar