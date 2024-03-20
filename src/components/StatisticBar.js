import React from "react";
import CountUp from 'react-countup';

const StatisticBar = () => {
  return (
    <div className="bg-rebin-grey py-4 rounded-xl">
      <dl className="grid divide-y-0 grid-cols-2  sm:divide-y-0 md:grid-cols-4 divide-x divide-solid divide-rebin-darkblue">
        <div className="grid place-content-center text-center space-y-5 p-6">
          <dd className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            <CountUp decimal="," separator="." end={1221} />
          </dd>
          <dt className="text-base text-gray-600">
            Collection <span className="font-black text-rebin-blue">hours</span>{" "}
            saved
          </dt>
        </div>
        <div className="grid place-content-center text-center space-y-5 p-6">
          <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            <CountUp decimal="," separator="." end={9210} />
          </dd>
          <dt className="text-base text-gray-600">
            <span className="font-black text-rebin-blue">Kilometers</span> less
            covered
          </dt>
        </div>
        <div className="grid place-content-center text-center space-y-5 p-6">
          <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            <CountUp decimal="," separator="." decimals={1} end={7.6} />
          </dd>
          <dt className="text-base text-gray-600">
            Tons less{" "}
            <span className="font-black text-rebin-blue">
              CO<sub>2</sub>
            </span>
          </dt>
        </div>
        <div className="grid place-content-center text-center space-y-5 p-6">
          <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            <CountUp decimal="," separator="." end={13410} />
          </dd>
          <dt className="text-base text-gray-600">
            <span className="font-black text-rebin-blue">Plastic</span> bags
            avoided
          </dt>
        </div>
      </dl>
    </div>
  );
};

export default StatisticBar;
