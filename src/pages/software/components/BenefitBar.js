import React from 'react'
import RepointOnLaptop from "../../../assets/images/software/repoint_on_laptop.png";

const BenefitBar = () => {
    const data = [
        {
            title: "Easy to use",
            desc: "We provide customized solutions that meet our clients' unique needs and "
        },
        {
            title: "Better planning",
            desc: "We provide customized solutions that meet our clients' unique needs and "
        },
        {
            title: "Implementation bins without sensor",
            desc: "We provide customized solutions that meet our clients' unique needs and "
        },
        {
            title: "Hotspots litter and fly-tipping",
            desc: "We provide customized solutions that meet our clients' unique needs and "
        },
    ]

    return (
        <div className='grid grid-cols-1 lg:grid-cols-5 bg-rebin-grey rounded-xl p-4 mt-12'>
            <div className='p-6 col-span-3 my-auto order-last lg:order-first'>
                <ul className='space-y-6'>
                    {data.map(({ title, desc }, index) => (
                        <li key={index} className='flex space-x-6'>
                            <div className='bg-gradient my-auto h-12 aspect-square rounded-lg grid place-content-center'>
                                <span className='text-white text-3xl font-bold'>{index + 1}</span>
                            </div>
                            <div className='space-y-2'>
                                <h3 className='text-rebin-darkblue font-bold text-2xl'>{title}</h3>
                                <p className='max-w-sm'>{desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <img className='col-span-2 w-full lg:h-full' src={RepointOnLaptop} alt="Our waste management Repoint running on a laptop" />
        </div>
    )
}

export default BenefitBar