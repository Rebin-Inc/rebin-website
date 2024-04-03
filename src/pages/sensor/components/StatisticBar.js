import React from 'react';

const StatisticBar = () => {
  return (
    <div className="bg-rebin-grey rounded-xl py-4">
      <dl className="divide-rebin-darkblue grid grid-cols-2  divide-x divide-y-0 divide-solid sm:divide-y-0 md:grid-cols-4">
        <div className="grid place-content-center space-y-5 p-6 text-center">
          <dd className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            5+
          </dd>
          <dt className="text-base text-gray-600">
            <span className="text-rebin-blue font-black">years</span> battery
            life
          </dt>
        </div>
        <div className="grid place-content-center space-y-5 p-6 text-center">
          <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            &lt;200
          </dd>
          <dt className="text-base text-gray-600">
            <span className="text-rebin-blue font-black">grams</span> total
            sensor weight
          </dt>
        </div>
        <div className="grid place-content-center space-y-5 p-6 text-center">
          <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            50
          </dd>
          <dt className="text-base text-gray-600">
            <span className="text-rebin-blue font-black">mm</span> sensor
            diameter
          </dt>
        </div>
        <div className="grid place-content-center space-y-5 p-6 text-center">
          <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            65
          </dd>
          <dt className="text-base text-gray-600">
            <span className="text-rebin-blue font-black">mm</span> sensor length
          </dt>
        </div>
      </dl>
    </div>
  );
};

export default StatisticBar;
