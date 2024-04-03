import React from 'react';
import CountUp from 'react-countup';

const StatisticBar = () => {
  return (
    <div className="bg-rebin-grey mt-20 rounded-xl py-4">
      <dl className="divide-rebin-darkblue grid grid-cols-2  divide-x divide-y-0 divide-solid sm:divide-y-0 md:grid-cols-4">
        <div className="grid place-content-center space-y-5 p-6 text-center">
          <dd className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            <CountUp decimal="," separator="." end={1221} />
          </dd>
          <dt className="text-base text-gray-600">
            Collection <span className="text-rebin-blue font-black">hours</span>{' '}
            saved
          </dt>
        </div>
        <div className="grid place-content-center space-y-5 p-6 text-center">
          <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            <CountUp decimal="," separator="." end={9210} />
          </dd>
          <dt className="text-base text-gray-600">
            <span className="text-rebin-blue font-black">Kilometers</span> less
            covered
          </dt>
        </div>
        <div className="grid place-content-center space-y-5 p-6 text-center">
          <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            <CountUp decimal="," separator="." decimals={1} end={7.6} />
          </dd>
          <dt className="text-base text-gray-600">
            Tons less{' '}
            <span className="text-rebin-blue font-black">
              CO<sub>2</sub>
            </span>
          </dt>
        </div>
        <div className="grid place-content-center space-y-5 p-6 text-center">
          <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            <CountUp decimal="," separator="." end={13410} />
          </dd>
          <dt className="text-base text-gray-600">
            <span className="text-rebin-blue font-black">Plastic</span> bags
            avoided
          </dt>
        </div>
      </dl>
    </div>
  );
};

export default StatisticBar;
