import React from 'react'
import Sensor from "../../../assets/images/sensor/specificationBar/sensor.png";

const SpecificationBar = () => {
    const specs = [
        {
            title: 'Dimensions',
            value: '68 x 35 x 35 mm',
            width: 'big'
        },
        {
            title: 'Connectivity',
            value: 'Sigfox, LoRa',
            width: 'big'
        },
        {
            title: 'T° resistance',
            value: '-40 °C to 90 °C',
            width: 'big'
        },
        {
            title: 'Detection range',
            value: '0 - 500 cm',
            width: 'big'
        },
        {
            title: 'Expected battery life',
            value: '5+ years',
            width: 'big'
        },
        {
            title: 'Configurable intervals',
            value: 'Yes',
            width: 'big'
        },
        {
            title: 'Over-the-air updates',
            value: 'Yes',
            width: 'small'
        },
        {
            title: 'Weight (incl. battery)',
            value: '185 g',
            width: 'small'
        },
        {
            title: 'T° measurement',
            value: 'Yes',
            width: 'small'
        },
        {
            title: 'Casing material',
            value: 'ABS',
            width: 'small'
        },
        {
            title: 'Tilt recognition',
            value: 'Yes',
            width: 'small'
        },
        {
            title: 'Replaceable battery',
            value: 'Yes',
            width: 'small'
        }
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-rebin-grey rounded-xl p-4 md:p-8 mt-12'>
            <img src={Sensor} alt="Insides of sensor" className='place-self-center col-span-2 md:col-span-1 mb-8' />
            <div className='grid lg:grid-cols-2 lg:grid-rows-6 lg:grid-flow-col lg:col-span-2 gap-x-12 gap-y-4'>
                {specs.map((spec, index) => (
                    <div key={index} className='flex justify-between w-full'>
                        <h4 className='font-bold mr-4'>{spec.title}</h4>
                        <div className={`w-40 ${spec.width === 'small' ? 'md:w-20' : ''}`}>
                            <div className={`${spec.width === 'big' ? 'w-40' : 'w-20'} bg-white rounded-lg p-1 px-2 ml-auto`}>
                                <p>{spec.value}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SpecificationBar