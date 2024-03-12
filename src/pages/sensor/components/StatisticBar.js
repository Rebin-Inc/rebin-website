import React from "react";

const StatisticBar = () => {
  return (
    <div className="bg-rebin-grey py-4 rounded-xl">
      <dl className="grid divide-y-0 grid-cols-2  sm:divide-y-0 md:grid-cols-4 divide-x divide-solid divide-rebin-darkblue">
        <div className="grid place-content-center text-center space-y-5 p-6">
          <dd className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            5+
          </dd>
          <dt className="text-base text-gray-600">
            <span className="font-black text-rebin-blue">years</span> battery
            life
          </dt>
        </div>
        <div className="grid place-content-center text-center space-y-5 p-6">
          <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            &lt;200
          </dd>
          <dt className="text-base text-gray-600">
            <span className="font-black text-rebin-blue">grams</span> total
            sensor weight
          </dt>
        </div>
        <div className="grid place-content-center text-center space-y-5 p-6">
          <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            50
          </dd>
          <dt className="text-base text-gray-600">
            <span className="font-black text-rebin-blue">mm</span> sensor
            diameter
          </dt>
        </div>
        <div className="grid place-content-center text-center space-y-5 p-6">
          <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            65
          </dd>
          <dt className="text-base text-gray-600">
            <span className="font-black text-rebin-blue">mm</span> sensor length
          </dt>
        </div>
      </dl>
    </div>
  );
};

export default StatisticBar;
