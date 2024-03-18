import React from 'react'
import Sensor3 from "../../../assets/images/sensor/sensor3.png";

const SpecificationBar = () => {
    const specs = [
        {
            title: 'Dimensions',
            value: '68 x 35 x 35 mm'
        },
        {
            title: 'Connectivity',
            value: 'Sigfox, LoRa'
        },
        {
            title: 'T° resistance',
            value: '-40 °C to 90 °C'
        },
        {
            title: 'Detection range',
            value: '0 - 500 cm'
        },
        {
            title: 'Expected battery life',
            value: '5+ years'
        },
        {
            title: 'Configurable intervals',
            value: 'Yes'
        },
        {
            title: 'Over-the-air updates',
            value: 'Yes'
        },
        {
            title: 'Weight (incl. battery)',
            value: '185 g'
        },
        {
            title: 'T° measurement',
            value: 'Yes'
        },
        {
            title: 'Casing material',
            value: 'ABS'
        },
        {
            title: 'Tilt recognition',
            value: 'Yes'
        },
        {
            title: 'Replaceable battery',
            value: 'Yes'
        }
    ]

    return (
        <div className='grid grid-cols-3 bg-rebin-grey rounded-xl p-8 mt-12'>
            <img src={Sensor3} alt="Insides of sensor" className='place-self-center' />
            <div className='grid grid-cols-2 grid-rows-6 grid-flow-col col-span-2 gap-x-12 gap-y-4'>
                {specs.map((spec, index) => (
                    <div key={index} className='flex justify-between'>
                        <h4 className='font-bold'>{spec.title}</h4>
                        <div className='bg-white rounded-lg w-40 p-1 px-2 text-right'>
                            <p>{spec.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SpecificationBar