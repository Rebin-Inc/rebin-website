import React from 'react';
import Sensor from '../../../assets/images/sensor/specificationBar/sensor.png';

const SpecificationBar = () => {
  const specs = [
    {
      title: 'Dimensions',
      value: '68 x 35 x 35 mm',
      width: 'big',
    },
    {
      title: 'Connectivity',
      value: 'Sigfox, LoRa',
      width: 'big',
    },
    {
      title: 'T° resistance',
      value: '-40 °C to 90 °C',
      width: 'big',
    },
    {
      title: 'Detection range',
      value: '0 - 500 cm',
      width: 'big',
    },
    {
      title: 'Expected battery life',
      value: '5+ years',
      width: 'big',
    },
    {
      title: 'Configurable intervals',
      value: 'Yes',
      width: 'big',
    },
    {
      title: 'Over-the-air updates',
      value: 'Yes',
      width: 'small',
    },
    {
      title: 'Weight (incl. battery)',
      value: '185 g',
      width: 'small',
    },
    {
      title: 'T° measurement',
      value: 'Yes',
      width: 'small',
    },
    {
      title: 'Casing material',
      value: 'ABS',
      width: 'small',
    },
    {
      title: 'Tilt recognition',
      value: 'Yes',
      width: 'small',
    },
    {
      title: 'Replaceable battery',
      value: 'Yes',
      width: 'small',
    },
  ];

  return (
    <div className="bg-rebin-grey mt-12 grid grid-cols-1 rounded-xl p-4 md:grid-cols-2 md:p-8 lg:grid-cols-3">
      <img
        src={Sensor}
        alt="Insides of sensor"
        className="col-span-2 mb-8 place-self-center md:col-span-1"
      />
      <div className="grid gap-x-12 gap-y-4 lg:col-span-2 lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-6">
        {specs.map((spec, index) => (
          <div key={index} className="flex w-full justify-between">
            <h4 className="mr-4 font-bold">{spec.title}</h4>
            <div className={`w-40 ${spec.width === 'small' ? 'md:w-20' : ''}`}>
              <div
                className={`${spec.width === 'big' ? 'w-40' : 'w-20'} ml-auto rounded-lg bg-white p-1 px-2`}
              >
                <p>{spec.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecificationBar;
